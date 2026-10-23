import { createHashRouter } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

// Pages other than the home page load on demand, so the first visit downloads less JavaScript.
const page = (load) => () => load().then((m) => ({ Component: m.default }))

// Hash routes (/#/about) work on GitHub Pages without a 404 redirect hack.
export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', lazy: page(() => import('./pages/About.jsx')) },
      { path: 'works', lazy: page(() => import('./pages/Works.jsx')) },
      { path: 'projects/:slug', lazy: page(() => import('./pages/Project.jsx')) },
    ],
  },
])
