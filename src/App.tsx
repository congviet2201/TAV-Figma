import { useState, useEffect, useRef } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export type Page = 'home' | 'about' | 'services' | 'projects' | 'blog'
export type Lang = 'ENG' | 'VIE'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [lang, setLang] = useState<Lang>('ENG')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }, [currentPage])

  const navigate = (page: Page) => setCurrentPage(page)

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
      <Navigation
        currentPage={currentPage}
        navigate={navigate}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
      />

      <main>
        {currentPage === 'home' && <HomePage navigate={navigate} lang={lang} />}
        {currentPage === 'about' && <AboutPage lang={lang} />}
        {currentPage === 'services' && <ServicesPage lang={lang} navigate={navigate} />}
        {currentPage === 'projects' && <ProjectsPage lang={lang} />}
        {currentPage === 'blog' && <BlogPage lang={lang} />}
      </main>

      <Footer navigate={navigate} lang={lang} />
    </div>
  )
}
