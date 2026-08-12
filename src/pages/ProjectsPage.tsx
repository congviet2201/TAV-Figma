import { useState, useEffect, useCallback } from 'react'
import { type Lang } from '../App'
import { projectsData } from '../data/tavData'

interface Props { lang: Lang }

const t = {
  ENG: {
    label: 'Projects',
    headline: 'Our Featured',
    headline2: 'Work',
    all: 'All',
    viewDetails: 'View Details',
    close: 'Close',
    gallery: 'Project Gallery & Media',
    prev: 'Previous (←)',
    next: 'Next (→)',
  },
  VIE: {
    label: 'Dự Án',
    headline: 'Công Trình',
    headline2: 'Nổi Bật',
    all: 'Tất Cả',
    viewDetails: 'Xem Chi Tiết',
    close: 'Đóng',
    gallery: 'Thư Viện Ảnh & Video Dự Án',
    prev: 'Trước (←)',
    next: 'Tiếp (→)',
  },
}

const projects = projectsData

const categories = ['All', '3D Rendering', '3D Mapping', 'VR Tour', '3D Modeling', 'Interactive App']
const categoriesVIE = ['Tất Cả', 'Kết Xuất 3D', '3D Mapping', 'Tour VR', 'Mô Hình 3D', 'Ứng Dụng Tương Tác']

export default function ProjectsPage({ lang }: Props) {
  const tx = t[lang]
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0)
  const [mediaList, setMediaList] = useState<string[]>([])

  const cats = lang === 'ENG' ? categories : categoriesVIE

  const filtered = activeFilter === 'All' || activeFilter === 'Tất Cả'
    ? projects
    : projects.filter(p => lang === 'ENG' ? p.category === activeFilter : p.categoryVIE === activeFilter)

  const isVideoUrl = (url?: string) => {
    if (!url) return false
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.includes('/video/') || url.includes('video/upload')
  }

  const handleOpenModal = (proj: typeof projects[0]) => {
    const list: string[] = []
    if (proj.img) list.push(proj.img)
    if (proj.video && !list.includes(proj.video)) list.push(proj.video)
    if (proj.subMedia) {
      proj.subMedia.forEach(m => {
        if (!list.includes(m)) list.push(m)
      })
    }
    setMediaList(list)
    setCurrentMediaIndex(0)
    setSelectedProject(proj)
  }

  const nextMedia = useCallback(() => {
    if (mediaList.length <= 1) return
    setCurrentMediaIndex(prev => (prev + 1) % mediaList.length)
  }, [mediaList.length])

  const prevMedia = useCallback(() => {
    if (mediaList.length <= 1) return
    setCurrentMediaIndex(prev => (prev - 1 + mediaList.length) % mediaList.length)
  }, [mediaList.length])

  // Keyboard navigation listener (Left, Right, Escape)
  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextMedia()
      } else if (e.key === 'ArrowLeft') {
        prevMedia()
      } else if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, nextMedia, prevMedia])

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #FF6B00 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-6">◆ {tx.label}</div>
          <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[1.05] text-white mb-8 uppercase">
            {tx.headline}<br />
            <span className="text-gradient">{tx.headline2}</span>
          </h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-[#050505] border-y border-white/10 sticky top-[76px] z-30 backdrop-blur-xl bg-[#050505]/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex gap-3 overflow-x-auto no-scrollbar items-center py-1">
          {cats.map((cat, i) => {
            const isActive = activeFilter === categories[i] || activeFilter === categoriesVIE[i]
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`btn-outline px-6 py-2.5 rounded-full text-xs font-mono group whitespace-nowrap ${
                  isActive ? 'active' : ''
                }`}
              >
                <span className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-black' : 'bg-[#FF9E00] group-hover:bg-black'}`} />
                <span>{cat}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                data-cursor="VIEW"
                className="relative overflow-hidden rounded-2xl group cursor-pointer border border-white/10 card-hover bg-[#0A0A0A]"
                style={{ minHeight: '340px' }}
                onClick={() => handleOpenModal(proj)}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: 'inherit' }}
                />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-2.5 py-0.5 rounded-full border border-[#FF6B00]/50 font-bold shadow-md">
                      {lang === 'ENG' ? proj.category : proj.categoryVIE}
                    </span>
                    <span className="project-card-meta text-white/70 font-mono text-[11px] font-semibold">— {proj.location || 'Việt Nam'} &bull; {proj.year}</span>
                  </div>
                  <h3 className="project-card-title font-display text-2xl font-bold text-white mb-2 group-hover:text-[#FF9E00] transition-colors drop-shadow-md uppercase">
                    {proj.title}
                  </h3>
                  <p className="project-card-desc text-white/80 text-sm leading-relaxed max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-300 drop-shadow">
                    {lang === 'ENG' ? proj.descENG : proj.descVIE}
                  </p>
                  <div className="mt-4 font-mono text-xs text-[#FF9E00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 font-bold">
                    <span>{tx.viewDetails}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Lightbox Modal with Separated Div Wrapper Controls */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6"
          style={{ background: 'rgba(5, 5, 5, 0.96)', backdropFilter: 'blur(32px)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-[1200px] w-full max-h-[94vh] overflow-y-auto rounded-3xl border border-[#FF6B00]/40 shadow-2xl animate-fade-in-up bg-[#050505] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0A] sticky top-0 z-40">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-3 py-1 rounded-full border border-[#FF6B00]/40 font-bold">
                  {lang === 'ENG' ? selectedProject.category : selectedProject.categoryVIE}
                </span>
                <h2 className="font-display font-extrabold text-white text-lg md:text-xl uppercase truncate max-w-[450px]">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Close Button (X) positioned explicitly at Top-Right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B00] text-white flex items-center justify-center text-lg font-bold transition-all shadow-lg cursor-pointer hover:scale-105 active:scale-95 border border-white/20"
                aria-label={tx.close}
                title={tx.close}
              >
                ✕
              </button>
            </div>

            {/* Centered Media Viewer Frame */}
            <div className="relative w-full bg-black flex items-center justify-center min-h-[400px] max-h-[600px] overflow-hidden select-none p-4">
              {/* Left Navigation Button (<) Wrapped in Positioned Div */}
              {mediaList.length > 1 && (
                <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 60 }}>
                  <button
                    onClick={prevMedia}
                    className="w-12 h-12 rounded-full bg-black/80 hover:bg-[#FF6B00] border border-white/30 text-white flex items-center justify-center text-3xl font-bold transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
                    title={tx.prev}
                    aria-label={tx.prev}
                  >
                    ‹
                  </button>
                </div>
              )}

              {/* Right Navigation Button (>) Wrapped in Positioned Div */}
              {mediaList.length > 1 && (
                <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 60 }}>
                  <button
                    onClick={nextMedia}
                    className="w-12 h-12 rounded-full bg-black/80 hover:bg-[#FF6B00] border border-white/30 text-white flex items-center justify-center text-3xl font-bold transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
                    title={tx.next}
                    aria-label={tx.next}
                  >
                    ›
                  </button>
                </div>
              )}

              {/* Centered Media Display */}
              {isVideoUrl(mediaList[currentMediaIndex]) ? (
                <video
                  src={mediaList[currentMediaIndex]}
                  controls
                  autoPlay
                  className="max-h-[550px] max-w-full object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <img
                  src={mediaList[currentMediaIndex]}
                  alt={`${selectedProject.title} ${currentMediaIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
                  }}
                  className="max-h-[550px] max-w-full object-contain rounded-xl shadow-2xl transition-opacity duration-300"
                />
              )}

              {/* Media Counter Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 border border-[#FF6B00]/40 px-4 py-1.5 rounded-full text-xs font-mono text-[#FF9E00] font-bold z-20 backdrop-blur-md shadow-lg pointer-events-none">
                {currentMediaIndex + 1} / {mediaList.length} &bull; {lang === 'ENG' ? 'Use ← → keys' : 'Dùng phím ← →'}
              </div>
            </div>

            {/* Footer Info & Thumbnails Carousel */}
            <div className="p-6 md:p-8 bg-[#050505] border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/60 font-mono text-xs font-bold">📍 {selectedProject.location} &bull; {selectedProject.year}</span>
                <div className="hidden sm:flex items-center gap-2 text-white/50 font-mono text-xs">
                  <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white font-mono">←</kbd>
                  <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white font-mono">→</kbd>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {lang === 'ENG' ? selectedProject.descENG : selectedProject.descVIE}
              </p>

              {/* Bottom Thumbnails Carousel Strip */}
              {mediaList.length > 1 && (
                <div>
                  <h3 className="font-mono text-xs font-bold text-[#FF9E00] uppercase tracking-widest mb-3">
                    ◆ {tx.gallery} ({mediaList.length})
                  </h3>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
                    {mediaList.map((mUrl, idx) => {
                      const isVid = isVideoUrl(mUrl)
                      const isActive = idx === currentMediaIndex
                      return (
                        <div
                          key={idx}
                          onClick={() => setCurrentMediaIndex(idx)}
                          className={`relative w-24 h-16 shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 transition-all bg-black ${
                            isActive ? 'border-[#FF6B00] scale-105 shadow-[0_0_15px_rgba(255,107,0,0.8)]' : 'border-white/10 opacity-60 hover:opacity-100'
                          }`}
                        >
                          {isVid ? (
                            <div className="w-full h-full flex items-center justify-center bg-black/90 text-[#FF9E00] font-mono text-[10px] font-bold">
                              ▶ VIDEO
                            </div>
                          ) : (
                            <img
                              src={mUrl}
                              alt={`Thumb ${idx + 1}`}
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
                              }}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
