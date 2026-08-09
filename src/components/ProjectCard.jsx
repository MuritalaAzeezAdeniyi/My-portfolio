export default function ProjectCard({ project }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-cyan-500/20">
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
