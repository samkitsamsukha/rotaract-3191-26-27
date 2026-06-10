import { socialLinks } from '../data/siteContent.js'

function Footer() {
  return (
    <footer className="mx-4 mb-4 rounded-[1.75rem] border border-white/30 bg-white/15 px-4 py-5 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:mx-6 lg:mx-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black tracking-tight text-slate-900">Rotaract District 3191</p>
          <p className="mt-1 text-sm text-slate-700">
            Connecting clubs, projects, and leaders across the district.
          </p>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Social links">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 transition hover:bg-white/35 hover:text-slate-900"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
