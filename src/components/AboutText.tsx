import { useLanguage } from '../contexts/LanguageContext'

const AboutText = () => {
  const { t } = useLanguage()

  return (
    <section className="py-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="sobre-nosotros" className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#955A21' }}>
            {t('about.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                {t('about.paragraph3')}
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8" style={{ backgroundColor: '#F9F4EE' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#955A21' }}>
                  {t('about.specialty.title')}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('about.specialty.text1')}
                </p>
                <p className="text-gray-700">
                  {t('about.specialty.text2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutText
