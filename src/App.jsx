import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="site site-black">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App