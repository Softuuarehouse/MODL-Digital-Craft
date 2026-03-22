import { useEffect, useRef, useState } from 'react'

/**
 * useInView — triggers a boolean when element enters viewport.
 * @param {number} threshold — 0–1 visibility ratio
 * @param {boolean} once — only trigger once
 */
export default function useInView(threshold = 0.15, once = true) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, visible }
}
