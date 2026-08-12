import { useState } from 'react'
import { type Lang } from '../App'
import { blogsData } from '../data/tavData'

interface Props { lang: Lang }

const t = {
  ENG: {
    label: 'Blog',
    headline: 'Insights &',
    headline2: 'Perspectives',
    search: 'Search articles...',
    readMore: 'Read Article',
    featured: 'Featured',
    all: 'All',
    categories: ['All', 'Technology', '3D Rendering', 'AI & Innovation', 'VR/AR', 'Architecture'],
    prev: '← Previous',
    next: 'Next →',
  },
  VIE: {
    label: 'Blog',
    headline: 'Thông Tin &',
    headline2: 'Góc Nhìn',
    search: 'Tìm kiếm bài viết...',
    readMore: 'Đọc Bài Viết',
    featured: 'Nổi Bật',
    all: 'Tất Cả',
    categories: ['Tất Cả', 'Công Nghệ', 'Kết Xuất 3D', 'AI & Đổi Mới', 'VR/AR', 'Kiến Trúc'],
    prev: '← Trước',
    next: 'Tiếp →',
  },
}

const articles = blogsData.map((item, index) => ({
  title: item.titleENG,
  titleVIE: item.titleVIE,
  category: item.categoryENG,
  categoryVIE: item.categoryVIE,
  date: item.date,
  dateVIE: item.date,
  readTime: '6 min read',
  img: item.img,
  excerpt: item.descENG,
  excerptVIE: item.descVIE,
  featured: index === 0,
}))

const POSTS_PER_PAGE = 4

export default function BlogPage({ lang }: Props) {
  const tx = t[lang]
  const [activeCategory, setActiveCategory] = useState(tx.categories[0])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = articles.filter(a => {
    const inCategory = activeCategory === tx.categories[0] ||
      (lang === 'ENG' ? a.category === activeCategory : a.categoryVIE === activeCategory)
    const inSearch = search === '' ||
      (lang === 'ENG' ? a.title : a.titleVIE).toLowerCase().includes(search.toLowerCase())
    return inCategory && inSearch
  })

  const featured = articles.find(a => a.featured)
  const nonFeatured = filtered.filter(a => !a.featured)
  const paginated = nonFeatured.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
  const totalPages = Math.ceil(nonFeatured.length / POSTS_PER_PAGE)

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 grid-overlay" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-6">◆ {tx.label}</div>
          <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[1.05] text-white mb-8 uppercase">
            {tx.headline}<br />
            <span className="text-gradient">{tx.headline2}</span>
          </h1>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 bg-[#050505]">
        {/* Featured article */}
        {featured && (
          <div className="relative overflow-hidden rounded-3xl mb-16 group cursor-pointer border border-white/10 card-hover" style={{ minHeight: '480px' }}>
            <img
              src={featured.img}
              alt={lang === 'ENG' ? featured.title : featured.titleVIE}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: '480px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
              <div className="max-w-[600px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-[#FF6B00]/25 border border-[#FF6B00]/50 text-[#FF9E00] uppercase tracking-widest font-bold shadow-md">
                    ★ {tx.featured}
                  </span>
                  <span className="blog-featured-meta font-mono text-[11px] text-white/80 uppercase tracking-widest">
                    {lang === 'ENG' ? featured.category : featured.categoryVIE}
                  </span>
                </div>
                <h2 className="blog-featured-title font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-[#FF9E00] transition-colors drop-shadow-md">
                  {lang === 'ENG' ? featured.title : featured.titleVIE}
                </h2>
                <p className="blog-featured-desc text-white/85 leading-relaxed mb-6 drop-shadow">
                  {lang === 'ENG' ? featured.excerpt : featured.excerptVIE}
                </p>
                <div className="blog-featured-meta flex items-center gap-4 text-white/70 font-mono text-xs mb-8">
                  <span>{lang === 'ENG' ? featured.date : featured.dateVIE}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <button className="btn-primary px-8 py-3.5 text-sm group">
                  <span>{tx.readMore}</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search + filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF9E00]/70 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={tx.search}
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1) }}
              className="w-full glass-panel border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-[#FF6B00]/60 focus:ring-2 focus:ring-[#FF6B00]/30 transition-all bg-transparent"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pt-3 pb-4 px-2 -mx-2 no-scrollbar items-center">
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
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginated.map((article, i) => (
            <div key={i} className="group glass-panel border border-white/10 rounded-2xl overflow-hidden card-hover cursor-pointer flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden" style={{ height: '230px' }}>
                  <img
                    src={article.img}
                    alt={lang === 'ENG' ? article.title : article.titleVIE}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] px-3 py-1 rounded-full glass border border-[#FF6B00]/40 text-[#FF9E00] uppercase tracking-widest bg-[#050505]/80 font-semibold">
                      {lang === 'ENG' ? article.category : article.categoryVIE}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-white/40 font-mono text-[11px] mb-3">
                    <span>{lang === 'ENG' ? article.date : article.dateVIE}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug group-hover:text-[#FF9E00] transition-colors">
                    {lang === 'ENG' ? article.title : article.titleVIE}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {lang === 'ENG' ? article.excerpt : article.excerptVIE}
                  </p>
                </div>
              </div>
              <div className="px-7 pb-7 pt-0">
                <button className="font-mono text-xs text-[#FF9E00] flex items-center gap-2 group-hover:gap-3 transition-all font-bold">
                  <span>{tx.readMore}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* High-Tech Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-14">
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
    </div>
  )
}
