import { useState } from 'react'
import { type Lang } from '../App'

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

const articles = [
  {
    title: 'Unreal Engine 5 is Changing Everything in Architectural Visualization',
    titleVIE: 'Unreal Engine 5 Đang Thay Đổi Tất Cả Trong Trực Quan Hóa Kiến Trúc',
    category: 'Technology',
    categoryVIE: 'Công Nghệ',
    date: 'January 28, 2026',
    dateVIE: '28 Tháng 1, 2026',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1678388583153-f0e667c97288?w=900&h=600&fit=crop&auto=format',
    excerpt: 'Lumen and Nanite have fundamentally shifted what\'s possible for real-time architectural previews. We explore how our pipeline evolved and what this means for client presentations.',
    excerptVIE: 'Lumen và Nanite đã thay đổi cơ bản những gì có thể đối với preview kiến trúc thời gian thực. Chúng tôi khám phá cách pipeline của chúng tôi phát triển và điều này có nghĩa gì cho các buổi trình bày với khách hàng.',
    featured: true,
  },
  {
    title: 'How AI is Accelerating 3D Rendering Without Compromising Quality',
    titleVIE: 'AI Đang Tăng Tốc Kết Xuất 3D Mà Không Làm Giảm Chất Lượng Như Thế Nào',
    category: 'AI & Innovation',
    categoryVIE: 'AI & Đổi Mới',
    date: 'January 14, 2026',
    dateVIE: '14 Tháng 1, 2026',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1633109611134-c41b5c0bbc1a?w=600&h=400&fit=crop&auto=format',
    excerpt: 'AI-based denoisers and upscalers have cut our render times by 40%. Here\'s how we integrated these tools into production without sacrificing photorealism.',
    excerptVIE: 'Các bộ khử nhiễu và upscaler dựa trên AI đã cắt giảm thời gian render của chúng tôi 40%. Đây là cách chúng tôi tích hợp các công cụ này vào sản xuất mà không ảnh hưởng đến tính siêu thực.',
    featured: false,
  },
  {
    title: 'The Future of Real Estate Sales: VR Showrooms Are Here',
    titleVIE: 'Tương Lai Của Bán Hàng Bất Động Sản: Phòng Trưng Bày VR Đã Đến',
    category: 'VR/AR',
    categoryVIE: 'VR/AR',
    date: 'December 20, 2025',
    dateVIE: '20 Tháng 12, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop&auto=format',
    excerpt: 'Vietnamese developers are adopting VR showrooms at record pace. We share data from 12 projects on conversion rate improvements and buyer confidence.',
    excerptVIE: 'Các nhà phát triển Việt Nam đang áp dụng phòng trưng bày VR với tốc độ kỷ lục. Chúng tôi chia sẻ dữ liệu từ 12 dự án về cải thiện tỷ lệ chuyển đổi và sự tự tin của người mua.',
    featured: false,
  },
  {
    title: 'Lighting in 3D Renders: Why Most Studios Get It Wrong',
    titleVIE: 'Ánh Sáng Trong Hình Ảnh 3D: Tại Sao Hầu Hết Các Studio Làm Sai',
    category: '3D Rendering',
    categoryVIE: 'Kết Xuất 3D',
    date: 'December 5, 2025',
    dateVIE: '5 Tháng 12, 2025',
    readTime: '10 min read',
    img: 'https://images.unsplash.com/photo-1633109713362-031e75973c1b?w=600&h=400&fit=crop&auto=format',
    excerpt: 'Physically-based lighting is not just a setting — it\'s a discipline. We break down the six most common lighting mistakes and how to correct them.',
    excerptVIE: 'Ánh sáng dựa trên vật lý không chỉ là một cài đặt — đó là một kỷ luật. Chúng tôi phân tích sáu lỗi chiếu sáng phổ biến nhất và cách khắc phục chúng.',
    featured: false,
  },
  {
    title: 'AR in Architecture: From Novelty to Essential Tool',
    titleVIE: 'AR Trong Kiến Trúc: Từ Mới Lạ Đến Công Cụ Thiết Yếu',
    category: 'VR/AR',
    categoryVIE: 'VR/AR',
    date: 'November 18, 2025',
    dateVIE: '18 Tháng 11, 2025',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?w=600&h=400&fit=crop&auto=format',
    excerpt: 'Three years ago, AR was a demo at trade shows. Today it\'s embedded in client approval workflows. We trace how this shift happened and where it\'s going next.',
    excerptVIE: 'Ba năm trước, AR là một demo tại các hội chợ thương mại. Ngày nay nó được nhúng vào quy trình phê duyệt của khách hàng. Chúng tôi theo dõi cách sự thay đổi này xảy ra và hướng tiếp theo.',
    featured: false,
  },
  {
    title: 'Parametric Architecture and the 3D Visualization Challenge',
    titleVIE: 'Kiến Trúc Tham Số và Thách Thức Trực Quan Hóa 3D',
    category: 'Architecture',
    categoryVIE: 'Kiến Trúc',
    date: 'November 2, 2025',
    dateVIE: '2 Tháng 11, 2025',
    readTime: '9 min read',
    img: 'https://images.unsplash.com/photo-1784358582539-f10766868e9e?w=600&h=400&fit=crop&auto=format',
    excerpt: 'Zaha Hadid-inspired parametric forms are beautiful — and brutally complex to model and render. We share our workflow for handling algorithmic geometry.',
    excerptVIE: 'Các hình dạng tham số lấy cảm hứng từ Zaha Hadid rất đẹp — và cực kỳ phức tạp để mô hình hóa và kết xuất. Chúng tôi chia sẻ quy trình xử lý hình học thuật toán.',
    featured: false,
  },
]

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
          <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[1.05] text-white mb-8">
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
