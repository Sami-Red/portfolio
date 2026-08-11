import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'

function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <FeaturedProjects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
  
}

export default App
