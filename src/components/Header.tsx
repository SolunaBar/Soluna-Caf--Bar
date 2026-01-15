import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggleMenu()
    }
  }

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        handleCloseMenu()
      }
    } else {
      navigate(`/#${sectionId}`)
      handleCloseMenu()
    }
  }

  return (
    <header className=" top-0 left-0 right-0 bg-transparent z-50" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <nav className="container mx-auto px-4 py-4" aria-label="Navegación principal">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold uppercase" style={{ color: '#955A21', letterSpacing: '0.1em' }}>
            <Link 
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  scrollToSection('inicio')
                }
              }}
              className="focus:outline-none focus:ring-2 focus:ring-brown-600 rounded"
              aria-label={t('nav.home')}
            >
              Soluna Café-Bar
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-brown-600"
              style={{ color: '#955A21' }}
              onClick={handleToggleMenu}
              onKeyDown={handleKeyDown}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menú de navegación"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 right-0 md:bg-transparent shadow-lg md:shadow-none py-4 md:py-0`}
              style={{ backgroundColor: isMenuOpen ? '#EEE6DE' : 'transparent' }}
              id="mobile-menu"
            >
              <Link
                to="/"
                onClick={() => {
                  scrollToSection('inicio')
                }}
                className="block px-4 py-2 hover:bg-amber-50 md:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-brown-600 rounded transition-colors duration-200"
                style={{ color: '#955A21' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#7a4819'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#955A21'}
                tabIndex={0}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/about#sobre-nosotros"
                onClick={(e) => {
                  e.preventDefault()
                  if (location.pathname === '/about') {
                    const element = document.getElementById('sobre-nosotros')
                    if (element) {
                      const headerOffset = 170
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                    handleCloseMenu()
                  } else {
                    navigate('/about#sobre-nosotros')
                    handleCloseMenu()
                  }
                }}
                className="block px-4 py-2 hover:bg-amber-50 md:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-brown-600 rounded transition-colors duration-200"
                style={{ color: '#955A21' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#7a4819'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#955A21'}
                tabIndex={0}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/menu#menu-titulo"
                onClick={(e) => {
                  e.preventDefault()
                  if (location.pathname === '/menu') {
                    const element = document.getElementById('menu-titulo')
                    if (element) {
                      const headerOffset = 170
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                    handleCloseMenu()
                  } else {
                    navigate('/menu#menu-titulo')
                    handleCloseMenu()
                  }
                }}
                className="block px-4 py-2 hover:bg-amber-50 md:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-brown-600 rounded transition-colors duration-200"
                style={{ color: '#955A21' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#7a4819'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#955A21'}
                tabIndex={0}
              >
                {t('nav.menu')}
              </Link>
              <Link
                to="/#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contacto')
                }}
                className="block px-4 py-2 hover:bg-amber-50 md:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-brown-600 rounded transition-colors duration-200"
                style={{ color: '#955A21' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#7a4819'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#955A21'}
                tabIndex={0}
              >
                {t('nav.contact')}
              </Link>
              <div className="px-4 py-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
