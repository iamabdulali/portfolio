import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/TechStack'

const App = () => {
  return (
    <div>
      <LandingPage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App