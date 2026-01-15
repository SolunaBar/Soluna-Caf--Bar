import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Esperar a que el DOM se renderice completamente
      const scrollToSection = () => {
        const element = document.getElementById(location.hash.substring(1))
        if (element) {
          // Scroll con offset para el header fijo
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }

      // Intentar múltiples veces para asegurar que el elemento esté disponible
      const timeout1 = setTimeout(scrollToSection, 100)
      const timeout2 = setTimeout(scrollToSection, 300)
      const timeout3 = setTimeout(scrollToSection, 500)

      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
        clearTimeout(timeout3)
      }
    } else {
      // Si no hay hash, scroll al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
