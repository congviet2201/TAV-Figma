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
    titleENG: '3D Render CG (Exterior & Interior)',
    titleVIE: 'Kết Xuất 3D CG (Ngoại Thất & Nội Thất)',
    descENG: 'Photorealistic architectural rendering for exterior masterplans and luxury interior spaces. Using V-Ray, Corona, and Unreal Engine 5 to capture perfect global illumination, natural materials, and depth.',
    descVIE: 'Dịch vụ diễn họa 3D siêu thực cho quy hoạch ngoại thất và không gian nội thất cao cấp. Sử dụng V-Ray, Corona và Unreal Engine 5 để tái tạo ánh sáng tự nhiên, vật liệu và độ sâu kiến trúc.',
    img: '/assets/image/TAVOFFICEJAPAN/TAV_villa office ariel view.png',
    subMedia: [
      '/assets/image/TAVOFFICEJAPAN/TAV_villa office reception.png',
      '/assets/image/TAVOFFICEJAPAN/TAV_villa office elevator.png',
      '/assets/image/TAVVILLAGECANADA/TAV_villa pool 001.png',
    ],
    tags: ['Ngoại Thất / Exterior', 'Nội Thất / Interior', 'High-End Villa', 'Masterplan'],
    icon: '◈',
    color: '#FF6B00',
  },
  {
    titleENG: '3D Mapping',
    titleVIE: 'Trình Diễn 3D Mapping',
    descENG: 'Transform any surface — building facades, stages, exhibition halls — into a living digital canvas. Full-event projection mapping production and content creation.',
    descVIE: 'Biến mọi bề mặt — mặt tiền tòa nhà, sân khấu, phòng triển lãm — thành bức tranh số sống động. Sản xuất trình chiếu 3D mapping sự kiện chuyên nghiệp.',
    img: '/assets/image/sv-3d-mapping.png',
    subMedia: [
      '/video/mapping_3d.mp4',
    ],
    tags: ['Events', 'Brand Activations', 'Architectural Projection', 'Concerts'],
    icon: '◉',
    color: '#FF9E00',
  },
  {
    titleENG: '3D Modeling',
    titleVIE: 'Dựng Mô Hình 3D',
    descENG: 'Precision polygon modeling for architecture, product design, game assets, and film production from CAD drawings and BIM models.',
    descVIE: 'Mô hình polygon chính xác cho kiến trúc, thiết kế sản phẩm, tài sản game và sản xuất phim từ bản vẽ CAD và mô hình BIM.',
    img: 'https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F1.webp?alt=media&token=ab0f62a3-c0f1-4bf3-b79a-d6ce940c05c9',
    subMedia: [
      'https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F2.1.webp?alt=media&token=e729f7c7-69a7-4bdd-a7bc-2821e34cfb70',
    ],
    tags: ['Architecture', 'Product Design', 'BIM / CAD', 'Game Assets'],
    icon: '◇',
    color: '#FF6B00',
  },
  {
    titleENG: '360 VR Tour Walkthrough',
    titleVIE: 'Tour VR 360 Thực Tế Ảo Đắm Chìm',
    descENG: 'Interactive 360° virtual reality walkthroughs allowing buyers, investors, and guests to explore spaces as if physically there before construction is complete.',
    descVIE: 'Các chuyến tham quan thực tế ảo 360° tương tác đắm chìm cho phép người mua và nhà đầu tư khám phá không gian dự án trên điện thoại, máy tính và kính VR.',
    img: 'https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FAS%20Vietnamese%20three-room%20house.webp?alt=media&token=e3ffc96c-9a15-42bd-85b5-0987dfe0ccf3',
    subMedia: [
      'https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FAS%20VIEW%20GARDEN.webp?alt=media&token=1535a251-5561-4b8b-a568-ca2b01f30a12',
    ],
    tags: ['Real Estate VR', 'Hospitality', 'Interactive 360', 'Spatial VR'],
    icon: '◎',
    color: '#FF9E00',
  },
  {
    titleENG: 'Cinematic 3D Movie & Animation',
    titleVIE: 'Phim Hoạt Họa Kiến Trúc 3D Cinematic (Movie)',
    descENG: 'Cinematic 3D walkthrough movies combining camera movement, soundscapes, and lighting to guide viewers through luxury real estate projects.',
    descVIE: 'Thước phim hoạt họa 3D kiến trúc điện ảnh kết hợp góc quay điện ảnh và âm thanh sống động dắt người xem tham quan toàn bộ dự án.',
    img: 'https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2FTAV%20TOWER%20DAY.jpg?alt=media&token=96afe78e-8efd-4be3-be24-ca9f2e58a5c0',
    subMedia: [
      'https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2F0531_%20VIDEO%2016-9%20rut%20ngan%20.mp4?alt=media&token=0cb96c76-ca7d-48da-9d7c-8da18678b248',
    ],
    tags: ['3D Movie', 'ArchViz Film', 'Cinematic Animation', 'Commercial'],
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

const tech = ['Unreal Engine 5.5', 'V-Ray', 'Corona Renderer', '3ds Max', 'Cinema 4D', 'Blender', 'Unity', 'Adobe CC', 'Substance Painter', 'ZBrush']

export default function ServicesPage({ lang, navigate }: Props) {
  const tx = t[lang]

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute top-0 right-0 w-[550px] h-[550px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              data-cursor="DISCOVER"
              className={`glass-panel rounded-3xl overflow-hidden interactive-card border border-white/10 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-[#0A0A0A]`}
            >
              <div className="relative md:w-1/2 overflow-hidden" style={{ minHeight: '380px' }}>
                <img
                  src={svc.img}
                  alt={lang === 'ENG' ? svc.titleENG : svc.titleVIE}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/image/blogs/blog1.png'
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ minHeight: '380px' }}
                />
                <div className="absolute top-6 left-6 z-10 font-display text-5xl md:text-7xl font-extrabold text-white/20 select-none">
                  0{i + 1}
                </div>
                <div className="absolute inset-0" style={{ background: `linear-gradient(${i % 2 === 0 ? '90deg' : '270deg'}, rgba(5,5,5,0.9), transparent)` }} />
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full border border-white/15 font-semibold text-[#FF9E00]">
                    {lang === 'ENG' ? `SERVICE 0${i + 1}` : `DỊCH VỤ 0${i + 1}`}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 uppercase leading-tight">
                  {lang === 'ENG' ? svc.titleENG : svc.titleVIE}
                </h2>
                <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                  {lang === 'ENG' ? svc.descENG : svc.descVIE}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/15 uppercase font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <button
                    onClick={() => navigate('projects')}
                    className="btn-outline px-6 py-2.5 text-xs font-mono group rounded-full"
                  >
                    <span>{tx.learnMore}</span>
                    <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-white/10 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="section-label justify-center mb-4">◆ {tx.processLabel}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase">{tx.processHeadline}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="glass-panel p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-between">
                <div>
                  <div className="font-mono text-3xl font-bold text-[#FF6B00] mb-6">{p.step}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 uppercase">{lang === 'ENG' ? p.titleENG : p.titleVIE}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{lang === 'ENG' ? p.descENG : p.descVIE}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="py-16 border-t border-white/10 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-8 font-mono text-xs text-white/40 uppercase tracking-widest">
            {tx.techHeadline}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {tech.map((tItem) => (
              <span key={tItem} className="px-5 py-2 rounded-full glass border border-white/15 font-mono text-xs text-white/80 font-bold bg-[#0A0A0A]">
                {tItem}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
