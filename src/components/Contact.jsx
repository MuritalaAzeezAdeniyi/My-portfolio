export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="reveal mb-8 flex items-center justify-center gap-3">
          <span className="inline-flex h-1.5 w-12 rounded-full bg-cyan-400" />
          <h2 className="text-2xl font-semibold">Contact</h2>
        </div>
        <p className="reveal text-lg text-slate-300">Let's build something meaningful.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a href="mailto:azeezmuritalaadeniyi@gmail.com" className="reveal interactive-card rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
            Email: [azeezmuritalaadeniyi@gmail.com]
          </a>
          <a href="https://github.com/MuritalaAzeezAdeniyi" target="_blank" rel="noopener noreferrer" className="reveal interactive-card rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muritala-azeez-a4a476302/" target="_blank" rel="noopener noreferrer" className="reveal interactive-card rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
