import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────────
   INJECTED CSS
───────────────────────────────────────────────────────────── */
const HOME_CSS = `
  /* Slider */
  @keyframes sliderFadeIn { from{opacity:0;transform:scale(1.03);} to{opacity:1;transform:scale(1);} }
  @keyframes roundelSpin  { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  @keyframes trailDraw    { from{stroke-dashoffset:600;opacity:0;} 10%{opacity:.65;} to{stroke-dashoffset:0;opacity:.28;} }

  /* HUD reticle */
  @keyframes reticleCW  { from{transform:rotate(0deg);}  to{transform:rotate(360deg);}  }
  @keyframes reticleCCW { from{transform:rotate(0deg);}  to{transform:rotate(-360deg);} }
  @keyframes reticlePing{ 0%{transform:scale(.9);opacity:1;} 100%{transform:scale(2.1);opacity:0;} }

  .home-trail-1 { stroke-dasharray:600; animation:trailDraw 2.8s ease-out forwards; }
  .home-trail-2 { stroke-dasharray:600; animation:trailDraw 2.8s ease-out .5s forwards; opacity:0; }
  .home-trail-3 { stroke-dasharray:600; animation:trailDraw 2.8s ease-out .9s forwards; opacity:0; }

  /* Side jets */
  @keyframes sideJetFlyUp {
    0%   { transform:translateY(110vh); opacity:0; }
    4%   { opacity:1; }
    88%  { opacity:1; }
    100% { transform:translateY(-25vh); opacity:0; }
  }
  @keyframes afterburnPulse {
    0%,100% { transform:scaleY(1) scaleX(1); opacity:.65; }
    50%      { transform:scaleY(1.6) scaleX(.85); opacity:1; }
  }
  .sj-a { animation: sideJetFlyUp 7s cubic-bezier(.25,.1,.35,1) 0s   infinite; }
  .sj-b { animation: sideJetFlyUp 7s cubic-bezier(.25,.1,.35,1) 3.5s infinite; }
  .sj-c { animation: sideJetFlyUp 8s cubic-bezier(.25,.1,.35,1) 1.2s infinite; }
  .sj-d { animation: sideJetFlyUp 8s cubic-bezier(.25,.1,.35,1) 5s   infinite; }
  .ab   { animation: afterburnPulse .14s ease-in-out infinite; transform-origin: top center; }

  /* Glass cards */
  .glass-card {
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border: 1px solid rgba(255,255,255,0.28);
  }

  /* Card hovers */
  .ql-card { transition:transform .26s ease,box-shadow .26s ease,border-color .26s ease; }
  .ql-card:hover { transform:translateY(-5px); border-color:rgba(255,107,26,.6)!important; box-shadow:0 0 28px rgba(255,107,26,.18),0 14px 32px rgba(0,0,0,.25)!important; }
  .ev-card { transition:transform .24s ease,box-shadow .24s ease; }
  .ev-card:hover { transform:translateY(-4px); box-shadow:0 0 22px rgba(212,19,103,.2),0 14px 28px rgba(0,0,0,.25)!important; }
  .tm-card { transition:transform .26s ease,box-shadow .26s ease; }
  .tm-card:hover { transform:translateY(-5px); box-shadow:0 0 26px rgba(255,107,26,.18),0 16px 32px rgba(0,0,0,.3)!important; }
  .sponsor-logo { transition:opacity .22s,transform .22s; opacity:.8; }
  .sponsor-logo:hover { opacity:1; transform:scale(1.06); }

  /* CTA buttons */
  .btn-p { transition:background .22s,box-shadow .22s,transform .22s; }
  .btn-p:hover { background:#ff8c40!important; box-shadow:0 0 28px rgba(255,107,26,.6)!important; transform:translateY(-2px); }
  .btn-s { transition:background .22s,border-color .22s,color .22s,transform .22s; }
  .btn-s:hover { background:rgba(255,255,255,.25)!important; border-color:rgba(255,255,255,.7)!important; transform:translateY(-2px); }

  .team-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:16px; width:100%; max-width:1000px; margin:0 auto; }
  .tm-card { flex: 0 0 calc(50% - 8px); max-width: 210px; }
  @media (min-width: 768px) { .team-grid { gap:20px; } .tm-card { flex: 0 0 calc(25% - 15px); } }

  /* Slider dots */
  .slider-dot { transition:width .32s ease,background .32s ease; }
  .slider-dot.active { width:24px!important; background:#ff6b1a!important; }

  /* Show side jets on all devices */
  .side-jets { display:block; }
`

/* ─────────────────────────────────────────────────────────────
   FIGHTER JET SVG (top-down, nose pointing UP)
───────────────────────────────────────────────────────────── */
function Jet({ id, flipped = false }) {
  const gId = `jg-${id}`
  const cId = `jc-${id}`
  const fId = `jf-${id}`
  const bId = `jb-${id}`
  return (
    <svg viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', transform: flipped ? 'scaleX(-1)' : 'none', filter: 'drop-shadow(0 0 6px rgba(255,107,26,.5))' }}>
      <defs>
        <radialGradient id={gId} cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="22%" stopColor="#ffcc44" stopOpacity=".95" />
          <stop offset="55%" stopColor="#ff4400" stopOpacity=".5" />
          <stop offset="100%" stopColor="#ff2200" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={fId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a5060" />
          <stop offset="48%" stopColor="#9fb8cc" />
          <stop offset="100%" stopColor="#3a5060" />
        </linearGradient>
        <radialGradient id={cId} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#c0f8ff" stopOpacity=".95" />
          <stop offset="100%" stopColor="#00c8ff" stopOpacity=".5" />
        </radialGradient>
        <filter id={bId}><feGaussianBlur stdDeviation="4" /></filter>
      </defs>

      {/* Afterburner halo */}
      <ellipse cx="50" cy="204" rx="16" ry="38" fill={`url(#${gId})`} filter={`url(#${bId})`} opacity=".7" />

      {/* Fuselage */}
      <path d="M50 7 C53 24 55 55 54 116 L50 198 L46 116 C45 55 47 24 50 7Z" fill={`url(#${fId})`} />

      {/* Left delta wing */}
      <path d="M46 68 L3 150 L9 158 L44 122 Z" fill="#7a9aaa" opacity=".88" />
      {/* Right delta wing */}
      <path d="M54 68 L97 150 L91 158 L56 122 Z" fill="#7a9aaa" opacity=".88" />

      {/* Left canard */}
      <path d="M47 43 L22 67 L24 73 L46 57 Z" fill="#7a9aaa" opacity=".92" />
      {/* Right canard */}
      <path d="M53 43 L78 67 L76 73 L54 57 Z" fill="#7a9aaa" opacity=".92" />

      {/* Left tail */}
      <path d="M47 154 L36 187 L41 185 L48 162 Z" fill="#7a9aaa" opacity=".9" />
      {/* Right tail */}
      <path d="M53 154 L64 187 L59 185 L52 162 Z" fill="#7a9aaa" opacity=".9" />

      {/* Cockpit */}
      <ellipse cx="50" cy="27" rx="4.5" ry="10" fill={`url(#${cId})`} />
      <ellipse cx="50" cy="25" rx="2" ry="5" fill="#d8f8ff" opacity=".65" />

      {/* IAF stripe on wing */}
      <line x1="12" y1="128" x2="36" y2="118" stroke="#FF9933" strokeWidth="2" opacity=".7" />
      <line x1="10" y1="135" x2="34" y2="125" stroke="#ffffff" strokeWidth="1" opacity=".5" />

      {/* Missiles */}
      <rect x="6" y="132" width="6" height="22" rx="3" fill="#ff6b1a" opacity=".9" />
      <rect x="88" y="132" width="6" height="22" rx="3" fill="#ff6b1a" opacity=".9" />
      <polygon points="9,132 6,122 12,122" fill="#ffcc44" opacity=".85" />
      <polygon points="91,132 88,122 94,122" fill="#ffcc44" opacity=".85" />

      {/* Afterburner flame */}
      <ellipse cx="50" cy="200" rx="10" ry="28" fill={`url(#${gId})`} />
      <ellipse cx="50" cy="197" rx="5" ry="13" fill="#fffde8" opacity=".8" />
      <ellipse cx="50" cy="195" rx="2" ry="6" fill="#fff" opacity=".95" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   SIDE JETS (fixed, both edges of viewport)
───────────────────────────────────────────────────────────── */
function SideJets() {
  const Trail = ({ w = 3, h = 55, delay = 0 }) => (
    <div className="ab" style={{
      position: 'absolute', bottom: -h * .6, left: '50%', transform: 'translateX(-50%)',
      width: w, height: h,
      background: `linear-gradient(to bottom,#fff 0%,#ffcc44 18%,#ff6b1a 45%,#ff2200 75%,transparent 100%)`,
      borderRadius: w / 2, filter: `blur(${w * .9}px)`,
      animationDelay: `${delay}s`,
    }} />
  )

  return (
    <div className="side-jets">
      {/* ── LEFT SIDE ── */}
      <div style={{ position: 'fixed', left: 6, top: 0, bottom: 0, width: 52, zIndex: 5, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Jet A (foreground, larger) */}
        <div className="sj-a" style={{ position: 'absolute', bottom: 0, left: 0, width: 48, height: 118 }}>
          <Jet id="la" />
          <Trail w={4} h={62} delay={0} />
        </div>
        {/* Jet B (behind, smaller, offset) */}
        <div className="sj-b" style={{ position: 'absolute', bottom: 0, left: 6, width: 34, height: 84 }}>
          <Jet id="lb" />
          <Trail w={2.5} h={44} delay={.06} />
        </div>
      </div>

      {/* ── RIGHT SIDE ── */}
      <div style={{ position: 'fixed', right: 6, top: 0, bottom: 0, width: 52, zIndex: 5, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="sj-c" style={{ position: 'absolute', bottom: 0, right: 0, width: 48, height: 118 }}>
          <Jet id="rc" flipped />
          <Trail w={4} h={62} delay={0} />
        </div>
        <div className="sj-d" style={{ position: 'absolute', bottom: 0, right: 6, width: 34, height: 84 }}>
          <Jet id="rd" flipped />
          <Trail w={2.5} h={44} delay={.06} />
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   IAF ROUNDEL
───────────────────────────────────────────────────────────── */
function Roundel({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" fill="#138808" />
      <circle cx="50" cy="50" r="37" fill="#ffffff" />
      <circle cx="50" cy="50" r="25" fill="#FF9933" />
      <circle cx="50" cy="50" r="12" fill="#000080" />
      <circle cx="50" cy="50" r="3.5" fill="#ffffff" opacity=".85" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   HUD RETICLE
───────────────────────────────────────────────────────────── */
function HUDReticle({ size = 210 }) {
  const c = size / 2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={c} cy={c} r={c - 4} stroke="rgba(255,255,255,.25)" strokeWidth="1" strokeDasharray="7 6" />
      <circle cx={c} cy={c} r={c - 16} stroke="rgba(255,107,26,.5)" strokeWidth="1.5" strokeDasharray="36 18"
        style={{ animation: 'reticleCW 7s linear infinite', transformOrigin: `${c}px ${c}px` }} />
      <circle cx={c} cy={c} r={c - 32} stroke="rgba(212,19,103,.5)" strokeWidth="1.5" strokeDasharray="18 10"
        style={{ animation: 'reticleCCW 5s linear infinite', transformOrigin: `${c}px ${c}px` }} />
      <circle cx={c} cy={c} r={c - 50} stroke="rgba(255,255,255,.45)" strokeWidth="1" />
      <line x1={c} y1={6} x2={c} y2={c - 44} stroke="rgba(255,255,255,.38)" strokeWidth="1" />
      <line x1={c} y1={c + 44} x2={c} y2={size - 6} stroke="rgba(255,255,255,.38)" strokeWidth="1" />
      <line x1={6} y1={c} x2={c - 44} y2={c} stroke="rgba(255,255,255,.38)" strokeWidth="1" />
      <line x1={c + 44} y1={c} x2={size - 6} y2={c} stroke="rgba(255,255,255,.38)" strokeWidth="1" />
      {[[32, 32], [size - 32, 32], [32, size - 32], [size - 32, size - 32]].map(([x, y], i) => {
        const dx = x < c ? 12 : -12, dy = y < c ? 12 : -12
        return <g key={i}><line x1={x} y1={y} x2={x + dx} y2={y} stroke="rgba(255,107,26,.7)" strokeWidth="1.8" /><line x1={x} y1={y} x2={x} y2={y + dy} stroke="rgba(255,107,26,.7)" strokeWidth="1.8" /></g>
      })}
      <circle cx={c} cy={c} r={c - 50} stroke="rgba(255,107,26,.5)" strokeWidth="2"
        style={{ animation: 'reticlePing 2.2s ease-out infinite', transformOrigin: `${c}px ${c}px` }} />
      <circle cx={c} cy={c} r={5} fill="rgba(255,107,26,.8)" />
      <circle cx={c} cy={c} r={2} fill="#fff" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const SLIDES = [
  { tag: 'ROTARACT DISTRICT 3191 \u00b7 2026\u201327', title: 'SOAR ABOVE.', titleAccent: 'SERVE BEYOND.', sub: 'Empowering communities through innovative service projects and dynamic youth engagement.' },
  { tag: 'LEADERSHIP \u00b7 SERVICE \u00b7 FELLOWSHIP', title: 'LEAD WITH', titleAccent: 'PURPOSE.', sub: 'Join 50+ clubs and 2,000+ Rotaractors on a mission that creates lasting impact.' },
  { tag: 'DISTRICT EVENTS \u00b7 2026\u201327', title: 'FLY HIGH.', titleAccent: 'GIVE BACK.', sub: 'From the District Learning Assembly to Vaayu \u2014 our flagship events bring the district together.' },
]

const QUICK_LINKS = [
  { icon: '\uD83D\uDE80', title: '3191 Showcase', href: 'https://showcase.rotaract3191.org/', desc: 'Your go-to platform for reporting and displaying your club\u2019s projects. Highlight initiatives, share impact and connect.', tag: 'EXTERNAL', internal: false },
  { icon: '\uD83D\uDCCB', title: 'Forms & Links', href: 'https://go.rotaract3191.org/links', desc: 'Access essential forms and links for seamless club operations \u2014 RIDE applications, event registrations, all in one place.', tag: 'RESOURCES', internal: false },
  { icon: '\uD83C\uDFA8', title: 'Brand Center', href: '/brand-center', desc: 'Resources and guidelines to maintain consistent branding across all platforms for a unified and professional image.', tag: 'INTERNAL', internal: true },
]

const EVENTS = [
  { name: 'District Learning Assembly', slug: 'district-learning-assembly', abbr: 'DLA', icon: '\uD83D\uDCDA', desc: 'The flagship learning event bringing Rotaractors together for workshops and knowledge-sharing.', color: '#38bdf8' },
  { name: 'Nadda Habba', slug: 'nadda-habba', abbr: 'NH', icon: '\uD83C\uDF89', desc: 'A cultural celebration uniting clubs in a spirit of fellowship, music and tradition.', color: '#fb923c' },
  { name: 'Vaayu \u2013 4th Annual District Conference', slug: 'vaayu-district-conference', abbr: 'VAAYU', icon: '\u2708', desc: 'The premier district conference bringing leaders, sponsors and members together \u2014 an unmissable milestone.', color: '#fb923c' },
]

const TEAM = [
  { name: 'Rtn. Rtr. Anirudh Kulkarni', role: 'District Rotaract Representative', photo: '/assets/team/2026-27/core-team/Karthik U Chikmath.jpeg' },
  { name: 'Rtn. Rtr. Karthik Chikmath', role: 'Immediate Past DRR', photo: '/assets/team/2026-27/core-team/Karthik U Chikmath.jpeg' },
  { name: 'Rtn. Rtr. Rohan A', role: 'District Rotaract Representative Elect', photo: '/assets/team/2026-27/core-team/Rohan A.JPG' },
  { name: 'PP. Rtr. Girish AR', role: 'General Secretary', photo: '/assets/team/2026-27/core-team/Girish A R.jpeg' },
  { name: 'PP. Rtr. Soumi Bhattacharyya', role: 'District Rotaract Secretary - Admin', photo: '/assets/team/2026-27/core-team/Soumi Bhattacharyya.jpeg' },
  { name: 'PP. Rtr. Padma Nesar R', role: 'District Rotaract Secretary - Operations', photo: '/assets/team/2026-27/core-team/Padma Nesar R.jpg' },
  { name: 'PP. Rtr. Ram M Narayanan', role: 'District Rotaract Secretary - Initiatives', photo: '/assets/team/2026-27/core-team/Ram M Narayanan.jpeg' },
]

const SPONSORS = [
  { name: 'Rotary International', abbr: 'RI' },
  { name: 'Title Sponsor A', abbr: 'TS\u2013A' },
  { name: 'Title Sponsor B', abbr: 'TS\u2013B' },
  { name: 'Gold Sponsor', abbr: 'GOLD' },
  { name: 'Silver Sponsor', abbr: 'SILVER' },
  { name: 'Associate Sponsor', abbr: 'ASSOC' },
]

/* ─────────────────────────────────────────────────────────────
   SHARED STYLE TOKENS
───────────────────────────────────────────────────────────── */
const TAG = { fontFamily: "'Rajdhani','Inter',sans-serif", fontSize: '.6rem', fontWeight: 700, letterSpacing: '.38em', textTransform: 'uppercase', color: '#0f172a' }
const SEC_TITLE = { fontFamily: "'Rajdhani','Inter',sans-serif", fontSize: 'clamp(1.6rem,5vw,2.5rem)', fontWeight: 700, color: '#0f172a', margin: '6px 0 0', lineHeight: 1.15 }
const DIVIDER = <div style={{ width: 44, height: 3, background: 'linear-gradient(90deg,#ff6b1a,#d41367)', borderRadius: 2, margin: '12px 0 0' }} />
const GLASS = { background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(22px) saturate(160%)', WebkitBackdropFilter: 'blur(22px) saturate(160%)', border: '1px solid rgba(255,255,255,0.22)' }

/* ─────────────────────────────────────────────────────────────
   HERO SLIDER (photo only, no text)
───────────────────────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length
  const goTo = (i) => setCurrent(i)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % total), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: 'clamp(300px,65vh,550px)', overflow: 'hidden', borderRadius: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      {/* Photo background */}
      <div key={current} style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/assets/hero-bg.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        animation: 'sliderFadeIn .9s ease forwards',
      }} />

      {/* Very subtle bottom vignette so dots are visible */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,.55) 0%, transparent 40%)' }} />

      {/* Missile trails */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="home-trail-1" d="M0,80 Q30,50 75,15" stroke="rgba(56,189,248,.6)" strokeWidth=".45" fill="none" />
        <path className="home-trail-2" d="M5,90 Q40,60 85,10" stroke="rgba(255,107,26,.5)" strokeWidth=".38" fill="none" />
        <path className="home-trail-3" d="M0,100 Q60,55 100,20" stroke="rgba(212,19,103,.4)" strokeWidth=".32" fill="none" />
      </svg>

      {/* Roundel watermark */}
      <div style={{ position: 'absolute', top: '5%', right: '-5%', zIndex: 2, width: 'clamp(160px,34vw,300px)', height: 'clamp(160px,34vw,300px)', opacity: .06, animation: 'roundelSpin 22s linear infinite', pointerEvents: 'none' }}>
        <Roundel size="100%" />
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 4 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} id={`hero-dot-${i}`}
            className={`slider-dot${current === i ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            style={{ height: 8, width: current === i ? 24 : 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0, background: current === i ? '#ff6b1a' : 'rgba(255,255,255,.4)' }} />
        ))}
      </div>

      {/* Arrows */}
      {[['hero-prev', '‹', 'left:14px', () => setCurrent(c => (c - 1 + total) % total)], ['hero-next', '›', 'right:14px', () => setCurrent(c => (c + 1) % total)]].map(([id, ch, pos, fn]) => (
        <button key={id} onClick={fn} id={id} aria-label={id}
          style={{ position: 'absolute', [pos.split(':')[0]]: parseInt(pos.split(':')[1]), top: '50%', transform: 'translateY(-50%)', zIndex: 4, background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,.3)', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0f172a', fontSize: 20 }}>
          {ch}
        </button>
      ))}
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────── */
export default function Home() {
  const styleRef = useRef(null)

  useEffect(() => {
    if (document.getElementById('home-css-v4')) return
    const el = document.createElement('style')
    el.id = 'home-css-v4'
    el.textContent = HOME_CSS
    document.head.appendChild(el)
    styleRef.current = el
    return () => { if (styleRef.current) styleRef.current.remove() }
  }, [])

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: '#0f172a', display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Fixed side jets */}
      <SideJets />

      {/* ══ §1 HERO ══ */}
      <HeroSlider />

      {/* ══ §2 QUICK LINKS ══ */}
      <section id="quick-links" style={{ ...GLASS, borderRadius: 24, padding: 'clamp(36px,6vw,60px) clamp(20px,5vw,48px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={SEC_TITLE}>Quick Links</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {QUICK_LINKS.map((ql, i) => {
            const Wrap = ql.internal ? Link : 'a'
            const props = ql.internal ? { to: ql.href, id: `ql-${i}` } : { href: ql.href, target: '_blank', rel: 'noreferrer', id: `ql-${i}` }
            return (
              <Wrap key={i} {...props} className="ql-card glass-card" style={{ flex: '1 1 220px', maxWidth: 290, borderRadius: 18, padding: '26px 20px', textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontFamily: "'Rajdhani','Inter',sans-serif", fontSize: '1.08rem', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>{ql.title}</h3>
                <p style={{ fontSize: '.82rem', color: '#334155', margin: 0, lineHeight: 1.7 }}>{ql.desc}</p>
              </Wrap>
            )
          })}
        </div>
      </section>

      {/* ══ §3 ABOUT US ══ */}
      <section id="about" style={{ ...GLASS, borderRadius: 24, padding: 'clamp(40px,7vw,72px) clamp(20px,5vw,56px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(32px,5vw,60px)' }}>
        <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', width: 'clamp(160px,30vw,210px)', margin: '0 auto' }}>
          <HUDReticle size={205} />
        </div>
        <div style={{ flex: '1 1 280px' }}>
          <p style={TAG}>ABOUT US</p>
          <h2 style={SEC_TITLE}>About Rotaract<br />District 3191</h2>
          {DIVIDER}
          <p style={{ fontSize: 'clamp(.88rem,2.2vw,1rem)', color: '#334155', lineHeight: 1.8, margin: '18px 0 12px' }}>
            Rotaract District 3191 is dedicated to fostering leadership and community service among young professionals and students. We focus on impactful projects that address local and global issues, creating positive change in our communities.
          </p>
          <p style={{ fontSize: 'clamp(.88rem,2.2vw,1rem)', color: '#334155', lineHeight: 1.8, margin: '0 0 22px' }}>
            Our district supports diverse initiatives promoting personal development, professional growth and community engagement across Bangalore, Ramanagara, Kolar and Chittor.
          </p>
          {['50+ active Rotaract clubs across the district', '2,000+ young leaders united in service', '100+ community projects completed'].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
              <span style={{ color: '#ff6b1a', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>▸</span>
              <p style={{ margin: 0, fontSize: '.87rem', color: '#334155', lineHeight: 1.65 }}>{t}</p>
            </div>
          ))}
          <Link to="/about" id="about-cta" className="btn-p"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ff6b1a', color: '#0f172a', fontFamily: "'Rajdhani','Inter',sans-serif", fontWeight: 700, fontSize: '.87rem', letterSpacing: '.12em', textTransform: 'uppercase', padding: '12px 26px', borderRadius: 10, textDecoration: 'none', marginTop: 20, boxShadow: '0 0 20px rgba(255,107,26,.4)' }}>
            KNOW MORE →
          </Link>
        </div>
      </section>

      {/* ══ §4 EVENTS ══ */}
      <section id="events" style={{ ...GLASS, borderRadius: 24, padding: 'clamp(40px,7vw,64px) clamp(20px,5vw,48px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={SEC_TITLE}>District Events</h2>
          <p style={{ fontSize: '.88rem', color: '#334155', marginTop: 10 }}>Flagship events that bring the district together</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18 }}>
          {EVENTS.map((ev, i) => (
            <Link to={`/events/${ev.slug}`} key={i} id={`event-${i}`} className="ev-card glass-card hover-lift" style={{ flex: '1 1 250px', maxWidth: '320px', borderRadius: 18, padding: '24px 20px', textDecoration: 'none', display: 'block', borderTop: `3px solid ${ev.color}` }}>
              <h3 style={{ fontFamily: "'Rajdhani','Inter',sans-serif", fontSize: '1.04rem', fontWeight: 700, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.25 }}>{ev.name}</h3>
              <p style={{ fontSize: '.82rem', color: '#334155', margin: 0, lineHeight: 1.7 }}>{ev.desc}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 30, position: 'relative' }}>
          <Link to="/events" className="btn-s"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.14)', color: '#0f172a', fontFamily: "'Rajdhani','Inter',sans-serif", fontWeight: 700, fontSize: '.88rem', letterSpacing: '.12em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: 10, textDecoration: 'none', border: '1px solid rgba(255,255,255,.35)' }}>
            VIEW ALL EVENTS →
          </Link>
        </div>
      </section>

      {/* ══ §5 TEAM ══ */}
      <section id="team-preview" style={{ ...GLASS, borderRadius: 24, padding: 'clamp(40px,7vw,64px) clamp(20px,5vw,48px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', right: '-6%', transform: 'translateY(-50%)', width: 'clamp(180px,36vw,300px)', height: 'clamp(180px,36vw,300px)', opacity: .05, animation: 'roundelSpin 22s linear infinite', pointerEvents: 'none' }}>
          <Roundel size="100%" />
        </div>
        <div style={{ textAlign: 'center', marginBottom: 36, position: 'relative' }}>
          <p style={TAG}>DISTRICT COMMAND CENTER</p>
          <h2 style={SEC_TITLE}>Meet The Team</h2>
        </div>
        <div className="team-grid" style={{ position: 'relative' }}>
          {TEAM.map((m, i) => (
            <div key={i} id={`tm-${i}`} className="tm-card glass-card" style={{ borderRadius: 16, overflow: 'hidden', textAlign: 'center' }}>
              <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', background: 'rgba(255,255,255,.08)' }}>
                <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} onError={e => { e.target.style.display = 'none' }} />
              </div>
              <div style={{ padding: '12px 8px 16px' }}>
                <h4 style={{ fontFamily: "'Rajdhani','Inter',sans-serif", fontSize: 'clamp(.8rem, 3vw, .9rem)', fontWeight: 700, color: '#0f172a', margin: '0 0 4px', lineHeight: 1.25 }}>{m.name}</h4>
                <p style={{ fontSize: 'clamp(.65rem, 2vw, .7rem)', color: '#334155', margin: 0, lineHeight: 1.4 }}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 30, position: 'relative' }}>
          <Link to="/team" id="team-cta" className="btn-s"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.14)', color: '#0f172a', fontFamily: "'Rajdhani','Inter',sans-serif", fontWeight: 700, fontSize: '.88rem', letterSpacing: '.12em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: 10, textDecoration: 'none', border: '1px solid rgba(255,255,255,.35)' }}>
            🎖&nbsp;KNOW THE FULL TEAM
          </Link>
        </div>
      </section>

      {/* ══ §6 SPONSORS ══ */}
      <section id="sponsors" style={{ ...GLASS, borderRadius: 24, padding: 'clamp(36px,6vw,56px) clamp(20px,5vw,48px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <p style={TAG}>OUR YEAR LONG</p>
          <h2 style={{ ...SEC_TITLE, fontSize: 'clamp(1.4rem,4vw,2rem)' }}>Sponsors</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'center', alignItems: 'center' }}>
          {SPONSORS.map((sp, i) => (
            <div key={i} id={`sp-${i}`} className="sponsor-logo glass-card" style={{ flex: '0 0 auto', borderRadius: 14, padding: '18px 26px', minWidth: 120, textAlign: 'center', cursor: 'default' }}>
              <div style={{ fontFamily: "'Rajdhani','Inter',sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', letterSpacing: '.06em' }}>{sp.abbr}</div>
              <div style={{ fontSize: '.65rem', color: '#334155', marginTop: 4, letterSpacing: '.06em' }}>{sp.name}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '.75rem', color: '#334155', marginTop: 22, letterSpacing: '.12em' }}>
          Interested in partnering? Contact us at the district office.
        </p>
      </section>

    </div>
  )
}
