import { type Page, type Lang } from '../App'

interface Props {
  navigate: (page: Page) => void
  lang: Lang
}

const t = {
  ENG: {
    tagline: 'Crafting immersive visual experiences that transform ideas into breathtaking realities.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    address: '194 Nguyễn Mậu Tài - Hòa Xuân - Đà Nẵng',
    email: 'info@tav.vn',
    phone: '+84 28 3822 4488',
    copyright: '© 2026 TAV 3D. All rights reserved.',
    links: {
      services: ['3D Rendering', 'VR Tour', '3D Mapping', '3D Modeling', 'AR Experience'],
      company: ['About Us', 'Projects', 'Blog', 'Careers', 'Contact'],
    },
  },
  VIE: {
    tagline: 'Tạo ra những trải nghiệm thị giác đắm chìm biến ý tưởng thành những thực tế tuyệt vời.',
    services: 'Dịch Vụ',
    company: 'Công Ty',
    contact: 'Liên Hệ',
    address: '194 Nguyễn Mậu Tài - Hòa Xuân - Đà Nẵng',
    email: 'info@tav.vn',
    phone: '+84 28 3822 4488',
    copyright: '© 2026 TAV 3D. Tất cả quyền được bảo lưu.',
    links: {
      services: ['Kết Xuất 3D', 'Tour VR', '3D Mapping', 'Mô Hình 3D', 'Trải Nghiệm AR'],
      company: ['Về Chúng Tôi', 'Dự Án', 'Blog', 'Tuyển Dụng', 'Liên Hệ'],
    },
  },
}

const servicePages: Page[] = ['services', 'services', 'services', 'services', 'services']
const companyPages: Page[] = ['about', 'projects', 'blog', 'about', 'about']

export default function Footer({ navigate, lang }: Props) {
  const tx = t[lang]

  return (
    <footer className="bg-[#050505] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('home')} className="flex items-center gap-3 mb-5 group active:scale-95 transition-transform">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FF9E00] to-[#FF6B00] opacity-30 group-hover:opacity-70 transition-opacity blur-sm" />
                <div className="relative w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#FF6B00]/40 group-hover:border-[#FF6B00] flex items-center justify-center transition-colors">
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" stroke="#FF6B00" strokeWidth="1.4" fill="none" />
                    <polygon points="10,5 15,8 15,12 10,15 5,12 5,8" fill="rgba(255,107,0,0.18)" stroke="#FF6B00" strokeWidth="0.8" />
                    <circle cx="10" cy="10" r="1.8" fill="#FF9E00" />
                  </svg>
                </div>
              </div>
              <span className="font-display font-extrabold text-[22px] tracking-wider text-white">
                T<span className="text-[#FF6B00]">AV</span> <span className="text-xs font-mono tracking-widest text-[#FF9E00] uppercase px-1.5 py-0.5 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/30">3D</span>
              </span>
            </button>
            <p className="text-white/50 text-sm leading-relaxed mb-8">{tx.tagline}</p>
            <div className="flex gap-3">
              {['linkedin', 'instagram', 'youtube', 'behance'].map((social) => (
                <div
                  key={social}
                  className="btn-icon w-10 h-10 rounded-xl text-white/50 hover:text-[#FF9E00] text-xs font-mono uppercase"
                  title={social}
                >
                  {social[0].toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 tracking-wider uppercase text-[#FF9E00]">{tx.services}</h4>
            <ul className="flex flex-col gap-3">
              {tx.links.services.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(servicePages[i])}
                    className="text-white/50 text-sm hover:text-[#FF9E00] transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 tracking-wider uppercase text-[#FF9E00]">{tx.company}</h4>
            <ul className="flex flex-col gap-3">
              {tx.links.company.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(companyPages[i])}
                    className="text-white/50 text-sm hover:text-[#FF9E00] transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 tracking-wider uppercase text-[#FF9E00]">{tx.contact}</h4>
            <div className="flex flex-col gap-4 text-sm text-white/50">
              <div>
                <p className="whitespace-pre-line leading-relaxed">{tx.address}</p>
              </div>
              <a href={`mailto:${tx.email}`} className="hover:text-[#FF9E00] transition-colors duration-200">{tx.email}</a>
              <a href={`tel:${tx.phone}`} className="hover:text-[#FF9E00] transition-colors duration-200 font-mono">{tx.phone}</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-mono">{tx.copyright}</p>
          <div className="flex gap-6 text-white/30 text-xs">
            <span className="hover:text-[#FF9E00] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#FF9E00] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
