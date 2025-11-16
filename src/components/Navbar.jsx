import { useState } from 'react'
import { Menu, X, HeartHandshake } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Get Involved', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-teal-500 to-emerald-600 grid place-content-center text-white">
              <HeartHandshake size={20} />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">Chaanan Foundation</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center px-4 py-2 rounded-md bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors">
              Donate
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md border border-gray-200 text-gray-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-teal-600 text-white text-sm font-semibold text-center">
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
