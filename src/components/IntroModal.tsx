import { useState, useRef, useEffect } from 'react'
import { type Lang } from '../App'

interface Props {
  isOpen: boolean
  onClose: () => void
  lang: Lang
  initialTime?: number
}

const chapters = [
  { time: 0, labelENG: '00:00 Overview', labelVIE: '00:00 Tổng Quan' },
  { time: 10, labelENG: '00:10 3D Rendering', labelVIE: '00:10 Rendering 3D' },
  { time: 25, labelENG: '00:25 Architectural Visuals', labelVIE: '00:25 Trực Quan Kiến Trúc' },
  { time: 40, labelENG: '00:40 VR & Spatial Tech', labelVIE: '00:40 Thực Tế Ảo VR' },
  { time: 60, labelENG: '01:00 Creative Studio', labelVIE: '01:00 Studio Sáng Tạo' },
]

export default function IntroModal({ isOpen, onClose, lang, initialTime = 0 }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showControls, setShowControls] = useState(true)
  const [autoplayBlockedAudio, setAutoplayBlockedAudio] = useState(false)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      if (videoRef.current) {
        videoRef.current.currentTime = initialTime
        // Try playing with sound first
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              setAutoplayBlockedAudio(false)
            })
            .catch(() => {
              // If browser blocked sound auto-play, fallback to muted autoplay
              if (videoRef.current) {
                videoRef.current.muted = true
                setIsMuted(true)
                videoRef.current.play().then(() => {
                  setIsPlaying(true)
                  setAutoplayBlockedAudio(true)
                }).catch(() => setIsPlaying(false))
              }
            })
        }
      }
    } else {
      document.body.style.overflow = ''
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, initialTime])

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false)
    }, 3500)
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
    setAutoplayBlockedAudio(false)
  }

  const unmuteWithSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = false
    setIsMuted(false)
    setVolume(1)
    videoRef.current.volume = 1
    setAutoplayBlockedAudio(false)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (videoRef.current) {
      videoRef.current.volume = val
      videoRef.current.muted = val === 0
      setIsMuted(val === 0)
    }
    setAutoplayBlockedAudio(false)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setCurrentTime(val)
    if (videoRef.current) {
      videoRef.current.currentTime = val
    }
  }

  const jumpToChapter = (timeSec: number) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = timeSec
    setCurrentTime(timeSec)
    if (!isPlaying) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleFullScreen = () => {
    const container = document.getElementById('intro-video-container')
    if (!container) return
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => console.error(err))
    } else {
      document.exitFullscreen()
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Handle Video Ended -> Automatically transition to Homepage
  const handleVideoEnded = () => {
    setIsPlaying(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      id="intro-video-container"
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between overflow-hidden animate-modal-in select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src="/video/sample-test.mp4"
          preload="metadata"
          className="w-full h-full object-contain"
          playsInline
          onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
          onEnded={handleVideoEnded}
        />
      </div>

      {/* Top Header Bar */}
      <div
        className={`relative z-20 flex items-center justify-between px-6 md:px-10 py-6 transition-opacity duration-300 bg-gradient-to-b from-black/80 via-black/40 to-transparent ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#FF6B00]/15 border border-[#FF6B00]/40 px-3 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#FF9E00] tracking-wider uppercase">
              TAV INTRO SHOWREEL
            </span>
          </div>
          <span className="hidden md:inline font-mono text-xs text-white/60 bg-black/40 px-3 py-1 rounded-full border border-white/10">
            {lang === 'ENG' ? 'Auto-enters Homepage when video ends' : 'Tự động chuyển vào Trang chủ khi video kết thúc'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Unmute Prompt Button if browser blocked sound */}
          {autoplayBlockedAudio && (
            <button
              onClick={unmuteWithSound}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00] text-black font-display text-xs font-extrabold shadow-[0_0_20px_rgba(255,107,0,0.6)] animate-pulse"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
              <span>{lang === 'ENG' ? 'Bật Âm Thanh' : 'Bật Âm Thanh Intro'}</span>
            </button>
          )}

          {/* Chapter Selector Dropdown / Pills */}
          <div className="hidden lg:flex items-center gap-2 bg-black/50 border border-white/10 p-1 rounded-full backdrop-blur-md">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => jumpToChapter(ch.time)}
                className={`px-3 py-1 rounded-full font-mono text-[11px] font-semibold transition-all ${
                  currentTime >= ch.time && (idx === chapters.length - 1 || currentTime < chapters[idx + 1].time)
                    ? 'bg-[#FF6B00] text-black shadow-lg shadow-[#FF6B00]/40'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {lang === 'ENG' ? ch.labelENG : ch.labelVIE}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#FF6B00] border border-white/20 hover:border-[#FF6B00] text-white hover:text-black font-display text-xs font-bold transition-all backdrop-blur-md shadow-lg"
          >
            <span>{lang === 'ENG' ? 'Skip Intro / Enter Site' : 'Bỏ Qua / Vào Trang Chủ'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Center Big Play Pause Overlay (Visible on Hover/Pause) */}
      {!isPlaying && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 rounded-full bg-[#FF6B00]/90 text-black flex items-center justify-center shadow-2xl shadow-[#FF6B00]/60 hover:scale-110 transition-transform">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}

      {/* Bottom Custom Video Controls Bar */}
      <div
        className={`relative z-20 px-6 md:px-12 pb-8 pt-12 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/50 to-transparent ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Timeline Scrubber */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-white/70 min-w-[42px] text-right">{formatTime(currentTime)}</span>
          <div className="relative flex-1 flex items-center">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="video-scrubber"
            />
          </div>
          <span className="font-mono text-xs text-white/50 min-w-[42px]">{formatTime(duration)}</span>
        </div>

        {/* Buttons Control Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FF6B00] text-white hover:text-black border border-white/15 flex items-center justify-center transition-all"
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            {/* Mute/Unmute */}
            <div className="flex items-center gap-2 group">
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FF6B00] text-white hover:text-black border border-white/15 flex items-center justify-center transition-all"
              >
                {isMuted || volume === 0 ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 accent-[#FF6B00] cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Side Tools */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullScreen}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FF6B00] text-white hover:text-black border border-white/15 flex items-center justify-center transition-all"
              title="Fullscreen"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
