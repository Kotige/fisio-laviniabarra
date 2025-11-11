import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar/index'
import Footer from './components/Footer/index'
import Home from './pages/Home/index'
import About from './pages/About/index'

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
