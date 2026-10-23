import { createHashRouter } from 'react-router'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Works from './pages/Works.jsx'

// Hash routes (/#/about) work on GitHub Pages without a 404 redirect hack.
export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'works', element: <Works /> },
      { path: 'projects/:slug', element: <Project /> },
    ],
  },
])
