import { useEffect, useState, useRef } from 'react'
import { type Page, type Lang } from '../App'

interface Props {
  navigate: (page: Page) => void
  lang: Lang
  onOpenContact?: () => void
}

const t = {
  ENG: {
    tagline: 'Immersive 3D Visualization Platform',
    headline1: 'We Build Worlds',
    headline2: 'Before They Exist',
    sub: 'Premium 3D rendering, architectural visualization, 3D mapping, and virtual reality technology solutions.',
    cta1: 'Explore Projects',
    cta2: 'Watch Full Intro',
    cta3: 'Get Consultation',
    statsLabel1: 'Projects Delivered',
    statsLabel2: 'Years of Excellence',
    statsLabel3: 'Global Clients',
    statsLabel4: 'Awards Won',
    servicesTitle: 'What We Do',
    servicesHeadline: 'End-to-End Immersive Solutions',
    projectsTitle: 'Featured Work',
    projectsHeadline: 'Projects That Define Us',
    viewAll: 'View All Projects',
    techTitle: 'Engine & Tech Stack',
    techHeadline: 'Powered By Next-Gen 3D Technologies',
    contactTitle: 'Ready to Collaborate?',
    contactSub: "Let's build something extraordinary together.",
    contactCta: 'Get In Touch',
  },
  VIE: {
    tagline: 'Nền Tảng Trực Quan Hóa 3D Đắm Chìm',
    headline1: 'Chúng Tôi Xây Dựng',
    headline2: 'Thế Giới Trước Khi Chúng Tồn Tại',
    sub: 'Giải pháp kết xuất 3D, trực quan hóa kiến trúc, 3D mapping và công nghệ thực tế ảo đắm chìm cao cấp.',
    cta1: 'Khám Phá Dự Án',
    cta2: 'Xem Video Intro',
    cta3: 'Nhận Tư Vấn Dự Án',
    statsLabel1: 'Dự Án Hoàn Thành',
    statsLabel2: 'Năm Xuất Sắc',
    statsLabel3: 'Khách Hàng Toàn Cầu',
    statsLabel4: 'Giải Thưởng',
    servicesTitle: 'Chúng Tôi Làm Gì',
    servicesHeadline: 'Giải Pháp 3D Toàn Diện',
    projectsTitle: 'Công Trình Nổi Bật',
    projectsHeadline: 'Những Dự Án Định Nghĩa Chúng Tôi',
    viewAll: 'Xem Tất Cả Dự Án',
    techTitle: 'Công Nghệ & Engine 3D',
    techHeadline: 'Sức Mạnh Từ Công Nghệ Thế Hệ Mới',
    contactTitle: 'Sẵn Sàng Hợp Tác?',
    contactSub: 'Hãy cùng xây dựng điều phi thường.',
    contactCta: 'Liên Hệ Ngay',
  },
}

const stats = [
  { value: '350+', key: 'statsLabel1' },
  { value: '12', key: 'statsLabel2' },
  { value: '80+', key: 'statsLabel3' },
  { value: '24', key: 'statsLabel4' },
]

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 9.5V18.5L14 25L3 18.5V9.5L14 3Z" stroke="#FF6B00" strokeWidth="1.5" fill="rgba(255,107,0,0.12)" />
        <path d="M14 8L20 11.5V18L14 21.5L8 18V11.5L14 8Z" stroke="#FF9E00" strokeWidth="0.8" fill="rgba(255,158,0,0.18)" />
        <circle cx="14" cy="14" r="2" fill="#FF9E00" />
      </svg>
    ),
    titleENG: '3D Rendering',
    titleVIE: 'Kết Xuất 3D',
    descENG: 'Photorealistic renders that bring architecture and design to life with stunning accuracy.',
    descVIE: 'Hình ảnh siêu thực mang kiến trúc và thiết kế sống động với độ chính xác tuyệt vời.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#FF6B00" strokeWidth="1.5" fill="rgba(255,107,0,0.12)" />
        <ellipse cx="14" cy="14" rx="10" ry="4" stroke="#FF9E00" strokeWidth="0.8" fill="none" />
        <line x1="14" y1="4" x2="14" y2="24" stroke="#FF9E00" strokeWidth="0.8" />
        <circle cx="14" cy="14" r="2" fill="#FF6B00" />
      </svg>
    ),
    titleENG: '3D Mapping',
    titleVIE: '3D Mapping',
    descENG: 'Large-scale projection mapping that transforms surfaces into immersive visual canvases.',
    descVIE: 'Chiếu hình ảnh quy mô lớn biến bề mặt thành những tấm canvas trực quan đắm chìm.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="8" height="12" rx="1" stroke="#FF6B00" strokeWidth="1.2" fill="rgba(255,107,0,0.12)" />
        <rect x="16" y="4" width="8" height="8" rx="1" stroke="#FF9E00" strokeWidth="1.2" fill="rgba(255,158,0,0.12)" />
        <rect x="16" y="16" width="8" height="8" rx="1" stroke="#FF6B00" strokeWidth="1.2" fill="rgba(255,107,0,0.12)" />
        <line x1="12" y1="12" x2="16" y2="8" stroke="#FF9E00" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="12" y1="16" x2="16" y2="20" stroke="#FF9E00" strokeWidth="0.8" strokeDasharray="2 2" />
      </svg>
    ),
    titleENG: '3D Modeling',
    titleVIE: 'Mô Hình 3D',
    descENG: 'Precision 3D models built from scratch or converted from existing blueprints and plans.',
    descVIE: 'Mô hình 3D chính xác xây dựng từ đầu hoặc chuyển đổi từ bản vẽ và kế hoạch hiện có.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="22" height="14" rx="3" stroke="#FF6B00" strokeWidth="1.5" fill="rgba(255,107,0,0.12)" />
        <path d="M9 10V8a5 5 0 0 1 10 0v2" stroke="#FF9E00" strokeWidth="1.2" fill="none" />
        <circle cx="14" cy="17" r="2.5" fill="#FF9E00" stroke="#FF6B00" strokeWidth="0.8" />
      </svg>
    ),
    titleENG: 'VR Tour',
    titleVIE: 'Tour VR',
    descENG: 'Fully interactive virtual reality experiences for real estate, hospitality, and retail.',
    descVIE: 'Trải nghiệm thực tế ảo tương tác hoàn toàn cho bất động sản, khách sạn và bán lẻ.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="6" stroke="#FF6B00" strokeWidth="1.5" fill="rgba(255,107,0,0.12)" />
        <path d="M8 8L5 5M20 8L23 5M8 20L5 23M20 20L23 23" stroke="#FF9E00" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="#FF9E00" />
        <path d="M14 8V6M14 20v2M8 14H6M20 14h2" stroke="#FF6B00" strokeWidth="0.8" />
      </svg>
    ),
    titleENG: 'AR Experience',
    titleVIE: 'Trải Nghiệm AR',
    descENG: 'Augmented reality overlays that let clients visualize spaces and products in the real world.',
    descVIE: 'Lớp phủ thực tế tăng cường cho phép khách hàng hình dung không gian và sản phẩm trong thế giới thực.',
  },
]

const featuredProjects = [
  {
    title: 'The SENSIA',
    category: 'Architectural Visualization',
    img: 'https://images.unsplash.com/photo-1678388583153-f0e667c97288?w=800&h=600&fit=crop&auto=format',
    span: 'large',
  },
  {
    title: 'Da Song Village',
    category: '3D Rendering',
    img: 'https://images.unsplash.com/photo-1633109713362-031e75973c1b?w=600&h=500&fit=crop&auto=format',
    span: 'small',
  },
  {
    title: 'Diamond Island',
    category: 'VR Tour',
    img: 'https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=600&h=500&fit=crop&auto=format',
    span: 'small',
  },
]

const techStack = [
  { name: 'Unreal Engine 5', detail: 'Real-time Lumen & Nanite Rendering' },
  { name: 'Octane Render', detail: 'Spectral GPU Ray Tracing' },
  { name: 'Blender 3D & Maya', detail: 'Precision Polygon & Procedural Modeling' },
  { name: 'VR & Spatial 6DoF', detail: 'Apple Vision Pro & Meta Quest Native' },
  { name: '3D Projection', detail: 'Multi-Projector Laser Warp & Blend' },
  { name: 'AI Spatial Synthesis', detail: 'NeRF & Gaussian Splatting Integration' },
]

export default function HomePage({ navigate, lang, onOpenContact }: Props) {
  const tx = t[lang]
  const [visible, setVisible] = useState(false)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center bg-[#050505]">
        {/* Background Video */}
        <div className="absolute inset-0 bg-[#050505]">
          <video
            ref={heroVideoRef}
            src="/video/sample-test.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-75 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/80" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-20">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 shadow-[0_0_20px_rgba(255,107,0,0.25)] mb-6 animate-fade-in-up animate-delay-100">
              <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#FF9E00] tracking-wider uppercase">
                ◆ {tx.tagline}
              </span>
            </div>

            <h1 className="font-display font-bold leading-[1.0] mb-6">
              <span className="block text-[clamp(2.75rem,6.5vw,5.75rem)] text-white tracking-tight animate-fade-in-up animate-delay-200">
                {tx.headline1}
              </span>
              <span className="block text-[clamp(2.75rem,6.5vw,5.75rem)] text-gradient tracking-tight animate-fade-in-up animate-delay-300">
                {tx.headline2}
              </span>
            </h1>

            <p className="max-w-[620px] text-white/75 text-base md:text-lg leading-relaxed mb-10 animate-fade-in-up animate-delay-400">
              {tx.sub}
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animate-delay-500">
              <button
                onClick={() => navigate('projects')}
                className="btn-primary px-8 py-4 text-sm font-display font-extrabold group"
              >
                <span>{tx.cta1}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1.5 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button
                onClick={() => navigate('intro')}
                className="btn-outline px-8 py-4 text-sm group"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse" />
                <span>{tx.cta2}</span>
              </button>

              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  className="btn-outline px-8 py-4 text-sm group"
                >
                  <span>{tx.cta3}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-glow pointer-events-none">
          <span className="font-mono text-[10px] tracking-widest text-[#FF9E00]/70 uppercase font-semibold">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#FF6B00] to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 border-y border-white/10 bg-[#0A0A0A] relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.key} className="text-center group">
                <div className="font-display text-4xl md:text-6xl font-extrabold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="font-mono text-xs tracking-widest text-white/50 uppercase">{tx[s.key as keyof typeof tx]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-28 relative bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="section-label mb-4">◆ {tx.servicesTitle}</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                {tx.servicesHeadline}
              </h2>
            </div>
            <button
              onClick={() => navigate('services')}
              className="btn-page-switch group self-start md:self-auto whitespace-nowrap"
            >
              <span>{lang === 'ENG' ? 'View All Services' : 'Xem Tất Cả'}</span>
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((svc, i) => (
              <div
                key={i}
                className="glass-panel rounded-2xl p-6 card-hover cursor-pointer group flex flex-col justify-between"
                onClick={() => navigate('services')}
              >
                <div>
                  <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center bg-[#FF6B00]/10 border border-[#FF6B00]/25 group-hover:border-[#FF6B00]/60 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="font-display font-bold text-white mb-2 text-base group-hover:text-[#FF9E00] transition-colors">
                    {lang === 'ENG' ? svc.titleENG : svc.titleVIE}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {lang === 'ENG' ? svc.descENG : svc.descVIE}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[#FF9E00] text-xs font-mono font-bold group-hover:translate-x-1 transition-transform">
                  <span>{lang === 'ENG' ? 'Learn More' : 'Tìm Hiểu'}</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D TECH CAPABILITIES ── */}
      <section className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <div className="section-label mb-4">◆ {tx.techTitle}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">{tx.techHeadline}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" />
                  <h3 className="font-display font-bold text-white text-lg">{tech.name}</h3>
                </div>
                <p className="text-white/60 text-xs md:text-sm font-mono">{tech.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-28 bg-[#050505] relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="section-label mb-4">◆ {tx.projectsTitle}</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                {tx.projectsHeadline}
              </h2>
            </div>
            <button
              onClick={() => navigate('projects')}
              className="btn-page-switch group self-start md:self-auto whitespace-nowrap"
            >
              <span>{tx.viewAll}</span>
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Large feature */}
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer group border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-500 shadow-2xl"
              style={{ minHeight: '420px' }}
              onClick={() => navigate('projects')}
            >
              <img
                src={featuredProjects[0].img}
                alt={featuredProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: '420px' }}
              />
              <div className="absolute inset-0 img-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-mono text-[11px] tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-3 py-1 rounded-full border border-[#FF6B00]/50 font-bold shadow-md">
                  {featuredProjects[0].category}
                </span>
                <h3 className="project-card-title font-display text-3xl font-bold text-white mt-3 group-hover:text-[#FF9E00] transition-colors drop-shadow-md">
                  {featuredProjects[0].title}
                </h3>
              </div>
            </div>

            {/* Two stacked */}
            <div className="flex flex-col gap-5">
              {featuredProjects.slice(1).map((proj, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group flex-1 border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-500 shadow-xl"
                  style={{ minHeight: '200px' }}
                  onClick={() => navigate('projects')}
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: '200px' }}
                  />
                  <div className="absolute inset-0 img-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-mono text-[10px] tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-2.5 py-1 rounded-full border border-[#FF6B00]/50 font-bold shadow-md">
                      {proj.category}
                    </span>
                    <h3 className="project-card-title font-display text-xl font-bold text-white mt-2 group-hover:text-[#FF9E00] transition-colors drop-shadow-md">
                      {proj.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #FF6B00 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <div className="section-label mb-6">◆ Let's Talk</div>
          <h2 className="font-display text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {tx.contactTitle}
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-[600px] mx-auto">{tx.contactSub}</p>
          <button
            onClick={onOpenContact}
            className="btn-primary px-10 py-5 text-base font-display font-extrabold group"
          >
            <span>{tx.contactCta}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1.5 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}
