import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let raf
    let mx = 0, my = 0
    let rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const loop = () => {
      // dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
      // ring lags slightly
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }

    const onOver = (e) => {
      const el = e.target.closest('a, button, [data-hover]')
      setHovering(!!el)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={`cursor  ${hovering ? 'cursor--hovering' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'cursor-ring--hovering' : ''}`} />
    </>
  )
}
