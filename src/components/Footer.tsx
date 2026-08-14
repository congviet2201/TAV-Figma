import { type Page, type Lang } from '../App'

interface Props {
  navigate: (page: Page) => void
  lang: Lang
  theme?: 'dark' | 'light'
}

const t = {
  ENG: {
    tagline: 'T Architect & Visualization Co., Ltd. - Crafting immersive 3D visual experiences.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    address: '194-Nguyen Mau Tai, Hoa Xuan, Cam Le, Da Nang, Viet Nam',
    email: 'info@tav.vn',
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
    email: 'info@tav.vn',
    phone: '0775 315 323 / 077 646 9999',
    copyright: '© 2025 Công ty TNHH T Architect & Visualization. Tất cả quyền được bảo lưu.',
    links: {
      services: ['Rendering 3D', '3D Mapping', 'Mô Hình 3D', 'Tour VR/AR', 'Ứng Dụng Tương Tác'],
      company: ['Về Chúng Tôi', 'Dự Án', 'Blog', 'Liên Hệ'],
    },
  },
}

const servicePages: Page[] = ['services', 'services', 'services', 'services', 'services']
const companyPages: Page[] = ['about', 'projects', 'blog', 'about']

const socialLinks = [
  { name: 'FB', title: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100068490675716' },
  { name: 'IG', title: 'Instagram', url: 'https://www.instagram.com/tav.visualization?fbclid=IwY2xjawTrnddwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMXhvcGdBQk5lOTBwdUF5VjdzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEezzgqly4xWb5Wl2IKJWB0SXWbe1qkzJGVfI9um4Qw82eZEdXdhodX8fY7E-0_aem_VtjEL0J06TSsPqHgOaSr7A' },
  { name: 'ZL', title: 'Zalo', url: 'https://zalo.me/0776469999' },
  { name: 'BE', title: 'Behance', url: 'https://www.behance.net/tavvn' },
]

export default function Footer({ navigate, lang, theme }: Props) {
  const tx = t[lang]
  const activeTheme = theme || (typeof document !== 'undefined' && document.body.classList.contains('light-mode') ? 'light' : 'dark')
  const isLight = activeTheme === 'light'

  return (
    <footer className="bg-[#050505] dark:bg-[#050505] light:bg-[#F1F5F9] border-t border-white/10 dark:border-white/10 light:border-slate-300 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('home')} className="btn-logo flex items-center mb-5 group active:scale-95 transition-transform">
              <img
                src={isLight ? '/assets/gif/logoLight.gif' : '/assets/gif/logoDark.gif'}
                alt="TAV 3D Animated Logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/gif/logoLight.gif'
                }}
                className={`h-28 md:h-[110px] w-auto object-contain group-hover:scale-105 transition-all duration-300 ${
                  isLight
                    ? 'drop-shadow-[0_4px_16px_rgba(234,88,12,0.45)] filter brightness-95 contrast-125'
                    : 'drop-shadow-[0_0_28px_rgba(255,107,0,0.85)]'
                }`}
              />
            </button>
            <p className="text-white/50 text-sm leading-relaxed mb-8">{tx.tagline}</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-icon w-10 h-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold uppercase transition-all ${
                    isLight
                      ? 'text-[#475569] hover:text-[#EA580C] bg-slate-100 hover:bg-slate-200 border border-slate-200'
                      : 'text-white/50 hover:text-[#FF9E00] bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                  title={s.title}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-display font-bold text-sm mb-5 tracking-wider uppercase ${
              isLight ? 'text-[#EA580C]' : 'text-[#FF9E00]'
            }`}>{tx.services}</h4>
            <ul className="flex flex-col gap-3">
              {tx.links.services.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(servicePages[i])}
                    className={`text-sm transition-colors duration-200 ${
                      isLight ? 'text-[#475569] hover:text-[#EA580C]' : 'text-white/50 hover:text-[#FF9E00]'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`font-display font-bold text-sm mb-5 tracking-wider uppercase ${
              isLight ? 'text-[#EA580C]' : 'text-[#FF9E00]'
            }`}>{tx.company}</h4>
            <ul className="flex flex-col gap-3">
              {tx.links.company.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(companyPages[i])}
                    className={`text-sm transition-colors duration-200 ${
                      isLight ? 'text-[#475569] hover:text-[#EA580C]' : 'text-white/50 hover:text-[#FF9E00]'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-display font-bold text-sm mb-5 tracking-wider uppercase ${
              isLight ? 'text-[#EA580C]' : 'text-[#FF9E00]'
            }`}>{tx.contact}</h4>
            <div className={`flex flex-col gap-4 text-sm ${isLight ? 'text-[#475569]' : 'text-white/50'}`}>
              <div>
                <p className="whitespace-pre-line leading-relaxed">{tx.address}</p>
              </div>
              <a href={`mailto:${tx.email}`} className={isLight ? 'hover:text-[#EA580C] transition-colors duration-200' : 'hover:text-[#FF9E00] transition-colors duration-200'}>{tx.email}</a>
              <a href={`tel:${tx.phone}`} className={isLight ? 'hover:text-[#EA580C] transition-colors duration-200 font-mono' : 'hover:text-[#FF9E00] transition-colors duration-200 font-mono'}>{tx.phone}</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-xs font-mono ${isLight ? 'text-[#64748B]' : 'text-white/30'}`}>{tx.copyright}</p>
          <div className={`flex gap-6 text-xs ${isLight ? 'text-[#64748B]' : 'text-white/30'}`}>
            <span className={isLight ? 'hover:text-[#EA580C] cursor-pointer transition-colors' : 'hover:text-[#FF9E00] cursor-pointer transition-colors'}>Privacy Policy</span>
            <span className={isLight ? 'hover:text-[#EA580C] cursor-pointer transition-colors' : 'hover:text-[#FF9E00] cursor-pointer transition-colors'}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
