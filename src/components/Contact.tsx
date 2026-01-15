import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#955A21' }}>
            {t('contact.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#955A21' }}>
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-4 mt-1 flex-shrink-0"
                    style={{ color: '#955A21' }}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.address')}</p>
                    <p className="text-gray-600">{t('contact.address.value')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-4 mt-1 flex-shrink-0"
                    style={{ color: '#955A21' }}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.phone')}</p>
                    <a
                      href="tel:+1234567890"
                      className="focus:outline-none focus:ring-2 focus:ring-brown-600 rounded"
                      style={{ color: '#955A21' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#7a4819'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#955A21'}
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-4 mt-1 flex-shrink-0"
                    style={{ color: '#955A21' }}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.email')}</p>
                    <a
                      href="mailto:info@solunacafebar.com"
                      className="focus:outline-none focus:ring-2 focus:ring-brown-600 rounded"
                      style={{ color: '#955A21' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#7a4819'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#955A21'}
                    >
                      info@solunacafebar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-4 mt-1 flex-shrink-0"
                    style={{ color: '#955A21' }}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.hours')}</p>
                    <p className="text-gray-600">{t('contact.hours.weekdays')}</p>
                    <p className="text-gray-600">{t('contact.hours.weekends')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-8" style={{ backgroundColor: '#F9F4EE' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#955A21' }}>
                {t('contact.visit.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('contact.visit.text1')}
              </p>
              <p className="text-gray-700">
                {t('contact.visit.text2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
