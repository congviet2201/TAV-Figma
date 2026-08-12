import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { type Lang } from '../App'
import { blogsData } from '../data/tavData'

interface Props { lang: Lang }

const t = {
  ENG: {
    label: 'Blog & News',
    headline: 'Latest Industry',
    headline2: 'Insights & News 2026',
    search: 'Search articles...',
    readMore: 'Read Article',
    featured: 'Featured Article',
    all: 'All',
    categories: ['All', 'Technology', 'Architecture', 'AI & Innovation', 'Virtual Reality', 'VR/AR'],
    prev: '← Previous',
    next: 'Next →',
    close: 'Close',
    share: 'Share Article',
    related: 'Related Articles',
    author: 'Written by',
  },
  VIE: {
    label: 'Tin Tức & Blog',
    headline: 'Góc Nhìn &',
    headline2: 'Tin Tức Ngành 2026',
    search: 'Tìm kiếm bài viết...',
    readMore: 'Đọc Bài Viết',
    featured: 'Bài Viết Nổi Bật',
    all: 'Tất Cả',
    categories: ['Tất Cả', 'Công Nghệ', 'Kiến Trúc', 'AI & Đổi Mới', 'Thực Tế Ảo', 'VR/AR'],
    prev: '← Trước',
    next: 'Tiếp →',
    close: 'Đóng',
    share: 'Chia Sẻ Bài Viết',
    related: 'Bài Viết Liên Quan',
    author: 'Tác giả',
  },
}

const articles = blogsData.map((item, index) => ({
  id: item.id,
  title: item.titleENG,
  titleVIE: item.titleVIE,
  category: item.categoryENG,
  categoryVIE: item.categoryVIE,
  date: item.date,
  dateVIE: item.date,
  readTime: item.readTimeENG || '6 min read',
  readTimeVIE: item.readTime || '6 phút đọc',
  author: item.author || 'TAV Team',
  img: item.img,
  subImages: item.subImages || [],
  excerpt: item.descENG,
  excerptVIE: item.descVIE,
  sectionsVIE: item.sectionsVIE || [],
  sectionsENG: item.sectionsENG || [],
  featured: index === 0,
}))

const POSTS_PER_PAGE = 6

export default function BlogPage({ lang }: Props) {
  const tx = t[lang]
  const [activeCategory, setActiveCategory] = useState(tx.categories[0])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)

  const filtered = articles.filter(a => {
    const inCategory = activeCategory === tx.categories[0] ||
      (lang === 'ENG' ? a.category === activeCategory : a.categoryVIE === activeCategory)
    const inSearch = search === '' ||
      (lang === 'ENG' ? a.title : a.titleVIE).toLowerCase().includes(search.toLowerCase()) ||
      (lang === 'ENG' ? a.excerpt : a.excerptVIE).toLowerCase().includes(search.toLowerCase())
    return inCategory && inSearch
  })

  const featured = articles.find(a => a.featured)
  const nonFeatured = filtered.filter(a => !a.featured)
  const paginated = nonFeatured.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
  const totalPages = Math.ceil(nonFeatured.length / POSTS_PER_PAGE)

  const handleOpenArticle = (article: typeof articles[0]) => {
    setSelectedArticle(article)
  }

  // Body scroll lock & Keyboard Escape listener for Modal
  useEffect(() => {
    if (!selectedArticle) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedArticle])

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #FF6B00 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-6">◆ {tx.label}</div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.05] text-white mb-8 uppercase">
            {tx.headline}<br />
            <span className="text-gradient">{tx.headline2}</span>
          </h1>

          {/* Search bar */}
          <div className="relative max-w-xl">
            <input
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1) }}
              placeholder={tx.search}
              className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors font-mono text-sm shadow-xl"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 font-mono text-xs">🔍</span>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-[#050505] border-y border-white/10 sticky top-[76px] z-30 backdrop-blur-xl bg-[#050505]/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex gap-3 overflow-x-auto no-scrollbar items-center py-1">
          {tx.categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(1) }}
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

      {/* Articles Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 bg-[#050505]">
        {/* Featured Article Banner */}
        {featured && search === '' && activeCategory === tx.categories[0] && (
          <div
            className="relative overflow-hidden rounded-3xl mb-16 group cursor-pointer border border-white/10 card-hover bg-[#0A0A0A]"
            style={{ minHeight: '480px' }}
            onClick={() => handleOpenArticle(featured)}
          >
            <img
              src={featured.img}
              alt={lang === 'ENG' ? featured.title : featured.titleVIE}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: '480px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
              <div className="max-w-[700px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs px-3.5 py-1 rounded-full bg-[#FF6B00] text-black font-bold uppercase tracking-widest shadow-md">
                    ★ {tx.featured}
                  </span>
                  <span className="font-mono text-xs text-[#FF9E00] uppercase font-bold bg-white/10 px-3 py-1 rounded-full border border-white/15">
                    {lang === 'ENG' ? featured.category : featured.categoryVIE}
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-4 leading-tight group-hover:text-[#FF9E00] transition-colors uppercase">
                  {lang === 'ENG' ? featured.title : featured.titleVIE}
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {lang === 'ENG' ? featured.excerpt : featured.excerptVIE}
                </p>
                <div className="flex items-center gap-4 text-white/60 font-mono text-xs">
                  <span>✍ {featured.author}</span>
                  <span>&bull;</span>
                  <span>📅 {lang === 'ENG' ? featured.date : featured.dateVIE}</span>
                  <span>&bull;</span>
                  <span>⏱ {lang === 'ENG' ? featured.readTime : featured.readTimeVIE}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((article) => (
            <div
              key={article.id}
              className="group glass-panel border border-white/10 rounded-2xl overflow-hidden card-hover cursor-pointer flex flex-col justify-between bg-[#0A0A0A]"
              onClick={() => handleOpenArticle(article)}
            >
              <div>
                <div className="relative overflow-hidden" style={{ height: '240px' }}>
                  <img
                    src={article.img}
                    alt={lang === 'ENG' ? article.title : article.titleVIE}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] px-3 py-1 rounded-full glass border border-[#FF6B00]/40 text-[#FF9E00] uppercase tracking-widest bg-[#050505]/85 font-bold shadow-md">
                      {lang === 'ENG' ? article.category : article.categoryVIE}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-white/50 font-mono text-[11px] mb-3">
                    <span>{lang === 'ENG' ? article.date : article.dateVIE}</span>
                    <span>&bull;</span>
                    <span>{lang === 'ENG' ? article.readTime : article.readTimeVIE}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug group-hover:text-[#FF9E00] transition-colors uppercase">
                    {lang === 'ENG' ? article.title : article.titleVIE}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-5 line-clamp-3">
                    {lang === 'ENG' ? article.excerpt : article.excerptVIE}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-0 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-white/40 font-mono text-xs">✍ {article.author}</span>
                <span className="font-mono text-xs text-[#FF9E00] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform font-bold">
                  {tx.readMore} →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* High-Tech Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-16">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="btn-page-switch text-xs disabled:opacity-30 disabled:cursor-not-allowed group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>{lang === 'ENG' ? 'Previous' : 'Trước'}</span>
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`btn-page-num ${page === i + 1 ? 'active' : 'inactive'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="btn-page-switch text-xs disabled:opacity-30 disabled:cursor-not-allowed group"
            >
              <span>{lang === 'ENG' ? 'Next' : 'Tiếp'}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        )}
      </div>

      {/* Full Article Reader Modal: Portaled directly to document.body */}
      {selectedArticle && createPortal(
        <div
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            background: 'rgba(5, 5, 5, 0.98)',
            backdropFilter: 'blur(32px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100vw',
              height: 'calc(100vh - 76px)',
              background: '#0B0B0C',
              display: 'flex',
            }}
            className="flex-col md:flex-row overflow-y-auto md:overflow-hidden animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button (X) - Top Right */}
            <div style={{ position: 'absolute', top: '16px', right: '20px', zIndex: 80 }}>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-11 h-11 rounded-full bg-black/90 hover:bg-[#FF6B00] text-white flex items-center justify-center text-xl font-bold transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95 border border-white/30"
                aria-label={tx.close}
                title={tx.close}
              >
                ✕
              </button>
            </div>

            {/* LEFT COLUMN: Main Image Showcase - FULL FRAME WITHOUT CROPPING (object-contain) */}
            <div className="w-full md:w-[45%] min-h-[300px] md:h-full bg-[#030303] flex flex-col p-6 border-b md:border-b-0 md:border-r border-white/10 items-center justify-center shrink-0">
              <img
                src={selectedArticle.img}
                alt={lang === 'ENG' ? selectedArticle.title : selectedArticle.titleVIE}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
                }}
                className="w-full h-full max-h-[78vh] object-contain rounded-2xl drop-shadow-2xl"
              />
            </div>

            {/* RIGHT COLUMN: Full Article Text & Content (occupies 55% width, full height scrollable) */}
            <div className="w-full md:w-[55%] h-full p-6 md:p-12 bg-[#0B0B0C] overflow-y-auto pr-8 md:pr-14">
              <div className="flex items-center gap-3 mb-4 pr-14">
                <span className="font-mono text-xs tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-3.5 py-1.5 rounded-full border border-[#FF6B00]/40 font-bold">
                  {lang === 'ENG' ? selectedArticle.category : selectedArticle.categoryVIE}
                </span>
                <span className="text-white/60 font-mono text-xs font-bold">📅 {lang === 'ENG' ? selectedArticle.date : selectedArticle.dateVIE}</span>
              </div>

              <h1 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-6 uppercase leading-tight pr-12">
                {lang === 'ENG' ? selectedArticle.title : selectedArticle.titleVIE}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/70 font-mono text-xs pb-6 mb-8 border-b border-white/10">
                <span>✍ {tx.author}: <strong className="text-[#FF9E00]">{selectedArticle.author}</strong></span>
                <span>&bull;</span>
                <span>⏱ {lang === 'ENG' ? selectedArticle.readTime : selectedArticle.readTimeVIE}</span>
              </div>

              <p className="text-white/95 text-base md:text-lg leading-relaxed font-semibold italic p-6 rounded-2xl bg-white/5 border-l-4 border-[#FF6B00] mb-8">
                "{lang === 'ENG' ? selectedArticle.excerpt : selectedArticle.excerptVIE}"
              </p>

              {/* Sections */}
              {((lang === 'ENG' ? selectedArticle.sectionsENG : selectedArticle.sectionsVIE) || []).map((sec, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#FF9E00] mb-3 uppercase">
                    {sec.heading}
                  </h3>
                  <p className="text-white/85 text-sm md:text-base leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}

              {/* Sub Images Gallery */}
              {selectedArticle.subImages && selectedArticle.subImages.length > 0 && (
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="font-mono text-xs text-[#FF9E00] uppercase tracking-widest font-bold mb-4">
                    ◆ Media Gallery
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedArticle.subImages.map((sImg, sIdx) => (
                      <div key={sIdx} className="overflow-hidden rounded-xl border border-white/10 h-40 bg-black">
                        <img
                          src={sImg}
                          alt={`Sub ${sIdx + 1}`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
