import { useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    heroRef.current?.style.setProperty('--pointer-x', `${x * 18}px`)
    heroRef.current?.style.setProperty('--pointer-y', `${y * 18}px`)
  }

  function resetPointer() {
    heroRef.current?.style.setProperty('--pointer-x', '0px')
    heroRef.current?.style.setProperty('--pointer-y', '0px')
  }

  return (
    <section ref={heroRef} id="home" onPointerMove={handlePointerMove} onPointerLeave={resetPointer} className="hero-section relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="hero-reveal text-sm uppercase tracking-[0.35em] text-cyan-300/80">Software Engineer</p>
        <h1 className="hero-reveal mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">Muritala Azeez</h1>
        <p className="hero-reveal mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300">
          Software Engineer with experience building backend systems,Responsive UI, APIs, microservices, and database-driven applications. I enjoy solving real-world problems with modern software technologies and I'm currently expanding my skills into AI-powered development and workflow automation.
        </p>

        <div className="hero-reveal mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="button-lift inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
            View Projects
          </a>
          <a href="https://github.com/MuritalaAzeezAdeniyi" target="_blank" rel="noopener noreferrer" className="button-lift inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
