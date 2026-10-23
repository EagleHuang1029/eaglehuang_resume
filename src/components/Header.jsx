import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { asset } from '../lib/asset.js'
import { useTheme } from '../lib/useTheme.js'
import ContactButton from './ContactButton.jsx'

const links = [
  { to: '/about', label: '關於我' },
  { to: '/works', label: '作品' },
]

const navClass = ({ isActive }) =>
  `text-xl md:text-base font-black tracking-[0.4px] transition hover:text-accent ${isActive ? 'text-accent' : 'text-ink-strong dark:text-ink'}`

function ThemeToggle({ className = '' }) {
  const [theme, toggle] = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      className={`inline-flex items-center gap-2.5 rounded-full border-4 border-ink-strong bg-black/10 px-6 py-2 font-black tracking-[0.32px] text-ink dark:border-ink ${className}`}
    >
      <img src={asset('icons/theme.svg')} alt="" className="size-6 dark:invert" />
      {theme === 'dark' ? '淺色' : '深色'}
    </button>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Case-study pages use the slim Figma header: only a 回首頁 pill.
  if (pathname.startsWith('/projects/')) {
    return (
      <header className="sticky top-0 z-30 border border-white/50 bg-white/35 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
        <div className="mx-auto flex max-w-[1920px] items-center px-4 py-4 md:px-12 md:py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-button px-5 py-2.5 font-black tracking-[0.32px] text-white transition hover:opacity-90"
          >
            <span aria-hidden className="text-xl leading-none md:text-base">←</span>
            回首頁
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-30 border border-white/50 bg-white/35 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-4 py-4 md:px-12 md:py-6">
        <Link to="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <img
            src={asset('home/avatar.png')}
            alt=""
            className="size-10 rounded-full border-2 border-accent object-cover"
          />
          <span className="font-display text-xl font-extrabold text-ink-strong md:text-2xl dark:text-ink">
            Eagle.Huang
          </span>
        </Link>

        <nav className="hidden items-center gap-[72px] md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass}>
              {l.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <ContactButton className="px-6 py-3" />
          </div>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center text-2xl md:hidden"
          aria-label={open ? '關閉選單' : '開啟選單'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col items-center gap-5 px-4 pb-6 text-center md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={navClass}>
              {l.label}
            </NavLink>
          ))}
          <div className="flex flex-wrap justify-center gap-3">
            <ThemeToggle />
            <ContactButton className="px-6 py-3" />
          </div>
        </nav>
      )}
    </header>
  )
}
