import { useEffect, useState, useRef, ReactNode } from 'react'
import { type Page, type Lang } from '../App'

interface Props {
  currentPage: Page
  targetPage: Page | null
  lang: Lang
  isTransitioning: boolean
  onTransitionComplete: () => void
  onTransitionEnd: () => void
  children: ReactNode
}

interface PageMeta {
  code: string
  titleENG: string
  titleVIE: string
  type: string
}

const PAGE_META: Record<Page, PageMeta> = {
  intro: { code: '00 / 06', titleENG: 'INTRO VIDEO', titleVIE: 'VIDEO INTRO', type: 'Cinematic Spatial' },
  home: { code: '01 / 06', titleENG: 'HOME', titleVIE: 'TRANG CHỦ', type: 'Architectural Reveal' },
  about: { code: '02 / 06', titleENG: 'ABOUT US', titleVIE: 'VỀ CHÚNG TÔI', type: 'Editorial Spatial' },
  services: { code: '03 / 06', titleENG: 'SERVICES', titleVIE: 'DỊCH VỤ 3D', type: 'Technical Grid Assembly' },
  projects: { code: '04 / 06', titleENG: 'PROJECTS', titleVIE: 'DỰ ÁN', type: 'Blueprint Spatial Frame' },
  blog: { code: '05 / 06', titleENG: 'BLOG', titleVIE: 'BLOG', type: 'Editorial Transformation' },
  news: { code: '06 / 06', titleENG: 'NEWS', titleVIE: 'TIN TỨC', type: 'Editorial Transformation' },
}

export default function PageTransitionController({
  currentPage,
  targetPage,
  lang,
  isTransitioning,
  onTransitionComplete,
  onTransitionEnd,
  children,
}: Props) {
  const [phase, setPhase] = useState<'idle' | 'pre' | 'scan' | 'spatial' | 'reveal'>('idle')
  const [activePageMeta, setActivePageMeta] = useState<PageMeta>(PAGE_META[currentPage] || PAGE_META.home)
  const timerRef = useRef<NodeJS.Timeout[]>([])

  const clearTimers = () => {
    timerRef.current.forEach(t => clearTimeout(t))
    timerRef.current = []
  }

  useEffect(() => {
    if (!isTransitioning || !targetPage) return

    const destMeta = PAGE_META[targetPage] || PAGE_META.home
    setActivePageMeta(destMeta)
    clearTimers()

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setPhase('pre')
      const t1 = setTimeout(() => {
        onTransitionComplete()
        setPhase('reveal')
      }, 200)
      const t2 = setTimeout(() => {
        setPhase('idle')
        onTransitionEnd()
      }, 400)
      timerRef.current = [t1, t2]
      return
    }

    // ── LUXURIOUS SLOW CINEMATIC SPATIAL SHUTTER PASSTHROUGH (1150ms) ──
    // Phase 01: Pre-transition (0ms - 220ms)
    setPhase('pre')

    // Phase 02: Shutters Lock & Volumetric Laser Seam (220ms - 500ms)
    const tScan = setTimeout(() => {
      setPhase('scan')
    }, 220)

    // Phase 03: 3D Spatial Portal & Title Reveal (500ms - 720ms)
    const tSpatial = setTimeout(() => {
      setPhase('spatial')
    }, 500)

    // Trigger DOM page switch under cover (700ms)
    const tSwitch = setTimeout(() => {
      onTransitionComplete()
    }, 700)

    // Phase 04: Slow Luxurious Shutter Open & Reveal Target Page (720ms - 1150ms)
    const tReveal = setTimeout(() => {
      setPhase('reveal')
    }, 720)

    // Reset to Idle & Unlock Navigation (1150ms Total)
    const tIdle = setTimeout(() => {
      setPhase('idle')
      onTransitionEnd()
    }, 1150)

    timerRef.current = [tScan, tSpatial, tSwitch, tReveal, tIdle]

    return () => clearTimers()
  }, [isTransitioning])

  const isOverlayVisible = phase !== 'idle'

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 60FPS Hardware-Accelerated 3D Camera Depth Container */}
      <div
        className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{
          transform:
            phase === 'pre'
              ? 'scale(0.97) translate3d(0, -6px, 0)'
              : phase === 'scan' || phase === 'spatial'
              ? 'scale(0.94) translate3d(0, -12px, 0)'
              : phase === 'reveal'
              ? 'scale(1) translate3d(0, 0, 0)'
              : 'none',
          opacity: phase === 'scan' || phase === 'spatial' ? 0.2 : 1,
        }}
      >
        {children}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         ULTRA-WOW CINEMATIC ARCHITECTURAL SPATIAL SHUTTER SYSTEM (1150ms)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isOverlayVisible && (
        <div className="fixed inset-0 z-[999] pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Top Shutter Panel */}
          <div
            className="absolute top-0 left-0 right-0 h-[50.5vh] bg-[#050505]/98 backdrop-blur-2xl border-b border-[#FF6B00]/40 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{
              transform:
                phase === 'pre'
                  ? 'translate3d(0, -100%, 0)'
                  : phase === 'reveal'
                  ? 'translate3d(0, -100%, 0)'
                  : 'translate3d(0, 0%, 0)',
            }}
          />

          {/* Bottom Shutter Panel */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[50.5vh] bg-[#050505]/98 backdrop-blur-2xl border-t border-[#FF6B00]/40 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{
              transform:
                phase === 'pre'
                  ? 'translate3d(0, 100%, 0)'
                  : phase === 'reveal'
                  ? 'translate3d(0, 100%, 0)'
                  : 'translate3d(0, 0%, 0)',
            }}
          />

          {/* Volumetric Cyber Orange Laser Seam */}
          <div
            className="absolute left-0 right-0 h-[2px] z-30 transition-all duration-300 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #FF6B00 20%, #FF9E00 50%, #FF6B00 80%, transparent 100%)',
              boxShadow: '0 0 35px #FF9E00, 0 0 70px #FF6B00',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: phase === 'scan' || phase === 'spatial' ? 1 : 0,
            }}
          />

          {/* Large Architectural Editorial Title Scale Reveal */}
          <div
            className="relative z-40 text-center flex flex-col items-center justify-center p-6 max-w-[750px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform:
                phase === 'pre'
                  ? 'scale(0.85) translate3d(0, 20px, 0)'
                  : phase === 'scan'
                  ? 'scale(0.98) translate3d(0, 0, 0)'
                  : phase === 'spatial'
                  ? 'scale(1.05) translate3d(0, 0, 0)'
                  : phase === 'reveal'
                  ? 'scale(1.1) translate3d(0, -20px, 0)'
                  : 'scale(0.9)',
              opacity: phase === 'scan' || phase === 'spatial' ? 1 : 0,
            }}
          >
            {/* Active Page Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/60 text-[#FF9E00] font-mono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(255,107,0,0.3)] backdrop-blur-md font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse" />
              <span>{activePageMeta.code}</span>
            </div>

            {/* Large Architectural Editorial Title (IN HOA) */}
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wider uppercase mb-3 drop-shadow-[0_0_40px_rgba(255,107,0,0.8)]">
              {lang === 'ENG' ? activePageMeta.titleENG : activePageMeta.titleVIE}
            </h2>

            {/* Subtitle */}
            <p className="font-mono text-xs sm:text-sm text-white/70 uppercase tracking-widest font-semibold">
              TAV 3D VISUALIZATION STUDIO
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
