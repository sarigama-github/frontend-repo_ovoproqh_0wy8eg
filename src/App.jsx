import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Causes from './components/Causes'
import ProgramDetails from './components/ProgramDetails'
import Impact from './components/Impact'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Causes />
        <ProgramDetails />
        <Impact />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
