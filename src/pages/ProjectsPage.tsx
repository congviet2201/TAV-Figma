import { useState } from 'react'
import { type Lang } from '../App'

interface Props { lang: Lang }

const t = {
  ENG: {
    label: 'Projects',
    headline: 'Our Featured',
    headline2: 'Work',
    all: 'All',
    viewDetails: 'View Details',
    close: 'Close',
  },
  VIE: {
    label: 'Dự Án',
    headline: 'Công Trình',
    headline2: 'Nổi Bật',
    all: 'Tất Cả',
    viewDetails: 'Xem Chi Tiết',
    close: 'Đóng',
  },
}

const projects = [
  {
    title: 'The SENSIA',
    category: '3D Rendering',
    categoryVIE: 'Kết Xuất 3D',
    descENG: 'A landmark luxury residential tower in Ho Chi Minh City. 200+ photorealistic renders for sales center and marketing campaign.',
    descVIE: 'Tòa nhà dân cư cao cấp tiêu biểu tại TP.HCM. 200+ hình ảnh siêu thực cho trung tâm bán hàng và chiến dịch marketing.',
    img: 'https://images.unsplash.com/photo-1678388583153-f0e667c97288?w=900&h=700&fit=crop&auto=format',
    year: '2024',
    size: 'large',
  },
  {
    title: 'Da Song Village',
    category: 'VR Tour',
    categoryVIE: 'Tour VR',
    descENG: 'Immersive virtual reality tour for a 50-hectare eco-resort development in Da Lat. Full 360° interactive experience.',
    descVIE: 'Tour thực tế ảo đắm chìm cho khu nghỉ dưỡng sinh thái 50 héc-ta tại Đà Lạt. Trải nghiệm tương tác 360° đầy đủ.',
    img: 'https://images.unsplash.com/photo-1633109713362-031e75973c1b?w=700&h=500&fit=crop&auto=format',
    year: '2024',
    size: 'medium',
  },
  {
    title: 'Đảo Kim Cương',
    category: '3D Rendering',
    categoryVIE: 'Kết Xuất 3D',
    descENG: 'Diamond Island masterplan visualization. Aerial views, villa renders, and amenity spaces for one of Vietnam\'s largest island developments.',
    descVIE: 'Trực quan hóa quy hoạch tổng thể Đảo Kim Cương. Góc nhìn trên không, hình ảnh biệt thự và không gian tiện ích cho một trong những dự án đảo lớn nhất Việt Nam.',
    img: 'https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?w=700&h=500&fit=crop&auto=format',
    year: '2023',
    size: 'medium',
  },
  {
    title: 'Hanoi Skyline Residences',
    category: '3D Mapping',
    categoryVIE: '3D Mapping',
    descENG: 'Grand opening projection mapping event covering the entire facade of a 40-story tower in downtown Hanoi.',
    descVIE: 'Sự kiện projection mapping khai trương phủ toàn bộ mặt tiền tòa nhà 40 tầng tại trung tâm Hà Nội.',
    img: 'https://images.unsplash.com/photo-1784358582539-f10766868e9e?w=700&h=500&fit=crop&auto=format',
    year: '2023',
    size: 'medium',
  },
  {
    title: 'Riviera Wellness Resort',
    category: 'AR Experience',
    categoryVIE: 'Trải Nghiệm AR',
    descENG: 'AR application enabling potential buyers to place and explore villa units in real-time on their mobile devices.',
    descVIE: 'Ứng dụng AR cho phép người mua tiềm năng đặt và khám phá các căn biệt thự trong thời gian thực trên thiết bị di động.',
    img: 'https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=700&h=500&fit=crop&auto=format',
    year: '2023',
    size: 'medium',
  },
  {
    title: 'The Grand Palazzo',
    category: '3D Modeling',
    categoryVIE: 'Mô Hình 3D',
    descENG: 'Detailed 3D model of a heritage-listed palazzo in Singapore for digital preservation and architectural review.',
    descVIE: 'Mô hình 3D chi tiết của một palazzo được bảo tồn di sản tại Singapore để bảo tồn kỹ thuật số và xem xét kiến trúc.',
    img: 'https://images.unsplash.com/photo-1633109741715-59b57495bbdc?w=700&h=500&fit=crop&auto=format',
    year: '2022',
    size: 'medium',
  },
  {
    title: 'Urban Bloom Condominiums',
    category: '3D Rendering',
    categoryVIE: 'Kết Xuất 3D',
    descENG: 'Full-suite exterior and interior renders for a mid-rise residential development in Binh Thanh District.',
    descVIE: 'Bộ đầy đủ hình ảnh ngoại thất và nội thất cho dự án chung cư tầm trung tại Quận Bình Thạnh.',
    img: 'https://images.unsplash.com/photo-1782297247938-bfc51277b82f?w=700&h=500&fit=crop&auto=format',
    year: '2022',
    size: 'medium',
  },
]

const categories = ['All', '3D Rendering', 'VR Tour', '3D Mapping', 'AR Experience', '3D Modeling']
const categoriesVIE = ['Tất Cả', 'Kết Xuất 3D', 'Tour VR', '3D Mapping', 'Trải Nghiệm AR', 'Mô Hình 3D']

export default function ProjectsPage({ lang }: Props) {
  const tx = t[lang]
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const cats = lang === 'ENG' ? categories : categoriesVIE

  const filtered = activeFilter === 'All' || activeFilter === 'Tất Cả'
    ? projects
    : projects.filter(p => lang === 'ENG' ? p.category === activeFilter : p.categoryVIE === activeFilter)

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #FF6B00 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-6">◆ {tx.label}</div>
          <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[1.05] text-white mb-8">
            {tx.headline}<br />
            <span className="text-gradient">{tx.headline2}</span>
          </h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-4 sticky top-[76px] z-20 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex gap-3 overflow-x-auto pt-3 pb-4 px-2 -mx-2 no-scrollbar items-center">
            {cats.map((cat, i) => {
              const isActive = cat === activeFilter || (activeFilter === 'All' && i === 0) || (activeFilter === 'Tất Cả' && i === 0)
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
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj, i) => (
              <div
                key={proj.title}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer card-hover border border-white/10 ${
                  proj.size === 'large' && i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ minHeight: proj.size === 'large' && i === 0 ? '520px' : '350px' }}
                onClick={() => setSelectedProject(proj)}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
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
                    <span className="project-card-meta text-white/70 font-mono text-[11px]">— {proj.year}</span>
                  </div>
                  <h3 className="project-card-title font-display text-2xl font-bold text-white mb-2 group-hover:text-[#FF9E00] transition-colors drop-shadow-md">
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

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(5, 5, 5, 0.94)', backdropFilter: 'blur(32px)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-[900px] w-full rounded-3xl overflow-hidden glass-panel border border-[#FF6B00]/40 shadow-2xl animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative" style={{ height: '420px' }}>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-icon absolute top-5 right-5 w-11 h-11 rounded-full text-white hover:text-[#FF9E00] transition-colors"
                aria-label={tx.close}
              >
                ✕
              </button>
            </div>
            <div className="p-8 md:p-10 bg-[#050505]">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/15 px-3 py-1 rounded-full border border-[#FF6B00]/40 font-semibold">
                  {lang === 'ENG' ? selectedProject.category : selectedProject.categoryVIE}
                </span>
                <span className="text-white/40 font-mono text-xs">{selectedProject.year}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-white/70 text-base leading-relaxed">
                {lang === 'ENG' ? selectedProject.descENG : selectedProject.descVIE}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
