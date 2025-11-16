import { useState } from 'react'
import { Menu, X, Tooth } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/60 border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-sm">
                <Tooth size={20} />
              </div>
              <span className="font-semibold text-gray-900 tracking-tight">Lumina Dental</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                Book Appointment
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md bg-white/70 border border-white/50 shadow-sm">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/40">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-white/60 text-gray-700">
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-center">
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
