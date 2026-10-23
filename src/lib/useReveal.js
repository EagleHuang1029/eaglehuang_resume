import { useLayoutEffect } from 'react'

// A section drawn as a panel (rounded card) moves as one piece; otherwise its children enter one by one.
const isPanel = (el) => /\b(card|rounded)/.test(el.className) && !el.querySelector('section')

const blocksOf = (section) => {
  if (section.tagName === 'FOOTER') return [...section.children]
  if (isPanel(section)) return [section]
  return [...section.children].filter((el) => el.tagName !== 'SECTION' && !el.querySelector('section'))
}

// Gives every content block a rise-and-zoom entrance the first time it scrolls into view.
export function useReveal(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    const scan = () => {
      for (const section of root.querySelectorAll('section, footer')) {
        // Skip anything already animating, or sitting inside a block that is
        const blocks = blocksOf(section).filter((el) => !el.closest('[data-reveal]'))
        blocks.forEach((el, i) => {
          el.dataset.reveal = ''
          el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 80}ms`)
          el.classList.add('reveal')
          io.observe(el)
        })
      }
    }

    scan()
    // Pages load lazily and some blocks expand later, so pick up new content as it mounts.
    const mo = new MutationObserver(scan)
    mo.observe(root, { childList: true, subtree: true })
    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [rootRef])
}
