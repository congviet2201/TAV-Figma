import { useEffect, useState, useRef } from 'react'
import { type Page, type Lang } from '../App'
import { partnersData, testimonialsData, servicesData, projectsData } from '../data/tavData'

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
    whyTitle: 'Why Choose TAV',
    whyHeadline: 'Our Core Standards of Excellence',
    testimonialsTitle: 'Client Testimonials',
    testimonialsHeadline: 'What Industry Leaders Say About TAV',
    partnersTitle: 'Trusted Partners',
    partnersHeadline: 'Collaborating With Visionary Brands',
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
    servicesTitle: 'Dịch Vụ Của Chúng Tôi',
    servicesHeadline: 'Giải Pháp Trực Quan Đắm Chìm Toàn Diện',
    whyTitle: 'Tại Sao Chọn TAV',
    whyHeadline: 'Giá Trị Cốt Lõi Làm Nên Thương Hiệu TAV',
    testimonialsTitle: 'Đánh Giá Từ Khách Hàng',
    testimonialsHeadline: 'Khách Hàng & Đối Tác Nói Gì Về TAV',
    partnersTitle: 'Đối Tác Hợp Tác',
    partnersHeadline: 'Đồng Hành Cùng Các Thương Hiệu Hàng Đầu',
    projectsTitle: 'Công Trình Nổi Bật',
    projectsHeadline: 'Những Dự Án Khẳng Định Đẳng Cấp',
    viewAll: 'Xem Tất Cả Dự Án',
    techTitle: 'Công Nghệ & Engine 3D',
    techHeadline: 'Sức Mạnh Từ Công Nghệ Thế Hệ Mới',
    contactTitle: 'Sẵn Sàng Hợp Tác?',
    contactSub: 'Hãy cùng xây dựng điều phi thường.',
    contactCta: 'Liên Hệ Ngay',
  },
}

const stats = [
  { value: '400+', key: 'statsLabel1' },
  { value: '100+', key: 'statsLabel2' },
  { value: '12+', key: 'statsLabel3' },
  { value: '24', key: 'statsLabel4' },
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
      <section className="relative w-full h-screen min-h-[720px] overflow-hidden flex items-center bg-[#050505]">
        {/* Background Video */}
        <div className="absolute inset-0 bg-[#050505]">
          <video
            ref={heroVideoRef}
            src="/video/home.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-75 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505]/90" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-20">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 mb-6 animate-fade-in-up animate-delay-100 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="font-mono text-xs font-bold text-white/80 tracking-wider uppercase">
                {tx.tagline}
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
                data-cursor="EXPLORE"
                className="btn-primary btn-magnetic px-8 py-4 text-sm font-display font-extrabold group"
              >
                <span>{tx.cta1}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1.5 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button
                onClick={() => navigate('intro')}
                data-cursor="PLAY"
                className="btn-outline btn-magnetic px-8 py-4 text-sm group"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse" />
                <span>{tx.cta2}</span>
              </button>

              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  data-cursor="CONTACT"
                  className="btn-outline btn-magnetic px-8 py-4 text-sm group"
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

      {/* ── STATS SECTION ── */}
      <section className="py-20 border-y border-white/10 bg-[#0E1217] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.key} className="p-6 text-center group interactive-card rounded-2xl bg-[#050505]/50 border border-white/10">
                <div className="font-display text-4xl md:text-6xl font-extrabold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="font-mono text-xs tracking-widest text-white/70 uppercase font-bold">{tx[s.key as keyof typeof tx]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-28 relative bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
            <div>
              <div className="section-label mb-4">◆ {tx.servicesTitle}</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight uppercase">
                {tx.servicesHeadline}
              </h2>
            </div>
            <button
              onClick={() => navigate('services')}
              data-cursor="DISCOVER"
              className="btn-page-switch btn-magnetic group self-start md:self-auto whitespace-nowrap"
            >
              <span>{lang === 'ENG' ? 'View All Services' : 'Xem Tất Cả'}</span>
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                data-cursor="DISCOVER"
                className="card-running-border cursor-pointer group flex flex-col justify-between"
                onClick={() => navigate('services')}
              >
                <div className="card-running-border-inner p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 h-32">
                      <img
                        src={svc.poster}
                        alt={svc.titleENG}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    </div>
                    <h3 className="font-display font-extrabold text-white mb-3 text-lg group-hover:text-[#FF9E00] transition-colors uppercase tracking-tight">
                      {lang === 'ENG' ? svc.titleENG : svc.titleVIE}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {lang === 'ENG' ? svc.descENG : svc.descVIE}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[#FF9E00] text-xs font-mono font-bold group-hover:translate-x-1.5 transition-transform">
                    <span>{lang === 'ENG' ? 'Explore Solution' : 'Khám Phá'}</span>
                    <span className="text-base">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CUSTOMER TESTIMONIALS SECTION ── */}
      <section className="py-28 bg-[#050505] relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
            <div>
              <div className="section-label mb-4">◆ {tx.testimonialsTitle}</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
                {tx.testimonialsHeadline}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-[#FF9E00] font-mono text-xs font-bold">
              <span>★ 5.0 RATING</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <div key={item.id} className="glass-panel border border-white/10 p-8 rounded-2xl flex flex-col justify-between card-hover relative group">
                <div>
                  <div className="flex items-center gap-1 text-[#FF9E00] mb-6">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed italic mb-8">
                    "{lang === 'ENG' ? item.contentENG : item.contentVIE}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6B00]/50 group-hover:border-[#FF9E00] transition-colors shadow-lg"
                  />
                  <div>
                    <h4 className="font-display font-extrabold text-white text-base group-hover:text-[#FF9E00] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-white/50 font-mono text-xs mt-0.5">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS SECTION ── */}
      <section className="py-20 bg-[#0E1217] relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <div className="section-label mb-3">◆ {tx.partnersTitle}</div>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white uppercase">{tx.partnersHeadline}</h3>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-9 gap-4 items-center">
            {partnersData.map((partner) => (
              <div key={partner.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#FF6B00]/60 transition-all group">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
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
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
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

          {/* Full 10 Featured Projects Grid */}
          <div className="space-y-6">
            {/* Top Showcase Row: 1 Hero Project + 2 Secondary Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large Hero Project */}
              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-500 shadow-2xl"
                style={{ minHeight: '420px' }}
                onClick={() => navigate('projects')}
              >
                <img
                  src={projectsData[0].img}
                  alt={projectsData[0].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: '420px' }}
                />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-3 py-1 rounded-full border border-[#FF6B00]/50 font-bold shadow-md">
                      {lang === 'ENG' ? projectsData[0].category : projectsData[0].categoryVIE}
                    </span>
                    <span className="text-white/70 font-mono text-xs">&bull; {projectsData[0].location}</span>
                  </div>
                  <h3 className="project-card-title font-display text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF9E00] transition-colors drop-shadow-md uppercase">
                    {projectsData[0].title}
                  </h3>
                </div>
              </div>

              {/* Two Stacked Showcase Projects */}
              <div className="flex flex-col gap-6">
                {projectsData.slice(1, 3).map((proj) => (
                  <div
                    key={proj.id}
                    className="relative overflow-hidden rounded-2xl cursor-pointer group flex-1 border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-500 shadow-xl"
                    style={{ minHeight: '200px' }}
                    onClick={() => navigate('projects')}
                  >
                    <img
                      src={proj.img}
                      alt={proj.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ minHeight: '200px' }}
                    />
                    <div className="absolute inset-0 img-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-2.5 py-0.5 rounded-full border border-[#FF6B00]/50 font-bold shadow-md">
                          {lang === 'ENG' ? proj.category : proj.categoryVIE}
                        </span>
                        <span className="text-white/70 font-mono text-[11px]">&bull; {proj.location}</span>
                      </div>
                      <h3 className="project-card-title font-display text-xl font-bold text-white group-hover:text-[#FF9E00] transition-colors drop-shadow-md uppercase">
                        {proj.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remaining 7 Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {projectsData.slice(3, 10).map((proj) => (
                <div
                  key={proj.id}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-500 shadow-xl bg-[#0A0A0A]"
                  style={{ minHeight: '260px' }}
                  onClick={() => navigate('projects')}
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
                    style={{ minHeight: '260px' }}
                  />
                  <div className="absolute inset-0 img-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[10px] tracking-widest text-[#FF9E00] uppercase bg-[#FF6B00]/20 px-2.5 py-0.5 rounded-full border border-[#FF6B00]/50 font-bold shadow-md">
                        {lang === 'ENG' ? proj.category : proj.categoryVIE}
                      </span>
                      <span className="text-white/70 font-mono text-[11px]">&bull; {proj.location}</span>
                    </div>
                    <h3 className="project-card-title font-display text-lg font-bold text-white group-hover:text-[#FF9E00] transition-colors drop-shadow-md uppercase truncate">
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
