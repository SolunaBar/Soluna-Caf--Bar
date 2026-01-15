import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleLanguage()
    }
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      onKeyDown={handleKeyDown}
      className="px-3 py-2 rounded-md hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-brown-600 transition-colors flex items-center gap-1"
      style={{ color: '#955A21' }}
      aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
      title={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <span className="text-lg" aria-hidden="true">
        {language === 'es' ? '🇪🇸' : '🇬🇧'}
      </span>
      <span className="font-semibold">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  )
}

export default LanguageToggle
