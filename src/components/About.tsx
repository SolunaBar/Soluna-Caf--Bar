import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import brunchImage from '../assets/brunch.png'
import tapasImage from '../assets/tapas.png'
import coctelesImage from '../assets/cocteles.png'

const About = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleReadMore = () => {
    navigate('/about#sobre-nosotros')
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleReadMore()
    }
  }

  const items = [
    { title: 'Brunch', image: brunchImage, menuId: 'brunch', buttonKey: 'about.button.brunch' },
    { title: 'Tapas', image: tapasImage, menuId: 'tapas', buttonKey: 'about.button.tapas' },
    { title: 'Cócteles', image: coctelesImage, menuId: 'cockteles', buttonKey: 'about.button.cocteles' }
  ]

  const handleMenuNavigation = (menuId: string) => {
    navigate(`/menu#${menuId}`)
  }

  return (
    <section id="nosotros" className="py-20" style={{ backgroundColor: '#315950' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-20 mb-12">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[32rem] lg:h-[40rem] rounded-full bg-white mb-4 shadow-lg overflow-hidden group"
                  style={{ border: '8px solid #315950', backgroundColor: '#F9F4EE' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-700 ease-in-out rounded-full">
                    <h3 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out mb-4"
                      style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                    >
                      {item.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleMenuNavigation(item.menuId)}
                      className="px-6 py-2 md:px-8 md:py-3 rounded-lg text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2"
                      style={{ backgroundColor: '#955A21', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a4819'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#955A21'}
                      aria-label={t(item.buttonKey)}
                    >
                      {t(item.buttonKey)}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center" style={{ backgroundColor: '#F9F4EE' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#955A21' }}>
                {t('about.card.title')}
              </h3>
              <button
                type="button"
                onClick={handleReadMore}
                onKeyDown={handleKeyDown}
                className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-offset-2"
                style={{ backgroundColor: '#955A21' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a4819'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#955A21'}
                aria-label={t('about.card.button')}
              >
                {t('about.card.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
