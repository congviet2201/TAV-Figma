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

      {/* Bottom Floating Bar */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between gap-4 mt-auto pointer-events-auto">
        {/* Bottom Left: Audio Mute/Unmute ICON-ONLY Button */}
        <button
          onClick={toggleMute}
          className="btn-outline w-12 h-12 rounded-full flex items-center justify-center p-0 group"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-black">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-black">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>

        {/* Bottom Right: Enter Home Page Button */}
        <button
          onClick={() => navigate('home')}
          className="btn-outline px-8 py-3.5 text-xs md:text-sm group rounded-full"
        >
          <span>{lang === 'ENG' ? 'Enter Home Page' : 'Vào Trang Chủ'}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="group-hover:translate-x-1 transition-transform group-hover:stroke-black"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  )
}
