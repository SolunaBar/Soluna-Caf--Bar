import { useLanguage } from '../contexts/LanguageContext'

interface MenuItem {
  name: string
  description: string
  price: string
}

type MenuCategory = 'desayunos' | 'brunch' | 'cafe' | 'tapas' | 'bebidas' | 'cervezas' | 'vino' | 'cockteles' | 'postre'

const Menu = () => {
  const { t } = useLanguage()

  const categories: MenuCategory[] = ['desayunos', 'brunch', 'cafe', 'tapas', 'bebidas', 'cervezas', 'vino', 'cockteles', 'postre']

  const menuData: Record<MenuCategory, MenuItem[]> = {
    desayunos: [
      { name: t('menu.breakfast1'), description: t('menu.breakfast1.desc'), price: '2.50€' },
      { name: t('menu.breakfast2'), description: t('menu.breakfast2.desc'), price: '3.50€' },
      { name: t('menu.breakfast3'), description: t('menu.breakfast3.desc'), price: '4€' },
      { name: t('menu.breakfast4'), description: t('menu.breakfast4.desc'), price: '4.50€' },
    ],
    brunch: [
      { name: t('menu.brunch1'), description: t('menu.brunch1.desc'), price: '7€' },
      { name: t('menu.brunch2'), description: t('menu.brunch2.desc'), price: '12.50€' },
      { name: t('menu.brunch3'), description: t('menu.brunch3.desc'), price: '7€' },
      { name: t('menu.brunch4'), description: t('menu.brunch4.desc'), price: '7€' },
      { name: t('menu.brunch5'), description: t('menu.brunch5.desc'), price: '10€' },
    ],
    cafe: [
      { name: t('menu.espresso'), description: t('menu.espresso.desc'), price: '1€' },
      { name: t('menu.americano'), description: t('menu.americano.desc'), price: '1.40€' },
      { name: t('menu.conleche'), description: t('menu.conleche.desc'), price: '1.60€' },
      { name: t('menu.latte'), description: t('menu.latte.desc'), price: '1.60€' },
      { name: t('menu.irishcoffee'), description: t('menu.irishcoffee.desc'), price: '3€' },
      { name: t('menu.baileys'), description: t('menu.baileys.desc'), price: '3€' },
      { name: t('menu.matcha'), description: t('menu.matcha.desc'), price: '3.5€' },
      { name: t('menu.pinklatte'), description: t('menu.pinklatte.desc'), price: '3€' },
      { name: t('menu.goldenlatte'), description: t('menu.goldenlatte.desc'), price: '3€' },
      { name: t('menu.chailatte'), description: t('menu.chailatte.desc'), price: '3€' },
      { name: t('menu.infusionnormal'), description: t('menu.infusionnormal.desc'), price: '1.30€' },
      { name: t('menu.infusionpremium'), description: t('menu.infusionpremium.desc'), price: '1.50€' },
    ],
    tapas: [
      { name: t('menu.tapa1'), description: t('menu.tapa1.desc'), price: '€6.50' },
      { name: t('menu.tapa2'), description: t('menu.tapa2.desc'), price: '€7.00' },
      { name: t('menu.tapa3'), description: t('menu.tapa3.desc'), price: '€8.50' },
      { name: t('menu.tapa4'), description: t('menu.tapa4.desc'), price: '€6.00' },
      { name: t('menu.tapa5'), description: t('menu.tapa5.desc'), price: '5€' },
      { name: t('menu.tapa6'), description: t('menu.tapa6.desc'), price: '6€' },
      { name: t('menu.tapa7'), description: t('menu.tapa7.desc'), price: '14€' },
      { name: t('menu.tapa8'), description: t('menu.tapa8.desc'), price: '5€' },
      { name: t('menu.tapa9'), description: t('menu.tapa9.desc'), price: '10€' },
      { name: t('menu.tapa10'), description: t('menu.tapa10.desc'), price: '10€' },
    ],
    bebidas: [
      { name: t('menu.drink1'), description: t('menu.drink1.desc'), price: '2€' },
      { name: t('menu.drink2'), description: t('menu.drink2.desc'), price: '1.50€' },
      { name: t('menu.drink3'), description: t('menu.drink3.desc'), price: '2.30€' },
      { name: t('menu.drink4'), description: t('menu.drink4.desc'), price: '2.90€' },
      { name: t('menu.drink5'), description: t('menu.drink5.desc'), price: '2.30€' },
      { name: t('menu.drink6'), description: t('menu.drink6.desc'), price: '2.60€' },
      { name: t('menu.drink7'), description: t('menu.drink7.desc'), price: '2.20€' },
      { name: t('menu.drink8'), description: t('menu.drink8.desc'), price: '3€' },
    ],
    cervezas: [
      { name: t('menu.beer1'), description: t('menu.beer1.desc'), price: '' },
      { name: t('menu.beer2'), description: t('menu.beer2.desc'), price: '' },
      { name: t('menu.beer3'), description: t('menu.beer3.desc'), price: '' },
      { name: t('menu.beer4'), description: t('menu.beer4.desc'), price: '' },
      { name: t('menu.beer5'), description: t('menu.beer5.desc'), price: '' },
      { name: t('menu.beer6'), description: t('menu.beer6.desc'), price: '' },
      { name: t('menu.beer7'), description: t('menu.beer7.desc'), price: '' },
      { name: t('menu.beer8'), description: t('menu.beer8.desc'), price: '' },
      { name: t('menu.beer9'), description: t('menu.beer9.desc'), price: '' },
      { name: t('menu.beer10'), description: t('menu.beer10.desc'), price: '' },
      { name: t('menu.beer11'), description: t('menu.beer11.desc'), price: '' },
      { name: t('menu.beer12'), description: t('menu.beer12.desc'), price: '' },
      { name: t('menu.beer13'), description: t('menu.beer13.desc'), price: '' },
    ],
    vino: [
      { name: t('menu.vino1'), description: t('menu.vino1.desc'), price: '' },
      { name: t('menu.vino2'), description: t('menu.vino2.desc'), price: '' },
      { name: t('menu.vino3'), description: t('menu.vino3.desc'), price: '' },
      { name: t('menu.vino4'), description: t('menu.vino4.desc'), price: '' },
      { name: t('menu.vino5'), description: t('menu.vino5.desc'), price: '' },
      { name: t('menu.vino6'), description: t('menu.vino6.desc'), price: '' },
      { name: t('menu.vino7'), description: t('menu.vino7.desc'), price: '' },
      { name: t('menu.vino8'), description: t('menu.vino8.desc'), price: '' },
      { name: t('menu.vino9'), description: t('menu.vino9.desc'), price: '' },
    ],
    cockteles: [
      { name: t('menu.cocktail1'), description: t('menu.cocktail1.desc'), price: '10€' },
      { name: t('menu.cocktail2'), description: t('menu.cocktail2.desc'), price: '8€' },
      { name: t('menu.cocktail3'), description: t('menu.cocktail3.desc'), price: '8€' },
      { name: t('menu.cocktail4'), description: t('menu.cocktail4.desc'), price: '8€' },
      { name: t('menu.cocktail5'), description: t('menu.cocktail5.desc'), price: '8€' },
      { name: t('menu.cocktail6'), description: t('menu.cocktail6.desc'), price: '7€' },
      { name: t('menu.cocktail7'), description: t('menu.cocktail7.desc'), price: '7€' },
      { name: t('menu.cocktail8'), description: t('menu.cocktail8.desc'), price: '5€' },
      { name: t('menu.cocktail9'), description: t('menu.cocktail9.desc'), price: '4€' },
    ],
    postre: [
      { name: t('menu.dessert1'), description: t('menu.dessert1.desc'), price: '4€' },
      { name: t('menu.dessert2'), description: t('menu.dessert2.desc'), price: '5€' },
      { name: t('menu.dessert3'), description: t('menu.dessert3.desc'), price: '5€' },
      { name: t('menu.dessert4'), description: t('menu.dessert4.desc'), price: '5€' },
    ],
  }

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, categoryId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToCategory(categoryId)
    }
  }

  const renderMenuItem = (item: MenuItem, index: number) => {
    const hasPriceInDescription = item.description && (item.description.includes('€') || item.description.includes('Caña') || item.description.includes('Pinta') || item.description.includes('Copa') || item.description.includes('Botella'))
    const showPriceSeparate = item.price && !hasPriceInDescription
    // Verificar si la descripción está vacía o es una clave de traducción (no se encontró la traducción)
    const hasValidDescription = item.description && item.description.trim() !== '' && !item.description.startsWith('menu.') && !item.description.endsWith('.desc')
    
    return (
      <div
        key={index}
        className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold" style={{ color: '#955A21' }}>{item.name}</h3>
          {showPriceSeparate && (
            <span className="text-lg font-bold" style={{ color: '#955A21' }}>{item.price}</span>
          )}
        </div>
        {hasValidDescription && (
          <p className="text-gray-600">{item.description}</p>
        )}
      </div>
    )
  }

  return (
    <section id="menu" className="py-20 min-h-screen" style={{ backgroundColor: '#F9F4EE' }}>
      <div className="container mx-auto px-4">
        <h2 id="menu-titulo" className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#955A21' }}>
          {t('menu.title')}
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12 pb-4 border-b border-amber-300 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => scrollToCategory(category)}
                onKeyDown={(e) => handleKeyDown(e, category)}
                className="px-4 py-2 rounded-lg font-semibold bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brown-600 whitespace-nowrap"
                style={{ color: '#955A21' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9F4EE'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                aria-label={t(`menu.category.${category}`)}
              >
                {t(`menu.category.${category}`)}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} id={category} className="scroll-mt-24">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#955A21' }}>
                  {t(`menu.category.${category}`)}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {menuData[category].map((item, index) => renderMenuItem(item, index))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-16 italic">
            {t('menu.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Menu
