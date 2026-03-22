import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LangProvider } from './i18n/LangContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import ContactPage from './pages/ContactPage/ContactPage'
import Cursor from './components/Cursor/Cursor'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppContent() {
  return (
    <div className="noise-overlay">
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/studio"  element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </BrowserRouter>
  )
}
