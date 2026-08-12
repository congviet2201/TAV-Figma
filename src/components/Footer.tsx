import { type Page, type Lang } from '../App'

interface Props {
  navigate: (page: Page) => void
  lang: Lang
}

const t = {
  ENG: {
    tagline: 'T Architect & Visualization Co., Ltd. - Crafting immersive 3D visual experiences.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    address: '194-Nguyen Mau Tai, Hoa Xuan, Cam Le, Da Nang, Viet Nam',
    email: 'tuantn@tav.vn / info@tav.vn',
    phone: '0775 315 323 / 077 646 9999',
    copyright: '© 2025 T Architect & Visualization Co., Ltd. All rights reserved.',
    links: {
      services: ['3D Rendering', '3D Mapping', '3D Modeling', 'VR/AR Tour', 'Interactive App'],
      company: ['About Us', 'Projects', 'Blog', 'Contact'],
    },
  },
  VIE: {
    tagline: 'Công ty TNHH T Architect & Visualization - Giải pháp trực quan hóa 3D đắm chìm cao cấp.',
    services: 'Dịch Vụ',
    company: 'Công Ty',
    contact: 'Liên Hệ',
    address: '194-Nguyễn Mậu Tài, P. Hòa Xuân, Q. Cẩm Lệ, Đà Nẵng, Việt Nam',
    email: 'tuantn@tav.vn / info@tav.vn',
    phone: '0775 315 323 / 077 646 9999',
    copyright: '© 2025 Công ty TNHH T Architect & Visualization. Tất cả quyền được bảo lưu.',
    links: {
      services: ['Kết Xuất 3D', '3D Mapping', 'Mô Hình 3D', 'Tour VR/AR', 'Ứng Dụng Tương Tác'],
      company: ['Về Chúng Tôi', 'Dự Án', 'Blog', 'Liên Hệ'],
    },
  },
}

const servicePages: Page[] = ['services', 'services', 'services', 'services', 'services']
const companyPages: Page[] = ['about', 'projects', 'blog', 'about']

export default function Footer({ navigate, lang }: Props) {
  const tx = t[lang]

  return (
    <footer className="bg-[#050505] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('home')} className="flex items-center mb-5 group active:scale-95 transition-transform">
              <img
                src="/assets/gif/logoDark.gif"
                alt="TAV 3D Animated Logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/gif/logoLight.gif'
                }}
                className="h-28 md:h-[110px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_28px_rgba(255,107,0,0.8)]"
              />
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
