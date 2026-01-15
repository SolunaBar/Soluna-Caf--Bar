import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
