export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 bg-slate-900 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_30%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-1.5 w-12 rounded-full bg-cyan-400" />
          <h2 className="text-2xl font-semibold text-white">About</h2>
        </div>
        <div className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-8 shadow-[0_30px_60px_-40px_rgba(14,165,233,0.35)]"> 
          <p className="text-base leading-8 text-slate-300">
            I’m a Software Engineer with experience building backend systems, REST APIs, and full-stack applications. I’ve worked with technologies including Java, Spring Boot, Python,Csharp FastAPI, PostgreSQL, Kafka, React, Next.js, and Docker.

           I enjoy solving real-world problems through software and continuously expanding my technical skills. I’m currently exploring AI automation, AI-powered applications, workflow automation, and AI-assisted development, with a focus on learning how these technologies can be used to build practical and useful solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
