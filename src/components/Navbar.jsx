import { useState } from 'react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
//   { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-950/95 backdrop-blur-xl text-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold text-white">Muritala Azeez</div>
        <nav className="hidden md:flex gap-8 text-slate-300">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="transition hover:text-white">
              {l.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-md"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="block py-2">
                {l.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
