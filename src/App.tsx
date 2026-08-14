import { useState, useEffect } from 'react'
import IntroPage from './pages/IntroPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import PageTransitionController from './components/PageTransitionController'
import CustomCursor from './components/CustomCursor'

export type Page = 'intro' | 'home' | 'about' | 'services' | 'projects' | 'blog' | 'news'
export type Lang = 'ENG' | 'VIE'
export type ThemeMode = 'dark' | 'light'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('intro')
  const [targetPage, setTargetPage] = useState<Page | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [lang, setLang] = useState<Lang>('VIE')
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }, [currentPage])

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
  }, [theme])

  const navigate = (p: Page) => {
    if (p === currentPage || isTransitioning) return
    setTargetPage(p)
    setIsTransitioning(true)
  }

  const handleTransitionComplete = () => {
    if (targetPage) {
      setCurrentPage(targetPage)
    }
  }

  const handleTransitionEnd = () => {
    setTargetPage(null)
    setIsTransitioning(false)
  }

  const handleOpenContact = () => setContactOpen(true)

  return (
    <div className={`min-h-screen transition-colors duration-400 ${theme === 'dark' ? 'bg-[#050505] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'}`}>
      <CustomCursor />
      <Navigation
        currentPage={currentPage}
        navigate={navigate}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
        theme={theme}
        setTheme={setTheme}
        onOpenContact={handleOpenContact}
      />

      <PageTransitionController
        currentPage={currentPage}
        targetPage={targetPage}
        lang={lang}
        isTransitioning={isTransitioning}
        onTransitionComplete={handleTransitionComplete}
        onTransitionEnd={handleTransitionEnd}
      >
        <main>
          {currentPage === 'intro' && <IntroPage navigate={navigate} lang={lang} onOpenContact={handleOpenContact} />}
          {currentPage === 'home' && <HomePage navigate={navigate} lang={lang} onOpenContact={handleOpenContact} />}
          {currentPage === 'about' && <AboutPage lang={lang} />}
          {currentPage === 'services' && <ServicesPage lang={lang} navigate={navigate} />}
          {currentPage === 'projects' && <ProjectsPage lang={lang} />}
          {(currentPage === 'blog' || currentPage === 'news') && <BlogPage lang={lang} />}
        </main>
      </PageTransitionController>

      {currentPage !== 'intro' && <Footer navigate={navigate} lang={lang} theme={theme} />}

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        lang={lang}
      />
    </div>
  )
}
