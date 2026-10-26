import { useRef } from 'react'

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    cardRef.current?.style.setProperty('--tilt-x', `${y * -6}deg`)
    cardRef.current?.style.setProperty('--tilt-y', `${x * 8}deg`)
  }

  function resetTilt() {
    cardRef.current?.style.setProperty('--tilt-x', '0deg')
    cardRef.current?.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div ref={cardRef} onPointerMove={handlePointerMove} onPointerLeave={resetTilt} className="reveal interactive-card flex h-full flex-col justify-between rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/30 transition hover:shadow-cyan-500/20" style={{ '--reveal-delay': `${index * 100}ms` }}>
      <div>
        <div className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Project
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.technologies.map((t) => (
            <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white">
          View on GitHub
        </a>
      </div>
    </div>
  )
}
