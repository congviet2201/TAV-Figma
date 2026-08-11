import { useState, useRef } from 'react'
import { type Page, type Lang } from '../App'

interface Props {
  navigate: (page: Page) => void
  lang: Lang
  onOpenContact?: () => void
}

export default function IntroPage({ navigate, lang, onOpenContact }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

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
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col justify-between select-none">
      {/* Continuous Fullscreen Intro Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src="/video/sample-test.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
        />

        {/* Minimal gradient at very bottom only for controls visibility */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Center Play Overlay when user pauses video */}
      {!isPlaying && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 rounded-full bg-[#FF6B00]/90 text-black flex items-center justify-center shadow-2xl shadow-[#FF6B00]/60 hover:scale-110 transition-transform">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}

      {/* Bottom Minimal Bar */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto pointer-events-auto">
        {/* Minimal Studio Label */}
        <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF9E00] animate-pulse shadow-[0_0_10px_#FF9E00]" />
          <span className="font-mono text-xs font-bold text-[#FF9E00] uppercase tracking-wider">
            TAV 3D | {lang === 'ENG' ? 'SHOWREEL INTRO VIDEO' : 'VIDEO INTRO LIÊN TỤC'}
          </span>
        </div>

        {/* Enter Homepage & Quick Actions */}
        <div className="flex items-center gap-3">
          {/* Main CTA to Enter Homepage */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF9E00] to-[#FF6B00] text-black font-display font-extrabold text-xs md:text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,107,0,0.6)] group"
          >
            <span>{lang === 'ENG' ? 'Enter Home Page' : 'Vào Trang Chủ'}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* Quick Contact ICON Button */}
          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="relative w-10 h-10 rounded-xl bg-black/60 hover:bg-[#FF6B00] text-white hover:text-black border border-white/15 hover:border-[#FF6B00] flex items-center justify-center transition-all shadow-lg active:scale-95 group"
              title={lang === 'ENG' ? 'Consultation & Contact' : 'Tư Vấn & Liên Hệ'}
            >
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF9E00] border-2 border-black animate-pulse" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-12 transition-transform">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </button>
          )}

          {/* Audio Mute/Unmute Control Button */}
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/50 hover:bg-[#FF6B00] text-white hover:text-black border border-white/15 hover:border-[#FF6B00] transition-all backdrop-blur-md font-mono text-xs shadow-lg"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
                <span>{lang === 'ENG' ? 'Unmute' : 'Bật Tiếng'}</span>
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                <span>{lang === 'ENG' ? 'Mute' : 'Tắt Tiếng'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
