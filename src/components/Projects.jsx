import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-8 flex items-center gap-3">
          <span className="inline-flex h-1.5 w-12 rounded-full bg-cyan-400" />
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <ProjectCard key={p.title} project={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
