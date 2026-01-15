import { useLanguage } from '../contexts/LanguageContext'
import logoImage from '../assets/SolunaCafeBar.png'

const Hero = () => {
  const { t } = useLanguage()

  const handleScrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleScrollToContact()
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{ backgroundColor: '#F9F4EE' }}
    >
      <div className="container mx-auto px-4 py-20 flex justify-center items-center flex-col text-center">
        <div className="-mt-32 md:-mt-40 lg:-mt-48 mb-4 md:mb-6 flex justify-center items-center">
          <img
            src={logoImage}
            alt="Soluna Café-Bar"
            className="max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto"
          />
        </div>
        <button
          type="button"
          onClick={handleScrollToContact}
          onKeyDown={handleKeyDown}
          className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-offset-2"
          style={{ backgroundColor: '#955A21' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a4819'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#955A21'}
          aria-label={t('hero.buttonAria')}
        >
          {t('hero.button')}
        </button>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 animate-bounce bottom-8 md:bottom-12 lg:bottom-16">
        <svg
          className="w-6 h-6"
          style={{ color: '#955A21', marginLeft: '-15px' }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
    </section>
  )
}

export default Hero
