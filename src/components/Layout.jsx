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
      {/* Paper-grain texture from the Figma background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-size-[128px_128px] mix-blend-overlay"
        style={{ backgroundImage: `url("${asset('bg-noise.png')}")` }}
      />
      <Header />
      <main className="mx-auto w-full max-w-[1380px] px-4 md:px-8">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
