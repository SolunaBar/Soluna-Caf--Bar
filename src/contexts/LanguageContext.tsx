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
      'menu.category.cockteles': 'Cócteles',
      'menu.category.postre': 'Postre',
      
      // Desayunos
      'menu.breakfast1': 'Tostadas con Tomate y Aceite',
      'menu.breakfast1.desc': 'Pan tostado con tomate natural y aceite de oliva',
      'menu.breakfast2': 'Desayuno Completo',
      'menu.breakfast2.desc': 'Huevos, bacon, salchichas, tostadas y café',
      'menu.breakfast3': 'Croissant y Café',
      'menu.breakfast3.desc': 'Croissant recién horneado con mermelada y café',
      'menu.breakfast4': 'Tostada con Jamón y Queso',
      'menu.breakfast4.desc': 'Pan tostado con jamón serrano y queso manchego',
      
      // Brunch
      'menu.brunch1': 'Brunch Mediterráneo',
      'menu.brunch1.desc': 'Huevos, aguacate, tomate, jamón y pan tostado',
      'menu.brunch2': 'Brunch Salmón',
      'menu.brunch2.desc': 'Huevos benedictinos, salmón ahumado y hollandaise',
      'menu.brunch3': 'Brunch Vegetal',
      'menu.brunch3.desc': 'Aguacate, quinoa, vegetales frescos y huevo poché',
      'menu.brunch4': 'Brunch Soluna',
      'menu.brunch4.desc': 'Plato completo con huevos, bacon, aguacate y acompañamientos',
      
      // Café
      'menu.espresso': 'Espresso',
      'menu.espresso.desc': 'Café concentrado y aromático',
      'menu.cappuccino': 'Cappuccino',
      'menu.cappuccino.desc': 'Espresso con leche vaporizada y espuma',
      'menu.latte': 'Latte',
      'menu.latte.desc': 'Espresso suave con leche cremosa',
      'menu.americano': 'Americano',
      'menu.americano.desc': 'Espresso diluido con agua caliente',
      'menu.mocha': 'Mocha',
      'menu.mocha.desc': 'Café con chocolate y leche',
      'menu.filter': 'Café de Filtro',
      'menu.filter.desc': 'Café de origen seleccionado',
      
      // Tapas
      'menu.tapa1': 'Jamón Ibérico',
      'menu.tapa1.desc': 'Jamón ibérico de bellota cortado a mano',
      'menu.tapa2': 'Queso Manchego',
      'menu.tapa2.desc': 'Queso manchego curado con miel',
      'menu.tapa3': 'Croquetas Caseras',
      'menu.tapa3.desc': 'Croquetas de jamón serrano y bechamel',
      'menu.tapa4': 'Patatas Bravas',
      'menu.tapa4.desc': 'Patatas fritas con salsa brava y alioli',
      
      // Bebidas
      'menu.drink1': 'Zumo de Naranja Natural',
      'menu.drink1.desc': 'Zumo recién exprimido de naranjas',
      'menu.drink2': 'Refrescos',
      'menu.drink2.desc': 'Coca-Cola, Fanta, Sprite, Aquarius',
      'menu.drink3': 'Agua Mineral',
      'menu.drink3.desc': 'Agua mineral con y sin gas',
      'menu.drink4': 'Zumo de Frutas',
      'menu.drink4.desc': 'Zumo natural de frutas variadas',
      
      // Cervezas
      'menu.beer1': 'Cerveza Nacional',
      'menu.beer1.desc': 'Cerveza de barril local',
      'menu.beer2': 'Cerveza Artesanal',
      'menu.beer2.desc': 'Cerveza artesanal de la región',
      'menu.beer3': 'Cerveza Importada',
      'menu.beer3.desc': 'Cerveza importada de selección',
      'menu.beer4': 'Cerveza Sin Alcohol',
      'menu.beer4.desc': 'Cerveza sin alcohol',
      
      // Cócteles
      'menu.cocktail1': 'Mojito',
      'menu.cocktail1.desc': 'Ron, menta, lima, azúcar y soda',
      'menu.cocktail2': 'Piña Colada',
      'menu.cocktail2.desc': 'Ron, piña, coco y crema de coco',
      'menu.cocktail3': 'Caipirinha',
      'menu.cocktail3.desc': 'Cachaça, lima y azúcar',
      'menu.cocktail4': 'Gin Tonic',
      'menu.cocktail4.desc': 'Gin premium, tónica y cítricos',
      
      // Postre
      'menu.dessert1': 'Tarta de Queso',
      'menu.dessert1.desc': 'Tarta de queso casera con mermelada',
      'menu.dessert2': 'Brownie con Helado',
      'menu.dessert2.desc': 'Brownie de chocolate con helado de vainilla',
      'menu.dessert3': 'Tarta de Manzana',
      'menu.dessert3.desc': 'Tarta de manzana casera con canela',
      'menu.dessert4': 'Flan de la Casa',
      'menu.dessert4.desc': 'Flan casero con caramelo',
      
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
      'menu.category.cockteles': 'Cocktails',
      'menu.category.postre': 'Dessert',
      
      // Breakfast
      'menu.breakfast1': 'Toast with Tomato and Oil',
      'menu.breakfast1.desc': 'Toasted bread with fresh tomato and olive oil',
      'menu.breakfast2': 'Full Breakfast',
      'menu.breakfast2.desc': 'Eggs, bacon, sausages, toast, and coffee',
      'menu.breakfast3': 'Croissant and Coffee',
      'menu.breakfast3.desc': 'Freshly baked croissant with jam and coffee',
      'menu.breakfast4': 'Toast with Ham and Cheese',
      'menu.breakfast4.desc': 'Toasted bread with serrano ham and manchego cheese',
      
      // Brunch
      'menu.brunch1': 'Mediterranean Brunch',
      'menu.brunch1.desc': 'Eggs, avocado, tomato, ham, and toast',
      'menu.brunch2': 'Salmon Brunch',
      'menu.brunch2.desc': 'Eggs benedict, smoked salmon, and hollandaise',
      'menu.brunch3': 'Vegetable Brunch',
      'menu.brunch3.desc': 'Avocado, quinoa, fresh vegetables, and poached egg',
      'menu.brunch4': 'Soluna Brunch',
      'menu.brunch4.desc': 'Complete plate with eggs, bacon, avocado, and sides',
      
      // Coffee
      'menu.espresso': 'Espresso',
      'menu.espresso.desc': 'Concentrated and aromatic coffee',
      'menu.cappuccino': 'Cappuccino',
      'menu.cappuccino.desc': 'Espresso with steamed milk and foam',
      'menu.latte': 'Latte',
      'menu.latte.desc': 'Smooth espresso with creamy milk',
      'menu.americano': 'Americano',
      'menu.americano.desc': 'Espresso diluted with hot water',
      'menu.mocha': 'Mocha',
      'menu.mocha.desc': 'Coffee with chocolate and milk',
      'menu.filter': 'Filter Coffee',
      'menu.filter.desc': 'Selected origin coffee',
      
      // Tapas
      'menu.tapa1': 'Iberian Ham',
      'menu.tapa1.desc': 'Acorn-fed Iberian ham hand-sliced',
      'menu.tapa2': 'Manchego Cheese',
      'menu.tapa2.desc': 'Cured manchego cheese with honey',
      'menu.tapa3': 'Homemade Croquettes',
      'menu.tapa3.desc': 'Serrano ham croquettes with bechamel',
      'menu.tapa4': 'Patatas Bravas',
      'menu.tapa4.desc': 'Fried potatoes with brava sauce and alioli',
      
      // Drinks
      'menu.drink1': 'Fresh Orange Juice',
      'menu.drink1.desc': 'Freshly squeezed orange juice',
      'menu.drink2': 'Soft Drinks',
      'menu.drink2.desc': 'Coca-Cola, Fanta, Sprite, Aquarius',
      'menu.drink3': 'Mineral Water',
      'menu.drink3.desc': 'Mineral water with and without gas',
      'menu.drink4': 'Fruit Juice',
      'menu.drink4.desc': 'Natural fruit juice',
      
      // Beer
      'menu.beer1': 'National Beer',
      'menu.beer1.desc': 'Local draft beer',
      'menu.beer2': 'Craft Beer',
      'menu.beer2.desc': 'Artisanal beer from the region',
      'menu.beer3': 'Imported Beer',
      'menu.beer3.desc': 'Imported beer selection',
      'menu.beer4': 'Non-Alcoholic Beer',
      'menu.beer4.desc': 'Non-alcoholic beer',
      
      // Cocktails
      'menu.cocktail1': 'Mojito',
      'menu.cocktail1.desc': 'Rum, mint, lime, sugar, and soda',
      'menu.cocktail2': 'Piña Colada',
      'menu.cocktail2.desc': 'Rum, pineapple, coconut, and coconut cream',
      'menu.cocktail3': 'Caipirinha',
      'menu.cocktail3.desc': 'Cachaça, lime, and sugar',
      'menu.cocktail4': 'Gin Tonic',
      'menu.cocktail4.desc': 'Premium gin, tonic, and citrus',
      
      // Dessert
      'menu.dessert1': 'Cheesecake',
      'menu.dessert1.desc': 'Homemade cheesecake with jam',
      'menu.dessert2': 'Brownie with Ice Cream',
      'menu.dessert2.desc': 'Chocolate brownie with vanilla ice cream',
      'menu.dessert3': 'Apple Pie',
      'menu.dessert3.desc': 'Homemade apple pie with cinnamon',
      'menu.dessert4': 'House Flan',
      'menu.dessert4.desc': 'Homemade flan with caramel',
      
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
