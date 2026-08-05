import { type Page, type Lang } from '../App'

interface Props {
  currentPage: Page
  navigate: (page: Page) => void
  lang: Lang
  setLang: (l: Lang) => void
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  scrolled: boolean
}

const t = {
  ENG: {
    about: 'About Us',
    services: 'Services',
    projects: 'Projects',
    blog: 'Blog',
  },
  VIE: {
    about: 'Về Chúng Tôi',
    services: 'Dịch Vụ',
    projects: 'Dự Án',
    blog: 'Blog',
  },
}

const pages: Page[] = ['about', 'services', 'projects', 'blog']

export default function Navigation({ currentPage, navigate, lang, setLang, menuOpen, setMenuOpen, scrolled }: Props) {
  const labels = t[lang]

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(5, 5, 5, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 107, 0, 0.25)' : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 35px rgba(0, 0, 0, 0.85)' : 'none',
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
            <span className="font-display font-extrabold text-[22px] tracking-wider text-white">
              T<span className="text-[#FF6B00]">AV</span> <span className="text-xs font-mono tracking-widest text-[#FF9E00] uppercase px-1.5 py-0.5 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/30 shadow-[0_0_10px_rgba(255,107,0,0.2)]">3D</span>
            </span>
          </button>

          {/* High-Tech Floating Navigation Pill Container */}
          <nav className="hidden md:flex items-center nav-pill-container">
            {pages.map((page) => {
              const isActive = currentPage === page
              return (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={`nav-pill-btn ${isActive ? 'active' : ''}`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E00] shadow-[0_0_10px_#FF9E00] animate-pulse" />
                  )}
                  <span>{labels[page as keyof typeof labels]}</span>
                </button>
              )
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* High-Tech Language Switcher Pill */}
            <div className="hidden md:flex items-center p-1 rounded-xl glass-light border border-white/12">
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn-icon w-11 h-11 relative flex flex-col justify-center items-center gap-[5px] group active:scale-90"
              aria-label="Toggle menu"
            >
              <span
                className="hamburger-line block w-5 h-[2px] rounded-full origin-center"
                style={{
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                  backgroundColor: menuOpen ? '#FF6B00' : 'white',
                }}
              />
              <span
                className="hamburger-line block w-5 h-[2px] bg-white rounded-full"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="hamburger-line block w-5 h-[2px] rounded-full origin-center"
                style={{
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                  backgroundColor: menuOpen ? '#FF6B00' : 'white',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay (Clean Hover: Only Color Change + Scale Up) */}
      <div
        className="fixed inset-0 z-40 mobile-menu"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          background: 'rgba(5, 5, 5, 0.98)',
          backdropFilter: 'blur(32px)',
        }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 p-6">
          {pages.map((page, i) => {
            const isActive = currentPage === page
            return (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                style={{
                  transitionDelay: menuOpen ? `${i * 70}ms` : '0ms',
                }}
              >
                <span className="mobile-nav-num font-mono text-lg md:text-2xl text-[#FF6B00] font-bold transition-colors">0{i + 1}.</span>
                <span className={`mobile-nav-title font-display text-4xl md:text-5xl font-bold tracking-tight transition-all duration-300 ${
                  isActive ? 'text-[#FF9E00]' : 'text-white/90'
                }`}>
                  {labels[page as keyof typeof labels]}
                </span>
              </button>
            )
          })}

          <div className="mt-8 flex items-center gap-3 font-mono text-sm p-1.5 rounded-2xl glass-panel border border-white/10">
            <button
              onClick={() => setLang('VIE')}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-200 active:scale-95 ${
                lang === 'VIE'
                  ? 'bg-gradient-to-r from-[#FF9E00] to-[#FF6B00] text-[#050505] shadow-[0_0_20px_rgba(255,107,0,0.6)]'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              VIE
            </button>
            <button
              onClick={() => setLang('ENG')}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-200 active:scale-95 ${
                lang === 'ENG'
                  ? 'bg-gradient-to-r from-[#FF9E00] to-[#FF6B00] text-[#050505] shadow-[0_0_20px_rgba(255,107,0,0.6)]'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </>
  )
}