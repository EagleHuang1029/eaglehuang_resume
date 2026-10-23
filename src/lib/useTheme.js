import { useEffect, useState } from 'react'

const KEY = 'theme'

function initialTheme() {
  try {
    return localStorage.getItem(KEY) ?? 'light'
  } catch {
    return 'light'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // storage may be blocked; the toggle still works for this visit
    }
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}
