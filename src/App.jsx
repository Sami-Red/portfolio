
import { Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import Projects from './components/Projects'

import ProjectPage from './components/projects/ProjectPage'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/portfolio" element={<ProjectPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App