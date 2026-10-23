import { useRef } from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import { asset } from '../lib/asset.js'
import { useReveal } from '../lib/useReveal.js'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

export default function Layout() {
  const rootRef = useRef(null)
  useReveal(rootRef)

  return (
    <div ref={rootRef} className="relative min-h-dvh overflow-x-clip">
      <div aria-hidden className="aurora">
        <span />
        <span />
        <span />
      </div>
      {/* Paper-grain texture from the Figma background (no blend mode, so the moving aurora stays cheap to draw) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-size-[128px_128px]"
        style={{ backgroundImage: `url("${asset('bg-grain.png')}")` }}
      />
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-8 xl:px-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
