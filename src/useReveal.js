import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true)
        ob.unobserve(el)
      }
    }, { threshold: 0.15, ...options })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return [ref, shown]
}
