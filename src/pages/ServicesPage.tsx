import { type Lang, type Page } from '../App'

interface Props { lang: Lang; navigate: (p: Page) => void }

const t = {
  ENG: {
    label: 'Services',
    headline: 'What We',
    headline2: 'Create',
    sub: 'From concept to delivery, our full-service studio handles every stage of the visualization and immersive experience pipeline.',
    learnMore: 'Learn More',
    processLabel: 'How We Work',
    processHeadline: 'Our Creative Process',
    techLabel: 'Technology',
    techHeadline: 'Tools & Software We Master',
  },
  VIE: {
    label: 'Dịch Vụ',
    headline: 'Những Gì',
    headline2: 'Chúng Tôi Tạo Ra',
    sub: 'Từ khái niệm đến giao hàng, studio dịch vụ đầy đủ của chúng tôi xử lý mọi giai đoạn của đường ống trực quan hóa và trải nghiệm đắm chìm.',
    learnMore: 'Tìm Hiểu Thêm',
    processLabel: 'Cách Chúng Tôi Làm',
    processHeadline: 'Quy Trình Sáng Tạo',
    techLabel: 'Công Nghệ',
    techHeadline: 'Công Cụ & Phần Mềm Chúng Tôi Thành Thạo',
  },
}

const services = [
  {
    titleENG: '3D Rendering',
    titleVIE: 'Kết Xuất 3D',
    descENG: 'Our photorealistic rendering service produces stills and animations indistinguishable from photography. We use ray-traced rendering engines (V-Ray, Corona, Unreal Engine 5) to capture perfect lighting, material behavior, and atmospheric depth. Ideal for marketing materials, investor decks, and sales centers.',
    descVIE: 'Dịch vụ kết xuất siêu thực của chúng tôi tạo ra hình ảnh và hoạt hình không thể phân biệt với nhiếp ảnh. Chúng tôi sử dụng các engine kết xuất ray-traced (V-Ray, Corona, Unreal Engine 5) để nắm bắt ánh sáng hoàn hảo, vật liệu và độ sâu không khí.',
    img: 'https://images.unsplash.com/photo-1633109713362-031e75973c1b?w=900&h=600&fit=crop&auto=format',
    tags: ['Architecture', 'Interior', 'Product', 'Landscape'],
    icon: '◈',
    color: '#FF6B00',
  },
  {
    titleENG: '3D Mapping',
    titleVIE: '3D Mapping',
    descENG: 'Transform any surface — building facades, stages, exhibition halls — into a living canvas. Our projection mapping team handles full-event production: content creation, hardware setup, and live operation for corporate events, product launches, and public installations.',
    descVIE: 'Biến mọi bề mặt — mặt tiền tòa nhà, sân khấu, phòng triển lãm — thành canvas sống động. Nhóm projection mapping của chúng tôi xử lý toàn bộ sản xuất sự kiện: tạo nội dung, cài đặt phần cứng và vận hành trực tiếp.',
    img: 'https://images.unsplash.com/photo-1784358582539-f10766868e9e?w=900&h=600&fit=crop&auto=format',
    tags: ['Events', 'Brand Activations', 'Installations', 'Concerts'],
    icon: '◉',
    color: '#FF9E00',
  },
  {
    titleENG: '3D Modeling',
    titleVIE: 'Mô Hình 3D',
    descENG: 'Precision polygon modeling for architecture, product design, game assets, and film production. We work from sketches, technical drawings, point-cloud scans, or reference imagery — and deliver optimized meshes ready for rendering, game engines, or 3D printing.',
    descVIE: 'Mô hình polygon chính xác cho kiến trúc, thiết kế sản phẩm, tài sản game và sản xuất phim. Chúng tôi làm việc từ phác thảo, bản vẽ kỹ thuật, quét point-cloud hoặc hình ảnh tham khảo.',
    img: 'https://images.unsplash.com/photo-1633109611134-c41b5c0bbc1a?w=900&h=600&fit=crop&auto=format',
    tags: ['Architecture', 'Product Design', 'Game Assets', '3D Printing'],
    icon: '◇',
    color: '#FF6B00',
  },
  {
    titleENG: 'VR Tour',
    titleVIE: 'Tour VR',
    descENG: 'Interactive virtual reality walkthroughs that let buyers, investors, and guests explore a space as if they were physically there — before construction is complete. Delivered as standalone VR apps, web-based experiences, or mobile-compatible 360° tours.',
    descVIE: 'Các chuyến tham quan thực tế ảo tương tác cho phép người mua, nhà đầu tư và khách hàng khám phá không gian như thể họ đang ở đó — trước khi xây dựng hoàn thành.',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=900&h=600&fit=crop&auto=format',
    tags: ['Real Estate', 'Hospitality', 'Retail', 'Education'],
    icon: '◎',
    color: '#FF9E00',
  },
  {
    titleENG: 'AR Experience',
    titleVIE: 'Trải Nghiệm AR',
    descENG: 'Augmented reality applications that overlay digital content onto the physical world using smartphones or AR glasses. Used by real estate developers to show future buildings on empty lots, and by retailers to let customers visualize furniture in their homes.',
    descVIE: 'Ứng dụng thực tế tăng cường phủ nội dung kỹ thuật số lên thế giới vật lý bằng smartphone hoặc kính AR. Được sử dụng bởi nhà phát triển bất động sản để hiển thị tòa nhà tương lai.',
    img: 'https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?w=900&h=600&fit=crop&auto=format',
    tags: ['Real Estate', 'Retail', 'Marketing', 'Training'],
    icon: '◑',
    color: '#FF6B00',
  },
]

const process = [
  { step: '01', titleENG: 'Discovery', titleVIE: 'Khám Phá', descENG: 'We start with a deep brief — understanding your project, audience, deliverables, and timeline.', descVIE: 'Chúng tôi bắt đầu với bản tóm lược sâu — hiểu dự án, đối tượng, sản phẩm và thời gian của bạn.' },
  { step: '02', titleENG: 'Concept', titleVIE: 'Khái Niệm', descENG: 'We develop mood boards, style frames, and a visual direction for your approval before production begins.', descVIE: 'Chúng tôi phát triển mood board, style frame và định hướng thị giác để bạn phê duyệt trước khi sản xuất.' },
  { step: '03', titleENG: 'Production', titleVIE: 'Sản Xuất', descENG: 'Our artists build, light, and texture — sharing progress previews throughout the process.', descVIE: 'Các nghệ sĩ của chúng tôi xây dựng, chiếu sáng và tạo kết cấu — chia sẻ preview trong suốt quá trình.' },
  { step: '04', titleENG: 'Refinement', titleVIE: 'Tinh Chỉnh', descENG: 'Two rounds of revisions are included to align the output with your vision before final delivery.', descVIE: 'Hai vòng sửa đổi được bao gồm để điều chỉnh đầu ra với tầm nhìn của bạn trước khi giao hàng cuối cùng.' },
]

const tech = ['Unreal Engine 5', 'V-Ray', 'Corona Renderer', '3ds Max', 'Cinema 4D', 'Blender', 'Unity', 'Adobe CC', 'Substance Painter', 'ZBrush']

export default function ServicesPage({ lang, navigate }: Props) {
  const tx = t[lang]

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 right-0 w-[550px] h-[550px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-6">◆ {tx.label}</div>
          <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[1.05] text-white mb-8">
            {tx.headline}<br />
            <span className="text-gradient">{tx.headline2}</span>
          </h1>
          <p className="max-w-[580px] text-white/70 text-lg leading-relaxed">{tx.sub}</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              data-cursor="DISCOVER"
              className={`glass-panel rounded-2xl overflow-hidden interactive-card border border-white/10 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="relative md:w-1/2 overflow-hidden" style={{ minHeight: '340px' }}>
                <img
                  src={svc.img}
                  alt={lang === 'ENG' ? svc.titleENG : svc.titleVIE}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ minHeight: '340px' }}
                />
                <div className="absolute top-6 left-6 z-10 font-display text-5xl md:text-7xl font-extrabold text-white/20 select-none">
                  0{i + 1}
                </div>
                <div className="absolute inset-0" style={{ background: `linear-gradient(${i % 2 === 0 ? '90deg' : '270deg'}, rgba(5,5,5,0.9), transparent)` }} />
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full border border-white/15 font-semibold text-white/80">
                    {lang === 'ENG' ? `SERVICE 0${i + 1}` : `DỊCH VỤ 0${i + 1}`}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
                  {lang === 'ENG' ? svc.titleENG : svc.titleVIE}
                </h2>
                <p className="text-white/70 leading-relaxed mb-6 text-base">
                  {lang === 'ENG' ? svc.descENG : svc.descVIE}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/15 uppercase font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => navigate('projects')}
                  className="btn-outline px-6 py-3 text-sm self-start group"
                >
                  <span>{tx.learnMore}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-4">◆ {tx.processLabel}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16 uppercase">{tx.processHeadline}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div key={i} data-cursor="DISCOVER" className="relative card-running-border group">
                <div className="card-running-border-inner p-8">
                  <div className="font-display text-5xl font-extrabold mb-4 text-[#FF9E00] opacity-80 group-hover:opacity-100 transition-opacity">{p.step}</div>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-[#FF9E00] to-[#FF6B00] mb-4 rounded-full" />
                  <h3 className="font-display font-bold text-white text-lg mb-3 uppercase group-hover:text-[#FF9E00] transition-colors">
                    {lang === 'ENG' ? p.titleENG : p.titleVIE}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {lang === 'ENG' ? p.descENG : p.descVIE}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-4">◆ {tx.techLabel}</div>
          <h2 className="font-display text-4xl font-bold text-white mb-12">{tx.techHeadline}</h2>
          <div className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <div
                key={t}
                className="glass-pill border border-white/10 rounded-xl px-5 py-3 font-mono text-sm text-white/70 hover:text-[#FF9E00] hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/15 transition-all duration-300 cursor-default"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
