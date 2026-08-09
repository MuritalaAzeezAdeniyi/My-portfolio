export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-base font-semibold text-white">Muritala Azeez</div>
          <div className="mt-1 text-sm text-slate-400">Software Engineer</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="https://github.com/MuritalaAzeezAdeniyi" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muritala-azeez-a4a476302/" className="transition hover:text-white">
            LinkedIn
          </a>
          <span className="text-slate-500">© 2026</span>
        </div>
      </div>
    </footer>
  )
}
