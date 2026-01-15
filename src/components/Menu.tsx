import { useLanguage } from '../contexts/LanguageContext'

interface MenuItem {
  name: string
  description: string
  price: string
}

type MenuCategory = 'desayunos' | 'brunch' | 'cafe' | 'tapas' | 'bebidas' | 'cervezas' | 'cockteles' | 'postre'

const Menu = () => {
  const { t } = useLanguage()

  const categories: MenuCategory[] = ['desayunos', 'brunch', 'cafe', 'tapas', 'bebidas', 'cervezas', 'cockteles', 'postre']

  const menuData: Record<MenuCategory, MenuItem[]> = {
    desayunos: [
      { name: t('menu.breakfast1'), description: t('menu.breakfast1.desc'), price: '€6.50' },
      { name: t('menu.breakfast2'), description: t('menu.breakfast2.desc'), price: '€7.00' },
      { name: t('menu.breakfast3'), description: t('menu.breakfast3.desc'), price: '€5.50' },
      { name: t('menu.breakfast4'), description: t('menu.breakfast4.desc'), price: '€8.00' },
    ],
    brunch: [
      { name: t('menu.brunch1'), description: t('menu.brunch1.desc'), price: '€12.50' },
      { name: t('menu.brunch2'), description: t('menu.brunch2.desc'), price: '€14.00' },
      { name: t('menu.brunch3'), description: t('menu.brunch3.desc'), price: '€13.00' },
      { name: t('menu.brunch4'), description: t('menu.brunch4.desc'), price: '€15.50' },
    ],
    cafe: [
      { name: t('menu.espresso'), description: t('menu.espresso.desc'), price: '€2.50' },
      { name: t('menu.cappuccino'), description: t('menu.cappuccino.desc'), price: '€3.00' },
      { name: t('menu.latte'), description: t('menu.latte.desc'), price: '€3.50' },
      { name: t('menu.americano'), description: t('menu.americano.desc'), price: '€2.50' },
      { name: t('menu.mocha'), description: t('menu.mocha.desc'), price: '€4.00' },
      { name: t('menu.filter'), description: t('menu.filter.desc'), price: '€2.00' },
    ],
    tapas: [
      { name: t('menu.tapa1'), description: t('menu.tapa1.desc'), price: '€6.50' },
      { name: t('menu.tapa2'), description: t('menu.tapa2.desc'), price: '€7.00' },
      { name: t('menu.tapa3'), description: t('menu.tapa3.desc'), price: '€8.50' },
      { name: t('menu.tapa4'), description: t('menu.tapa4.desc'), price: '€6.00' },
    ],
    bebidas: [
      { name: t('menu.drink1'), description: t('menu.drink1.desc'), price: '€3.50' },
      { name: t('menu.drink2'), description: t('menu.drink2.desc'), price: '€4.00' },
      { name: t('menu.drink3'), description: t('menu.drink3.desc'), price: '€3.00' },
      { name: t('menu.drink4'), description: t('menu.drink4.desc'), price: '€4.50' },
    ],
    cervezas: [
      { name: t('menu.beer1'), description: t('menu.beer1.desc'), price: '€3.50' },
      { name: t('menu.beer2'), description: t('menu.beer2.desc'), price: '€4.00' },
      { name: t('menu.beer3'), description: t('menu.beer3.desc'), price: '€3.80' },
      { name: t('menu.beer4'), description: t('menu.beer4.desc'), price: '€4.50' },
    ],
    cockteles: [
      { name: t('menu.cocktail1'), description: t('menu.cocktail1.desc'), price: '€8.50' },
      { name: t('menu.cocktail2'), description: t('menu.cocktail2.desc'), price: '€9.00' },
      { name: t('menu.cocktail3'), description: t('menu.cocktail3.desc'), price: '€8.00' },
      { name: t('menu.cocktail4'), description: t('menu.cocktail4.desc'), price: '€9.50' },
    ],
    postre: [
      { name: t('menu.dessert1'), description: t('menu.dessert1.desc'), price: '€5.50' },
      { name: t('menu.dessert2'), description: t('menu.dessert2.desc'), price: '€6.00' },
      { name: t('menu.dessert3'), description: t('menu.dessert3.desc'), price: '€5.00' },
      { name: t('menu.dessert4'), description: t('menu.dessert4.desc'), price: '€6.50' },
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

  const renderMenuItem = (item: MenuItem, index: number) => (
    <div
      key={index}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold" style={{ color: '#955A21' }}>{item.name}</h3>
        <span className="text-lg font-bold" style={{ color: '#955A21' }}>{item.price}</span>
      </div>
      <p className="text-gray-600">{item.description}</p>
    </div>
  )

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
