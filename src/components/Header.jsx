import { useState } from 'react'
import { NavLink } from 'react-router'

const links = [
  { to: '/about', label: '關於我' },
  { to: '/works', label: '作品' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 backdrop-blur">
      <div className="mx-auto flex h-[90px] max-w-[1920px] items-center justify-between px-4 md:px-12">
        <NavLink to="/" className="font-display text-xl font-extrabold">
          Eagle.Huang
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'font-bold text-brand' : 'font-bold')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="開啟選單"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-bold">
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
