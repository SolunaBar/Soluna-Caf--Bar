import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    return savedLanguage || 'es'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const translations: Record<Language, Record<string, string>> = {
    es: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      'nav.menu': 'Menú',
      'nav.contact': 'Contacto',
      
      // Hero
      'hero.subtitle': 'Un lugar acogedor donde cada taza cuenta una historia',
      'hero.button': 'Visítanos',
      'hero.buttonAria': 'Visítanos',
      
      // About
      'about.title': 'Sobre Nosotros',
      'about.card.title': 'Conoce nuestra historia',
      'about.card.button': 'Leer más',
      'about.paragraph1': 'En Soluna Café-Bar, somos un café-bar en Corvera, Murcia, especializado en brunch, tapas y cócteles artesanales. Hemos creado un espacio moderno y bohemio donde la buena comida, las bebidas de calidad y un ambiente relajado se unen para ofrecer una experiencia completa desde la mañana hasta la noche.',
      'about.paragraph2': 'Nuestra carta está pensada para todos los momentos del día: cafés y desayunos, brunch, tapas para compartir, vinos seleccionados y cócteles preparados al momento. Trabajamos con ingredientes de calidad y cuidamos cada detalle para que cada visita sea especial.',
      'about.paragraph3': 'Soluna Café-Bar es un lugar ideal para familias, amigos y visitantes que buscan un bar-café en Murcia con estilo, buen servicio y un ambiente acogedor. Ya sea para un café por la mañana, un almuerzo relajado o una copa por la noche, te esperamos en Corvera para disfrutar de una experiencia única.',
      'about.specialty.title': 'Nuestra Especialidad',
      'about.specialty.text1': 'Brunch, tapas y cócteles artesanales en un ambiente moderno y bohemio.',
      'about.specialty.text2': 'Un espacio donde cada momento del día encuentra su lugar perfecto, desde el desayuno hasta la noche.',
      'about.button.brunch': 'Ir a Brunch',
      'about.button.tapas': 'Ir a Tapas',
      'about.button.cocteles': 'Ir a Cócteles',
      
      // Menu
      'menu.title': 'Nuestro Menú',
      'menu.disclaimer': '* Menú sujeto a disponibilidad. Los precios pueden variar.',
      
      // Menu Categories
      'menu.category.desayunos': 'Desayunos',
      'menu.category.brunch': 'Brunch',
      'menu.category.cafe': 'Café',
      'menu.category.tapas': 'Tapas',
      'menu.category.bebidas': 'Bebidas',
      'menu.category.cervezas': 'Cervezas',
      'menu.category.vino': 'Vino',
      'menu.category.cockteles': 'Cócteles',
      'menu.category.postre': 'Postre',
      
      // Desayunos
      'menu.breakfast1': 'Tostada Ibérica de la Mañana',
      'menu.breakfast1.desc': 'Pan tostado con tomate natural y jamón curado, un desayuno clásico, sencillo y lleno de sabor.',
      'menu.breakfast2': 'Tostada Verde de la Mañana',
      'menu.breakfast2.desc': 'Pan tostado con aguacate cremoso y un queso crema ligero terminado con un toque de aceite de hojuelas de chile para un toque picante. El balance perfecto.',
      'menu.breakfast3': 'Torrijas Doradas de Brioche',
      'menu.breakfast3.desc': 'Brioche suave, ligeramente caramelizado, acompañado de frutas frescas de temporada. Dulce, cálido e irresistible.',
      'menu.breakfast4': 'Gofres Sunrise',
      'menu.breakfast4.desc': 'Gofres dorados con bacon crujiente, huevo frito y queso fundido. sabroso, reconfortante y lleno de sabor.',
      
      // Brunch
      'menu.brunch1': 'Desayuno Inglés',
      'menu.brunch1.desc': 'Clásico desayuno inglés con salchichas, panceta crujiente, hash browns, judías en tomate, tomates a la plancha, champiñones salteados, huevo frito y pan tostado.',
      'menu.brunch2': 'Desayuno Inglés Doble',
      'menu.brunch2.desc': 'Versión completa y contundente con tres salchichas, panceta crujiente, hash browns, judías en tomate, tomates a la plancha, champiñones, huevos fritos, morcilla y pan tostado. Incluye té o café.',
      'menu.brunch3': 'Desayuno Americano',
      'menu.brunch3.desc': 'Tortitas esponjosas con miel, acompañadas de huevos fritos, bacon crujiente y pan tostado.',
      'menu.brunch4': 'Caraqueño',
      'menu.brunch4.desc': 'Mini arepas fritas y crujientes con aguacate fresco, queso llanero, carne mechada y huevo — sabor auténtico de Caracas.',
      'menu.brunch5': 'Brunch Soluna para Dos',
      'menu.brunch5.desc': 'El brunch ideal para compartir: bollería variada, mermelada, jamón, queso curado, pan tostado, fruta de temporada y dos bebidas calientes a elegir.',
      
      // Café
      'menu.espresso': 'Expresso',
      'menu.espresso.desc': '',
      'menu.americano': 'Americano',
      'menu.americano.desc': '',
      'menu.conleche': 'Con leche',
      'menu.conleche.desc': '',
      'menu.latte': 'Latte',
      'menu.latte.desc': '',
      'menu.irishcoffee': 'Irish coffee',
      'menu.irishcoffee.desc': '',
      'menu.baileys': 'Baileys special',
      'menu.baileys.desc': '',
      'menu.matcha': 'Matcha latte',
      'menu.matcha.desc': '',
      'menu.pinklatte': 'Pink latte',
      'menu.pinklatte.desc': '',
      'menu.goldenlatte': 'Golden latte',
      'menu.goldenlatte.desc': '',
      'menu.chailatte': 'Chai latte',
      'menu.chailatte.desc': '',
      'menu.infusionnormal': 'Infusión normal',
      'menu.infusionnormal.desc': '',
      'menu.infusionpremium': 'Infusión premium',
      'menu.infusionpremium.desc': '',
      
      // Tapas
      'menu.tapa5': 'Patatas Trufadas',
      'menu.tapa5.desc': 'Crujientes patatas fritas coronadas con crema de queso trufado, parmesano rallado y un toque de perejil fresco.',
      'menu.tapa6': 'Croquetas del Día',
      'menu.tapa6.desc': 'Cuatro Deliciosas croquetas artesanales elaboradas según la especialidad del día, cremosas por dentro y doradas por fuera.',
      'menu.tapa7': 'Soluna Ibérica',
      'menu.tapa7.desc': 'Exquisita tabla de embutidos ibéricos, quesos selectos y galletas artesanales, ideal para compartir.',
      'menu.tapa8': 'Curado de la Casa',
      'menu.tapa8.desc': 'Queso curado servido con pimientos asados y cebolla encurtida, una combinación de sabores intensos y equilibrados.',
      'menu.tapa9': 'Degustación de Tierra de gracia',
      'menu.tapa9.desc': 'Selección de empanadas y tequeños, cada bocado lleno de tradición y sabor de Venezuela.',
      'menu.tapa10': 'Plato Verde',
      'menu.tapa10.desc': 'Hummus cremoso acompañado de ensalada fresca de pepino y aceitunas jugosas, un bocado saludable y lleno de sabor.',
      
      // Bebidas
      'menu.drink1': 'Refrescos',
      'menu.drink1.desc': 'Cocacola, cocacola zero, fanta limon, fanta naranja',
      'menu.drink2': '7up',
      'menu.drink2.desc': '',
      'menu.drink3': 'Tónica Fevertree',
      'menu.drink3.desc': '',
      'menu.drink4': 'Fevertree',
      'menu.drink4.desc': '',
      'menu.drink5': 'Acuarius',
      'menu.drink5.desc': '(melocotón rojo, Limón o Naranja)',
      'menu.drink6': 'Fuze tea',
      'menu.drink6.desc': '',
      'menu.drink7': 'Solan con Gas',
      'menu.drink7.desc': '',
      'menu.drink8': 'Agua 1 Ltr',
      'menu.drink8.desc': '',
      
      // Cervezas
      'menu.beer1': 'Guinness',
      'menu.beer1.desc': '1/2 - 2.60€ | Pinta - 5.00€',
      'menu.beer2': 'Strongbow',
      'menu.beer2.desc': '1/2 - 2.20€ | Pinta - 4.00€',
      'menu.beer3': 'Amstel',
      'menu.beer3.desc': '1/2 - 1.90€ | Pinta - 3.80€',
      'menu.beer4': 'Birra Moretti',
      'menu.beer4.desc': '1/2 - 2.60€ | Pinta - 4.00€',
      'menu.beer5': 'Radler',
      'menu.beer5.desc': '1/2 - 1.80€ | Pinta - 3.50€',
      'menu.beer6': 'Ladron Verano',
      'menu.beer6.desc': '1/2 - 1.60€ | Pinta - 3.50€',
      'menu.beer7': '1870',
      'menu.beer7.desc': '2.80€',
      'menu.beer8': 'Ladron manzana',
      'menu.beer8.desc': '2.80€',
      'menu.beer9': 'Heineken',
      'menu.beer9.desc': '2.00€',
      'menu.beer10': 'San Miguel',
      'menu.beer10.desc': '3.60€',
      'menu.beer11': 'Tostada 00',
      'menu.beer11.desc': '3.00€',
      'menu.beer12': 'S.M. Sin gluten',
      'menu.beer12.desc': '3.60€',
      'menu.beer13': 'Corona',
      'menu.beer13.desc': '3.20€',
      
      // Vino
      'menu.vino1': 'De la casa (TINTO, BLANCO ó ROSÉ)',
      'menu.vino1.desc': 'Copa: 3.60€ | Botella: 14€',
      'menu.vino2': 'Tinto Villa Paceta',
      'menu.vino2.desc': 'Copa: 4.60€ | Botella: 17€',
      'menu.vino3': 'Tinto Legaris',
      'menu.vino3.desc': 'Botella: 25€',
      'menu.vino4': 'Blanco La Charla',
      'menu.vino4.desc': 'Copa: 4.80€ | Botella: 18€',
      'menu.vino5': 'Blanco Pomal',
      'menu.vino5.desc': 'Botella: 20€',
      'menu.vino6': 'Anna Rosé',
      'menu.vino6.desc': 'Copa: 4.50€ | Botella: 17€',
      'menu.vino7': 'Abadía Poblet Rosé',
      'menu.vino7.desc': 'Botella: 26€',
      'menu.vino8': 'Cava Brut',
      'menu.vino8.desc': '6.50€',
      'menu.vino9': 'Rosé Cava',
      'menu.vino9.desc': '30€',
      
      // Cócteles
      'menu.cocktail1': 'Pornstar Martini',
      'menu.cocktail1.desc': 'Cóctel vibrante y seductor con vodka de vainilla, maracuyá y un toque de prosecco, afrutado, suave y divertido.',
      'menu.cocktail2': 'Cosmopolitan',
      'menu.cocktail2.desc': 'Mezcla refrescante de vodka, triple sec, arándano y lima fresca, elegante, equilibrado y lleno de sabor.',
      'menu.cocktail3': 'Martini Clásico',
      'menu.cocktail3.desc': 'Limpio y sofisticado, elaborado con ginebra o vodka premium y vermut seco, suave, intenso e icónico.',
      'menu.cocktail4': 'Mojito',
      'menu.cocktail4.desc': 'Clásico cubano refrescante con ron blanco, lima fresca, hierbabuena, azúcar y soda, ligero y muy refrescante.',
      'menu.cocktail5': 'Old Fashioned',
      'menu.cocktail5.desc': 'Clásico atemporal elaborado con bourbon, azúcar y bitters aromáticos, suavemente mezclado y terminado con piel de naranja, intenso, suave y elegante.',
      'menu.cocktail6': 'Cuba Libre',
      'menu.cocktail6.desc': 'Refrescante combinación de ron venezolano, cola y lima fresca — sencillo, suave y perfectamente equilibrado.',
      'menu.cocktail7': 'Gin de la casa',
      'menu.cocktail7.desc': '',
      'menu.cocktail8': 'Vodka Mix',
      'menu.cocktail8.desc': '',
      'menu.cocktail9': 'Vermouth',
      'menu.cocktail9.desc': '',
      
      // Postre
      'menu.dessert1': 'Pie de Parchita',
      'menu.dessert1.desc': 'Tarta suave y refrescante de parchita, con el equilibrio perfecto entre dulce y ácido.',
      'menu.dessert2': 'Lava Cake Medianoche',
      'menu.dessert2.desc': 'Coulant de chocolate caliente con un corazón fundente, acompañado de una bola de helado de vainilla.',
      'menu.dessert3': 'Gofres Dulce Soluna',
      'menu.dessert3.desc': 'Gofres esponjosos con chocolate fundido y fresas frescas, acompañados de una bola de helado y extra de chocolate.',
      'menu.dessert4': 'Tarta de la Semana',
      'menu.dessert4.desc': 'Nuestra tarta casera de la semana, elaborada a diario y con sabores que van cambiando — pregunta a nuestro equipo por la de hoy.',
      
      // Contact
      'contact.title': 'Contáctanos',
      'contact.info.title': 'Información de Contacto',
      'contact.address': 'Dirección',
      'contact.address.value': 'Plaza Luis Fontes Pagan 12, Corvera, Murcia 30153',
      'contact.phone': 'Teléfono',
      'contact.email': 'Email',
      'contact.hours': 'Horario',
      'contact.hours.weekdays': 'Lunes - Viernes: 7:00 AM - 9:00 PM',
      'contact.hours.weekends': 'Sábados - Domingos: 8:00 AM - 10:00 PM',
      'contact.visit.title': 'Visítanos',
      'contact.visit.text1': 'Estamos ubicados en el corazón de la ciudad, ofreciendo un ambiente perfecto para trabajar, estudiar o simplemente relajarte.',
      'contact.visit.text2': '¡Te esperamos para compartir una excelente experiencia!',
      
      // Footer
      'footer.tagline': 'Un lugar acogedor donde cada taza cuenta una historia.',
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.follow': 'Síguenos',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.backToTop': 'Volver arriba ↑',
      'footer.backToTopAria': 'Volver arriba',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.menu': 'Menu',
      'nav.contact': 'Contact',
      
      // Hero
      'hero.subtitle': 'A cozy place where every cup tells a story',
      'hero.button': 'Visit Us',
      'hero.buttonAria': 'Visit Us',
      
      // About
      'about.title': 'About Us',
      'about.card.title': 'Discover our story',
      'about.card.button': 'Read more',
      'about.paragraph1': 'At Soluna Café-Bar, we are a café-bar in Corvera, Murcia, specialized in brunch, tapas, and artisanal cocktails. We have created a modern and bohemian space where good food, quality drinks, and a relaxed atmosphere come together to offer a complete experience from morning to night.',
      'about.paragraph2': 'Our menu is designed for all moments of the day: coffees and breakfasts, brunch, tapas to share, selected wines, and cocktails prepared to order. We work with quality ingredients and take care of every detail so that each visit is special.',
      'about.paragraph3': 'Soluna Café-Bar is an ideal place for families, friends, and visitors looking for a bar-café in Murcia with style, good service, and a welcoming atmosphere. Whether for a morning coffee, a relaxed lunch, or an evening drink, we await you in Corvera to enjoy a unique experience.',
      'about.specialty.title': 'Our Specialty',
      'about.specialty.text1': 'Brunch, tapas, and artisanal cocktails in a modern and bohemian atmosphere.',
      'about.specialty.text2': 'A space where every moment of the day finds its perfect place, from breakfast to night.',
      'about.button.brunch': 'Go to Brunch',
      'about.button.tapas': 'Go to Tapas',
      'about.button.cocteles': 'Go to Cocktails',
      
      // Menu
      'menu.title': 'Our Menu',
      'menu.disclaimer': '* Menu subject to availability. Prices may vary.',
      
      // Menu Categories
      'menu.category.desayunos': 'Breakfast',
      'menu.category.brunch': 'Brunch',
      'menu.category.cafe': 'Coffee',
      'menu.category.tapas': 'Tapas',
      'menu.category.bebidas': 'Drinks',
      'menu.category.cervezas': 'Beer',
      'menu.category.vino': 'Wine',
      'menu.category.cockteles': 'Cocktails',
      'menu.category.postre': 'Dessert',
      
      // Breakfast
      'menu.breakfast1': 'Morning Ibérico Toast',
      'menu.breakfast1.desc': 'Toasted bread rubbed with fresh tomato and topped with cured ham, simple, fresh and full of flavour.',
      'menu.breakfast2': 'Green Morning Toast',
      'menu.breakfast2.desc': 'Toasted bread topped with creamy avocado and smooth cream cheese, finished with a drizzle of chilli flakes oil for a gentle kick. The perfect balance.',
      'menu.breakfast3': 'Golden Brioche Torrijas',
      'menu.breakfast3.desc': 'Soft brioche toast, lightly caramelised and served with fresh seasonal fruits. Sweet, warm and indulgent.',
      'menu.breakfast4': 'Sunrise Waffles',
      'menu.breakfast4.desc': 'Golden waffles topped with crispy bacon, fried egg and melted cheese. savoury, comforting and full of flavour.',
      
      // Brunch
      'menu.brunch1': 'English Breakfast',
      'menu.brunch1.desc': 'A classic full English with sausages, crispy bacon, golden hash browns, baked beans, grilled tomatoes, sautéed mushrooms, fried egg and toasted bread.',
      'menu.brunch2': 'Double English Breakfast',
      'menu.brunch2.desc': 'A hearty double portion with three sausages, crispy bacon, hash browns, baked beans, grilled tomatoes, mushrooms, fried eggs, traditional black pudding and toasted bread. Includes tea or coffee.',
      'menu.brunch3': 'American',
      'menu.brunch3.desc': 'Fluffy pancakes drizzled with honey, served with fried eggs, crispy bacon and toasted bread.',
      'menu.brunch4': 'Caraqueño',
      'menu.brunch4.desc': 'Crispy mini fried arepas served with fresh avocado, llanero cheese, shredded beef and egg — a true taste of Caracas.',
      'menu.brunch5': 'Soluna Brunch for Two',
      'menu.brunch5.desc': 'A perfect brunch to share: assorted pastries, jam, cured ham, aged cheese, toasted bread, seasonal fruit and two hot drinks of your choice.',
      
      // Coffee
      'menu.espresso': 'Expresso',
      'menu.espresso.desc': '',
      'menu.americano': 'Americano',
      'menu.americano.desc': '',
      'menu.conleche': 'With milk',
      'menu.conleche.desc': '',
      'menu.latte': 'Latte',
      'menu.latte.desc': '',
      'menu.irishcoffee': 'Irish coffee',
      'menu.irishcoffee.desc': '',
      'menu.baileys': 'Baileys special',
      'menu.baileys.desc': '',
      'menu.matcha': 'Matcha latte',
      'menu.matcha.desc': '',
      'menu.pinklatte': 'Pink latte',
      'menu.pinklatte.desc': '',
      'menu.goldenlatte': 'Golden latte',
      'menu.goldenlatte.desc': '',
      'menu.chailatte': 'Chai latte',
      'menu.chailatte.desc': '',
      'menu.infusionnormal': 'Normal infusion',
      'menu.infusionnormal.desc': '',
      'menu.infusionpremium': 'Premium infusion',
      'menu.infusionpremium.desc': '',
      
      // Tapas
      'menu.tapa5': 'Truffle Fries',
      'menu.tapa5.desc': 'Crispy golden fries drizzled with truffle cream cheese, freshly grated Parmesan, and a sprinkle of parsley.',
      'menu.tapa6': 'Croquettes of the Day',
      'menu.tapa6.desc': 'Four Handcrafted croquettes, velvety inside with a perfectly golden crust, prepared daily according to our chef\'s inspiration.',
      'menu.tapa7': 'Soluna Ibérica',
      'menu.tapa7.desc': 'An exquisite platter of Iberian cured meats, fine cheeses, and artisanal crackers – perfect for sharing.',
      'menu.tapa8': 'House-Cured Cheese',
      'menu.tapa8.desc': 'Cured cheese paired with roasted peppers and tangy pickled onions – a perfect balance of bold flavors.',
      'menu.tapa9': 'Land of Grace Platter',
      'menu.tapa9.desc': 'A curated selection of savory empanadas and golden tequeños, each bite bursting with Venezuelan flavors.',
      'menu.tapa10': 'Green Plate',
      'menu.tapa10.desc': 'Creamy hummus served with fresh cucumber salad and plump olives, a healthy bite full of flavor.',
      
      // Drinks
      'menu.drink1': 'Soft drinks',
      'menu.drink1.desc': 'Cocacola, cocacola zero, fanta limon, fanta naranja',
      'menu.drink2': '7up',
      'menu.drink2.desc': '',
      'menu.drink3': 'Fevertree Tonic',
      'menu.drink3.desc': '',
      'menu.drink4': 'Fevertree',
      'menu.drink4.desc': '',
      'menu.drink5': 'Acuarius',
      'menu.drink5.desc': '(peach red, Lemon or Orange)',
      'menu.drink6': 'Fuze tea',
      'menu.drink6.desc': '',
      'menu.drink7': 'Fizzy Water',
      'menu.drink7.desc': '',
      'menu.drink8': 'Water 1 Liter',
      'menu.drink8.desc': '',
      
      // Beer
      'menu.beer1': 'Guinness',
      'menu.beer1.desc': '1/2 - 2.60€ | Pinta - 5.00€',
      'menu.beer2': 'Strongbow',
      'menu.beer2.desc': '1/2 - 2.20€ | Pinta - 4.00€',
      'menu.beer3': 'Amstel',
      'menu.beer3.desc': '1/2 - 1.90€ | Pinta - 3.80€',
      'menu.beer4': 'Birra Moretti',
      'menu.beer4.desc': '1/2 - 2.60€ | Pinta - 4.00€',
      'menu.beer5': 'Radler',
      'menu.beer5.desc': '1/2 - 1.80€ | Pinta - 3.50€',
      'menu.beer6': 'Ladron Verano',
      'menu.beer6.desc': '1/2 - 1.60€ | Pinta - 3.50€',
      'menu.beer7': '1870',
      'menu.beer7.desc': '2.80€',
      'menu.beer8': 'Ladron manzana',
      'menu.beer8.desc': '2.80€',
      'menu.beer9': 'Heineken',
      'menu.beer9.desc': '2.00€',
      'menu.beer10': 'San Miguel',
      'menu.beer10.desc': '3.60€',
      'menu.beer11': 'Tostada 00',
      'menu.beer11.desc': '3.00€',
      'menu.beer12': 'S.M. Sin gluten',
      'menu.beer12.desc': '3.60€',
      'menu.beer13': 'Corona',
      'menu.beer13.desc': '3.20€',
      
      // Wine
      'menu.vino1': 'House Wine (Red, White or rosé)',
      'menu.vino1.desc': 'Glass: 3.60€ | Bottle: 14€',
      'menu.vino2': 'Red Villa Paceta',
      'menu.vino2.desc': 'Glass: 4.60€ | Bottle: 17€',
      'menu.vino3': 'Red Legaris',
      'menu.vino3.desc': 'Bottle: 25€',
      'menu.vino4': 'White La Charla',
      'menu.vino4.desc': 'Glass: 4.80€ | Bottle: 18€',
      'menu.vino5': 'White Pomal',
      'menu.vino5.desc': 'Bottle: 20€',
      'menu.vino6': 'Anna Rosé',
      'menu.vino6.desc': 'Glass: 4.50€ | Bottle: 17€',
      'menu.vino7': 'Abadía Poblet Rosé',
      'menu.vino7.desc': 'Bottle: 26€',
      'menu.vino8': 'Cava Brut',
      'menu.vino8.desc': '6.50€',
      'menu.vino9': 'Rosé Cava',
      'menu.vino9.desc': '30€',
      
      // Cocktails
      'menu.cocktail1': 'Pornstar Martini',
      'menu.cocktail1.desc': 'A vibrant and indulgent cocktail with vanilla vodka, passion fruit and a side of prosecco, fruity, smooth and playful.',
      'menu.cocktail2': 'Cosmopolitan',
      'menu.cocktail2.desc': 'A refreshing mix of vodka, triple sec, cranberry and fresh lime, crisp, elegant and full of flavour.',
      'menu.cocktail3': 'Classic Martini',
      'menu.cocktail3.desc': 'Clean and sophisticated, made with premium gin or vodka and dry vermouth, smooth, sharp and iconic.',
      'menu.cocktail4': 'Mojito',
      'menu.cocktail4.desc': 'A refreshing Cuban classic with white rum, fresh lime, mint, sugar and soda, light, cool and perfectly balanced.',
      'menu.cocktail5': 'Old Fashioned',
      'menu.cocktail5.desc': 'A timeless classic made with bourbon, sugar and aromatic bitters, gently stirred and finished with orange peel, rich, smooth and refined.',
      'menu.cocktail6': 'Cuba Libre',
      'menu.cocktail6.desc': 'A refreshing mix of Venezuelan rum, cola and fresh lime, simple, smooth and perfectly balanced.',
      'menu.cocktail7': 'House Gin',
      'menu.cocktail7.desc': '',
      'menu.cocktail8': 'Vodka Mix',
      'menu.cocktail8.desc': '',
      'menu.cocktail9': 'Vermouth',
      'menu.cocktail9.desc': '',
      
      // Dessert
      'menu.dessert1': 'Passion Fruit Pie',
      'menu.dessert1.desc': 'A smooth and refreshing passion fruit pie with a perfect balance of sweetness and acidity.',
      'menu.dessert2': 'Midnight Lava Cake',
      'menu.dessert2.desc': 'Warm chocolate lava cake with a rich molten centre, served with a scoop of vanilla ice cream.',
      'menu.dessert3': 'Sweet Soluna Waffles',
      'menu.dessert3.desc': 'Fluffy waffles topped with melted chocolate and fresh strawberries, served with a scoop of ice cream and extra chocolate.',
      'menu.dessert4': 'Cake of the Week',
      'menu.dessert4.desc': 'Our weekly homemade cake, freshly prepared and changing regularly — ask our staff for today\'s flavour.',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.info.title': 'Contact Information',
      'contact.address': 'Address',
      'contact.address.value': 'Plaza Luis Fontes Pagan 12, Corvera, Murcia 30153',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.hours': 'Hours',
      'contact.hours.weekdays': 'Monday - Friday: 7:00 AM - 9:00 PM',
      'contact.hours.weekends': 'Saturday - Sunday: 8:00 AM - 10:00 PM',
      'contact.visit.title': 'Visit Us',
      'contact.visit.text1': 'We are located in the heart of the city, offering a perfect atmosphere to work, study, or simply relax.',
      'contact.visit.text2': 'We look forward to sharing an excellent experience with you!',
      
      // Footer
      'footer.tagline': 'A cozy place where every cup tells a story.',
      'footer.quickLinks': 'Quick Links',
      'footer.follow': 'Follow Us',
      'footer.rights': 'All rights reserved.',
      'footer.backToTop': 'Back to Top ↑',
      'footer.backToTopAria': 'Back to Top',
    },
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
