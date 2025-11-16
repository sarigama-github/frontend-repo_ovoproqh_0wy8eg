import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Impact from './components/Impact'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
