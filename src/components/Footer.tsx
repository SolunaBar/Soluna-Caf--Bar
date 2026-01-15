import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const location = useLocation()
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleScrollToTop()
    }
  }

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="text-amber-50 py-12" style={{ backgroundColor: '#7a4819' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Soluna Café-Bar</h3>
            <p className="text-amber-200">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection('inicio')}
                  className="text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                  tabIndex={0}
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                  tabIndex={0}
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                  tabIndex={0}
                >
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection('contacto')}
                  className="text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                  tabIndex={0}
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.follow')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BpRqcGN9x/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                aria-label="Facebook"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/solunacorvera?igsh=dW10Z2l5dTh0Z293&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                aria-label="Instagram"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid #955A21' }}>
          <p className="text-amber-200 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Soluna Café-Bar. {t('footer.rights')}
          </p>
          <button
            type="button"
            onClick={handleScrollToTop}
            onKeyDown={handleKeyDown}
            className="text-amber-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-4 py-2"
            aria-label={t('footer.backToTopAria')}
          >
            {t('footer.backToTop')}
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
