import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Journey from './sections/Journey.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Services from './sections/Services.jsx'
import Certifications from './sections/Certifications.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Services />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
