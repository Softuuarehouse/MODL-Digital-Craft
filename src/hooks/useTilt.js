import { useRef, useCallback } from 'react'

/**
 * useTilt — adds a subtle 3D tilt effect on mouse move.
 * Returns { ref, onMouseMove, onMouseLeave }
 */
export default function useTilt(maxDeg = 8) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width  - 0.5   // -0.5 → 0.5
    const y = (e.clientY - top)  / height - 0.5
    el.style.transform = `
      perspective(var(--perspective))
      rotateY(${x * maxDeg * 2}deg)
      rotateX(${-y * maxDeg}deg)
      translateZ(10px)
    `
  }, [maxDeg])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = `
      perspective(var(--perspective))
      rotateY(0deg) rotateX(0deg) translateZ(0px)
    `
    el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 500)
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
