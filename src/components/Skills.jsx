const groups = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST APIs'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { title: 'Distributed Systems & Messaging', items: ['Apache Kafka', 'Microservices'] },
  { title: 'Frontend', items: ['JavaScript', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Maven', 'Gradle'] },
//   { title: 'Currently Exploring', items: ['AI Automation', 'n8n', 'AI/LLM integrations', 'AI-assisted development'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-8 flex items-center gap-3">
          <span className="inline-flex h-1.5 w-12 rounded-full bg-cyan-400" />
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((g, index) => (
            <div key={g.title} className="reveal interactive-card rounded-3xl border border-slate-700 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20" style={{ '--reveal-delay': `${index * 90}ms` }}>
              <h3 className="font-semibold text-slate-100">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {g.items.map((it) => (
                  <li key={it} className="text-sm rounded-full bg-slate-800 px-3 py-2 text-slate-200">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
