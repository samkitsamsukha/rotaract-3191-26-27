import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

function Footer() {
  const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/rotaract3191",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
  },
];

  return (
    <footer className="mx-4 mb-4 mt-16 sm:mx-6 lg:mx-8">
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]">

        {/* Top telemetry strip */}
        <div className="h-1 bg-gradient-to-r from-[#d41367] via-pink-300 to-slate-900" />

        <div className="flex flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#d41367]" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#d41367]">
                DISTRICT ONLINE
              </span>
            </div>

            <div className="hidden h-5 w-px bg-slate-200 md:block" />

            <div>
              <h3 className="text-sm font-black tracking-tight text-slate-900">
                ROTARACT DISTRICT 3191
              </h3>

              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Connect • Partner • Grow
              </p>
            </div>
          </div>

          {/* Center */}
          <div className="hidden xl:flex items-center gap-2">
            {[
              "BANGALORE",
              "RAMANAGARA",
              "KOLAR",
              "CHITTOOR",
            ].map((region) => (
              <div
                key={region}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-slate-600"
              >
                {region}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="
                  group
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  border border-slate-200
                  bg-slate-50
                  text-slate-600
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#d41367]
                  hover:bg-[#d41367]
                  hover:text-white
                "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-2">
          <div className="flex flex-col gap-2 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

            <p className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
              Flight Deck v2026 • Rotaract District 3191
            </p>

            <p className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
              © {new Date().getFullYear()} All Rights Reserved
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;