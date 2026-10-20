import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let observer = null
    let done = false

    function cleanup() {
      if (observer) observer.disconnect()
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }

    function reveal() {
      if (done) return
      done = true
      setShown(true)
      cleanup()
    }

    function check() {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) reveal()
    }

    // Browsers without IntersectionObserver should still see the content.
    if (typeof IntersectionObserver === 'undefined') {
      reveal()
      return cleanup
    }

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) reveal()
    }, { threshold: 0.15, ...options })
    observer.observe(el)

    // Safety net: never leave content permanently hidden if an observer
    // callback is missed (e.g. restored scroll position or bfcache).
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    return cleanup
  }, [])

  return [ref, shown]
}
