import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only activate custom cursor on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (!target) return

      const interactive = target.closest('button, a, .interactive-card, input, select, textarea, [data-cursor]')
      if (interactive) {
        setIsHovered(true)
        const customText = interactive.getAttribute('data-cursor')
        setCursorText(customText || '')
      } else {
        setIsHovered(false)
        setCursorText('')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out will-change-transform hidden md:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer Interactive Ring (Cyber Orange Brand Accent) */}
      <div
        className={`rounded-full border flex items-center justify-center transition-all duration-300 ease-out ${
          isHovered
            ? 'w-11 h-11 bg-[#FF6B00]/15 border-[#FF9E00]/80 backdrop-blur-xs scale-105 shadow-[0_0_20px_rgba(255,107,0,0.4)]'
            : 'w-5 h-5 bg-transparent border-white/40 scale-100'
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[8px] font-extrabold text-[#FF9E00] tracking-widest uppercase animate-fade-in select-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Core Dot */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
          isHovered ? 'w-1.5 h-1.5 bg-[#FF9E00]' : 'w-1 h-1 bg-white'
        }`}
      />
    </div>
  )
}
