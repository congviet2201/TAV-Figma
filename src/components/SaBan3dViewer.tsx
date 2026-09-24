import { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { type Lang } from '../App'
import { SA_BAN_3D_FRAMES, SA_BAN_3D_CONFIG } from '../data/saBan3dData'

interface Props {
  isOpen: boolean
  onClose: () => void
  lang: Lang
}

const t = {
  ENG: {
    title: 'SA BÀN 3D - ARCHITECTURAL MODEL SPIN',
    dragHint: '← DRAG HORIZONTALLY TO ROTATE 360° →',
    loading: 'Loading 360° Model',
    autoRotateOn: 'Auto-Rotate: ON',
    autoRotateOff: 'Auto-Rotate: OFF',
    reset: 'Reset View',
    close: 'Close (ESC)',
    frame: 'Frame',
    fullscreen: 'Fullscreen',
  },
  VIE: {
    title: 'SA BÀN 3D - MÔ HÌNH KIẾN TRÚC TƯƠNG TÁC 360°',
    dragHint: '← KÉO CHUỘT NẰM NGANG ĐỂ XOAY MÔ HÌNH 360° →',
    loading: 'Đang Tải Sa Bàn 3D',
    autoRotateOn: 'Tự Xoay: BẬT',
    autoRotateOff: 'Tự Xoay: TẮT',
    reset: 'Về Ban Đầu',
    close: 'Đóng (ESC)',
    frame: 'Khung hình',
    fullscreen: 'Toàn Màn Hình',
  },
}

export default function SaBan3dViewer({ isOpen, onClose, lang }: Props) {
  const tx = t[lang]
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [loadProgress, setLoadProgress] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  // Image cache array
  const cachedImagesRef = useRef<HTMLImageElement[]>([])
  const isDraggingRef = useRef<boolean>(false)
  const startXRef = useRef<number>(0)
  const lastXRef = useRef<number>(0)
  const velocityRef = useRef<number>(0)

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // 1. Progressive Image Preloading
  useEffect(() => {
    if (!isOpen) return

    let isMounted = true
    const total = SA_BAN_3D_FRAMES.length
    let loadedCount = 0
    const images: HTMLImageElement[] = new Array(total)

    // Phase 1: Load starting frames (0..10) first for immediate display
    const loadFrame = (idx: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = SA_BAN_3D_FRAMES[idx]
        img.onload = () => {
          images[idx] = img
          loadedCount++
          if (isMounted) {
            setLoadProgress(Math.round((loadedCount / total) * 100))
          }
          resolve()
        }
        img.onerror = () => {
          // Fallback image resolve
          images[idx] = img
          loadedCount++
          if (isMounted) {
            setLoadProgress(Math.round((loadedCount / total) * 100))
          }
          resolve()
        }
      })
    }

    const loadAll = async () => {
      // Priority initial frames
      const initialBatch = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, total - 1]
      await Promise.all(initialBatch.map(idx => loadFrame(idx)))
      if (isMounted) {
        cachedImagesRef.current = images
      }

      // Load remaining frames asynchronously in background
      for (let i = 0; i < total; i++) {
        if (!images[i]) {
          await loadFrame(i)
        }
      }

      if (isMounted) {
        setIsLoaded(true)
      }
    }

    loadAll()

    return () => {
      isMounted = false
    }
  }, [isOpen])

  // 2. Render current frame onto high-DPI canvas
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const normalizedIndex = ((idx % SA_BAN_3D_CONFIG.totalFrames) + SA_BAN_3D_CONFIG.totalFrames) % SA_BAN_3D_CONFIG.totalFrames
    const img = cachedImagesRef.current[normalizedIndex]

    if (!img || !img.complete) return

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
    }

    ctx.save()
    ctx.scale(dpr, dpr)
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Aspect-fit image calculations
    const imgAspect = img.naturalWidth / img.naturalHeight || 16 / 9
    const containerAspect = rect.width / rect.height

    let drawW = rect.width
    let drawH = rect.height
    let drawX = 0
    let drawY = 0

    if (containerAspect > imgAspect) {
      drawH = rect.height
      drawW = rect.height * imgAspect
      drawX = (rect.width - drawW) / 2
    } else {
      drawW = rect.width
      drawH = rect.width / imgAspect
      drawY = (rect.height - drawH) / 2
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH)
    ctx.restore()
  }, [])

  // Draw current frame on index or loaded state change
  useEffect(() => {
    if (isOpen) {
      drawFrame(currentIndex)
    }
  }, [isOpen, currentIndex, drawFrame])

  // Handle window resize
  useEffect(() => {
    if (!isOpen) return
    const handleResize = () => drawFrame(currentIndex)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen, currentIndex, drawFrame])

  // 3. Auto-Rotation Logic
  useEffect(() => {
    if (!isOpen || !isAutoRotating) {
      if (autoRotateIntervalRef.current) clearInterval(autoRotateIntervalRef.current)
      return
    }

    autoRotateIntervalRef.current = setInterval(() => {
      if (!isDraggingRef.current) {
        setCurrentIndex(prev => (prev + 1) % SA_BAN_3D_CONFIG.totalFrames)
      }
    }, SA_BAN_3D_CONFIG.autoRotateSpeedMs)

    return () => {
      if (autoRotateIntervalRef.current) clearInterval(autoRotateIntervalRef.current)
    }
  }, [isOpen, isAutoRotating])

  // Reset idle timer to resume auto-rotation after inactivity
  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => {
      setIsAutoRotating(true)
    }, SA_BAN_3D_CONFIG.resumeAutoRotateDelayMs)
  }, [])

  // 4. Drag & Momentum Physics Interaction
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true
    startXRef.current = e.clientX
    lastXRef.current = e.clientX
    velocityRef.current = 0
    setIsAutoRotating(false)
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return
    const deltaX = e.clientX - lastXRef.current
    lastXRef.current = e.clientX
    velocityRef.current = deltaX

    const frameShift = Math.round(deltaX / SA_BAN_3D_CONFIG.dragSensitivity)
    if (frameShift !== 0) {
      setCurrentIndex(prev => {
        const next = (prev - frameShift) % SA_BAN_3D_CONFIG.totalFrames
        return (next + SA_BAN_3D_CONFIG.totalFrames) % SA_BAN_3D_CONFIG.totalFrames
      })
    }
  }

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false

    // Apply inertia / momentum
    let currentVel = velocityRef.current
    const runInertia = () => {
      if (Math.abs(currentVel) > 0.5 && !isDraggingRef.current) {
        const frameShift = Math.round(currentVel / SA_BAN_3D_CONFIG.dragSensitivity)
        if (frameShift !== 0) {
          setCurrentIndex(prev => {
            const next = (prev - frameShift) % SA_BAN_3D_CONFIG.totalFrames
            return (next + SA_BAN_3D_CONFIG.totalFrames) % SA_BAN_3D_CONFIG.totalFrames
          })
        }
        currentVel *= SA_BAN_3D_CONFIG.inertiaDecay
        animFrameRef.current = requestAnimationFrame(runInertia)
      } else {
        resetIdleTimer()
      }
    }
    runInertia()
  }

  // Keyboard navigation & ESC key
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        setIsAutoRotating(false)
        setCurrentIndex(prev => (prev + 1) % SA_BAN_3D_CONFIG.totalFrames)
        resetIdleTimer()
      } else if (e.key === 'ArrowLeft') {
        setIsAutoRotating(false)
        setCurrentIndex(prev => (prev - 1 + SA_BAN_3D_CONFIG.totalFrames) % SA_BAN_3D_CONFIG.totalFrames)
        resetIdleTimer()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [isOpen, onClose, resetIdleTimer])

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050505]/95 backdrop-blur-2xl text-white select-none animate-fade-in"
    >
      {/* ── Top Header Toolbar ── */}
      <div className="w-full px-6 py-5 flex items-center justify-between border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#FF6B00] animate-pulse" />
          <h2 className="font-display font-bold text-lg md:text-xl tracking-wider text-white uppercase">
            {tx.title}
          </h2>
        </div>

        {/* Center Progress or Frame Index */}
        <div className="hidden md:flex items-center gap-4 font-mono text-xs text-[#FF9E00]">
          {!isLoaded ? (
            <div className="flex items-center gap-2 bg-[#FF6B00]/15 px-3 py-1.5 rounded-full border border-[#FF6B00]/40">
              <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-ping" />
              <span>{tx.loading}: {loadProgress}%</span>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/15 px-3.5 py-1.5 rounded-full text-white/80 font-bold">
              {tx.frame}: {currentIndex + 1} / {SA_BAN_3D_CONFIG.totalFrames}
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-outline w-10 h-10 rounded-full flex items-center justify-center p-0 group hover:border-[#FF6B00] active:scale-95 transition-all"
          title={tx.close}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:stroke-[#FF6B00]">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* ── Main Interactive 3D Spin Canvas Viewport ── */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center p-4 overflow-hidden">
        {/* Loading Spinner Overlay if preparing initial frames */}
        {loadProgress < 10 && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505]/80 backdrop-blur-sm gap-4">
            <div className="w-14 h-14 border-4 border-[#FF6B00]/20 border-t-[#FF6B00] rounded-full animate-spin" />
            <div className="font-mono text-sm text-[#FF9E00] font-bold tracking-widest uppercase">
              {tx.loading} {loadProgress}%
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="w-full h-full max-w-[1400px] max-h-[85vh] object-contain cursor-grab active:cursor-grabbing touch-none rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 hover:border-[#FF6B00]/40 transition-colors"
        />

        {/* Horizontal Drag Indicator Prompt Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none bg-black/60 backdrop-blur-md px-5 py-2 rounded-full border border-white/15 shadow-xl flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF9E00" strokeWidth="2">
            <path d="M7 16l-4-4 4-4m10 8l4-4-4-4M3 12h18" />
          </svg>
          <span className="font-mono text-xs font-bold text-white/90 tracking-wider uppercase">
            {tx.dragHint}
          </span>
        </div>
      </div>

      {/* ── Bottom Controls Toolbar ── */}
      <div className="w-full px-6 py-4 flex items-center justify-between border-t border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* Toggle Auto Rotate Button */}
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border transition-all ${
              isAutoRotating
                ? 'bg-[#FF6B00]/20 border-[#FF6B00] text-[#FF9E00]'
                : 'bg-white/5 border-white/15 text-white/70 hover:text-white'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isAutoRotating ? 'bg-[#FF6B00] animate-ping' : 'bg-white/40'}`} />
            <span>{isAutoRotating ? tx.autoRotateOn : tx.autoRotateOff}</span>
          </button>

          {/* Reset View Button */}
          <button
            onClick={() => {
              setCurrentIndex(0)
              setIsAutoRotating(true)
            }}
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white/5 border border-white/15 text-white/80 hover:text-white hover:border-[#FF6B00] transition-all"
          >
            {tx.reset}
          </button>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white/5 border border-white/15 text-white/80 hover:text-white hover:border-[#FF6B00] transition-all flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          <span>{isFullscreen ? 'Exit Fullscreen' : tx.fullscreen}</span>
        </button>
      </div>
    </div>,
    document.body
  )
}
