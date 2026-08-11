import { type Page, type Lang } from '../App'

interface Props {
  currentPage: Page
  navigate: (page: Page) => void
  lang: Lang
  setLang: (l: Lang) => void
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  scrolled: boolean
  theme: 'dark' | 'light'
  setTheme: (t: 'dark' | 'light') => void
  onOpenContact?: () => void
}

const t = {
  ENG: {
    intro: 'Intro Video',
    home: 'Home Page',
    about: 'About Us',
    services: 'Services',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact & Consult',
  },
  VIE: {
    intro: 'Video Intro',
    home: 'Trang Chủ',
    about: 'Về Chúng Tôi',
    services: 'Dịch Vụ',
    projects: 'Dự Án',
    blog: 'Blog',
    contact: 'Tư Vấn & Liên Hệ',
  },
}

const pages: Page[] = ['intro', 'home', 'about', 'services', 'projects', 'blog']

export default function Navigation({
  currentPage,
  navigate,
  lang,
  setLang,
  menuOpen,
  setMenuOpen,
  scrolled,
  theme,
  setTheme,
  onOpenContact,
}: Props) {
  const labels = t[lang]

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? theme === 'dark'
              ? 'rgba(5, 5, 5, 0.92)'
              : 'rgba(248, 250, 252, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled
            ? theme === 'dark'
              ? '1px solid rgba(255, 107, 0, 0.25)'
              : '1px solid rgba(226, 232, 240, 0.8)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 35px rgba(0, 0, 0, 0.15)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[78px] flex items-center justify-between">
          {/* Logo TAV 3D Button */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-3 group active:scale-95 transition-transform duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-xl p-1"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FF9E00] to-[#FF6B00] opacity-30 group-hover:opacity-80 transition-opacity duration-300 blur-sm" />
              <div className="relative w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#FF6B00]/40 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_22px_rgba(255,107,0,0.6)] flex items-center justify-center transition-all duration-300">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" className="group-hover:rotate-12 transition-transform duration-500">
                  <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" stroke="#FF6B00" strokeWidth="1.4" fill="none" />
                  <polygon points="10,5 15,8 15,12 10,15 5,12 5,8" fill="rgba(255,107,0,0.18)" stroke="#FF6B00" strokeWidth="0.8" />
                  <circle cx="10" cy="10" r="1.8" fill="#FF9E00" />
                </svg>
              </div>
            </div>
            <span className={`font-display font-extrabold text-[22px] tracking-wider ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              T<span className="text-[#FF6B00]">AV</span> <span className="text-xs font-mono tracking-widest text-[#FF9E00] uppercase px-1.5 py-0.5 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/30 shadow-[0_0_10px_rgba(255,107,0,0.2)]">3D</span>
            </span>
          </button>

          {/* Minimalist Right Controls (Theme Toggle + Language Switcher + Main Hamburger Menu) */}
          <div className="flex items-center gap-3">
            {/* Theme Mode Switcher (Dark / Light) */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all active:scale-90 ${
                theme === 'dark'
                  ? 'glass-light border-white/12 text-white hover:text-[#FF9E00] hover:border-[#FF6B00]'
                  : 'bg-slate-100 border-slate-300 text-slate-800 hover:text-[#FF6B00] hover:border-[#FF6B00]'
              }`}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* High-Tech Language Switcher Pill */}
            <div className={`flex items-center p-1 rounded-xl border ${
              theme === 'dark' ? 'glass-light border-white/12' : 'bg-slate-100 border-slate-300'
            }`}>
              <button
                onClick={() => setLang('VIE')}
                className={`btn-lang-toggle ${lang === 'VIE' ? 'active' : 'inactive'}`}
              >
                VIE
              </button>
              <button
                onClick={() => setLang('ENG')}
                className={`btn-lang-toggle ${lang === 'ENG' ? 'active' : 'inactive'}`}
              >
                ENG
              </button>
            </div>

            {/* Mobile / Main Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`btn-icon w-11 h-11 relative flex flex-col justify-center items-center gap-[5px] group active:scale-90 ${
                theme === 'light' ? 'bg-slate-200 text-slate-900 border-slate-300' : ''
              }`}
              aria-label="Toggle menu"
            >
              <span
                className="hamburger-line block w-5 h-[2px] rounded-full origin-center"
                style={{
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                  backgroundColor: menuOpen ? '#FF6B00' : theme === 'dark' ? 'white' : '#0F172A',
                }}
              />
              <span
                className="hamburger-line block w-5 h-[2px] rounded-full"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  backgroundColor: theme === 'dark' ? 'white' : '#0F172A',
                }}
              />
              <span
                className="hamburger-line block w-5 h-[2px] rounded-full origin-center"
                style={{
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                  backgroundColor: menuOpen ? '#FF6B00' : theme === 'dark' ? 'white' : '#0F172A',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Hamburger Menu Overlay */}
      <div
        className="fixed inset-0 z-40 mobile-menu"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          background: theme === 'dark' ? 'rgba(5, 5, 5, 0.98)' : 'rgba(248, 250, 252, 0.98)',
          backdropFilter: 'blur(32px)',
        }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-7 p-6">
          {pages.map((page, i) => {
            const isActive = currentPage === page
            return (
              <button
                key={page}
                onClick={() => {
                  navigate(page)
                  setMenuOpen(false)
                }}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                }}
              >
                <span className="mobile-nav-num font-mono text-lg md:text-2xl text-[#FF6B00] font-bold transition-colors">0{i + 1}.</span>
                <span className={`mobile-nav-title font-display text-3xl md:text-5xl font-bold tracking-tight transition-all duration-300 ${
                  isActive
                    ? 'text-[#FF9E00]'
                    : theme === 'dark'
                    ? 'text-white/90'
                    : 'text-slate-800'
                }`}>
                  {labels[page as keyof typeof labels]}
                </span>
              </button>
            )
          })}

          {onOpenContact && (
            <button
              onClick={() => {
                setMenuOpen(false)
                onOpenContact()
              }}
              className="mt-4 px-8 py-3.5 rounded-full bg-[#FF6B00] text-black font-display font-extrabold text-sm shadow-[0_0_25px_rgba(255,107,0,0.6)] active:scale-95 transition-all"
            >
              {labels.contact}
            </button>
          )}
        </div>
      </div>
    </>
  )
}