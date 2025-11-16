import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-violet-50">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />

        <footer className="py-12 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Lumina Dental. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
