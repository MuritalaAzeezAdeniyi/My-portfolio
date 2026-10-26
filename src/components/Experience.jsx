import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-1.5 w-12 rounded-full bg-cyan-500" />
          <h2 className="text-2xl font-semibold text-white">Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.company} className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-white">{e.company}</div>
                  <div className="text-sm text-slate-300">{e.role}</div>
                </div>
                <div className="text-sm text-slate-400">{e.period || 'Update dates here'}</div>
              </div>
              <p className="mt-4 text-slate-300">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
