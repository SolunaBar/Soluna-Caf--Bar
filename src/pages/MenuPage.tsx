import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const MenuPage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const scrollToSection = () => {
        const element = document.getElementById(location.hash.substring(1))
        if (element) {
          const headerOffset = 170
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }

      const timeout1 = setTimeout(scrollToSection, 100)
      const timeout2 = setTimeout(scrollToSection, 300)
      const timeout3 = setTimeout(scrollToSection, 500)

      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
        clearTimeout(timeout3)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

export default MenuPage
