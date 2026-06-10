import React from 'react'

const brandSections = [
    {
        id: 'logos',
        title: 'Brand and Logos',
        accent: 'PRIMARY',
        link: '/brand-center/logos',
        items: ['Download official Rotaract District 3191 logos and branding guidelines to maintain consistency across all platforms.'],
    },
    {
        id: 'documents',
        title: 'Documents and Resources',
        accent: 'BRIEFING',
        link: '/brand-center/documents',
        items: ['Access official documents and resources to help you plan and execute successful projects and events.'],
    },
    {
        id: 'profiles',
        title: 'Profiles',
        link: '/brand-center/profiles',
        accent: 'TEAM',
        items: ['Learn more about the Rotaract District 3191 team and get their Profiles.'],
    },
]

const cockpitMetrics = [
    { label: 'District', value: '3191' },
    { label: 'Zones', value: '4' },
    { label: 'Clubs', value: '78' },
]

export default function BrandCenter() {

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#d41367] text-slate-900">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(212,19,103,0.16),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(15,23,42,0.08),transparent_18%),linear-gradient(180deg,#ffffff_0%,#f4f6fb_52%,#e7ecf4_100%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 bg-[linear-gradient(rgba(148,163,184,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.11)_1px,transparent_1px)] bg-size-[56px_56px]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_center,rgba(212,19,103,0.12),transparent_60%)] blur-3xl" />

            <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
                <section className="rounded-4xl border border-white/70 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-6">
                    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-row items-center gap-6 justify-center">
                            <div className="h-3 w-3 rounded-full bg-[#d41367] shadow-[0_0_0_7px_rgba(212,19,103,0.14)]" />
                            <div>
                                <p className="text-2xl md:text-5xl font-black tracking-tight text-slate-900">
                                    BRAND CENTER
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            {cockpitMetrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="min-w-20 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center"
                                >
                                    <div className="text-[9px] font-semibold uppercase tracking-[0.26em] text-slate-500">{metric.label}</div>
                                    <div className="mt-1 text-sm font-black text-slate-900">{metric.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 gap-4">
                        <div className="rounded-4xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                            <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Your deck</p>
                                    <h2 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">Brand Center - Logos, Documents and Profiles</h2>
                                </div>
                                <div className="rounded-full border border-[#d41367]/20 bg-[#d41367]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d41367]">
                                    UNDER CONTROL
                                </div>
                            </div>

                            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {brandSections.map((section) => (
                                    <article
                                        key={section.id}
                                        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fd_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                                    >
                                        <div className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-[#d41367] via-[#ff8fb0] to-slate-900" />
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">{section.accent}</p>
                                            <div className="h-2.5 w-2.5 rounded-full bg-[#d41367]" />
                                        </div>

                                        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">{section.title}</h3>

                                        <div className="mt-4 grid gap-2">
                                            {section.items.map((item) => (
                                                <div
                                                    key={item}
                                                    className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex justify-center align-bottom">
                                            <a
                                                href={section.link}
                                                className="
            group relative inline-flex items-center gap-2
            rounded-xl border border-slate-300 bg-white
            px-5 py-2.5 text-sm font-bold uppercase tracking-[0.15em]
            text-slate-800 shadow-sm
            transition-all duration-300
            hover:-translate-y-0.5 hover:border-[#d41367]
            hover:shadow-[0_8px_20px_rgba(212,19,103,0.15)]
        "
                                            >
                                                <span className="h-2 w-2 rounded-full bg-[#d41367] animate-pulse" />
                                                Access
                                                <svg
                                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13 5l7 7-7 7M5 12h15"
                                                    />
                                                </svg>

                                                <span className="absolute inset-0 rounded-xl bg-linear-to-r from-[#d41367]/0 via-[#d41367]/10 to-[#d41367]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* <div className="grid gap-4">
                            <div className="rounded-4xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">HUD</p>
                                        <h2 className="mt-2 text-lg font-bold text-slate-900">Control panel</h2>
                                    </div>
                                    <div className="h-12 w-12 rounded-full border border-[#d41367]/20 bg-[conic-gradient(from_90deg,#d41367_0deg,#f7b4cb_120deg,#ffffff_240deg,#d41367_360deg)] p-2">
                                        <div className="h-full w-full rounded-full bg-white" />
                                    </div>
                                </div>

                                <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                                    {[
                                        ['Airspeed', 'Nominal'],
                                        ['Altitude', 'Stable'],
                                        ['System', 'Ready'],
                                    ].map(([label, value]) => (
                                        <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-3">
                                            <div className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</div>
                                            <div className="mt-2 text-sm font-black text-slate-900">{value}</div>
                                            <div className="mt-3 h-2 rounded-full bg-slate-200">
                                                <div
                                                    className="h-2 rounded-full bg-linear-to-r from-[#d41367] via-[#f08fb0] to-slate-900"
                                                    style={{ width: label === 'Airspeed' ? '72%' : label === 'Altitude' ? '84%' : '92%' }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-4xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Vector map</p>
                                        <h2 className="mt-2 text-lg font-bold text-slate-900">Navigation grid</h2>
                                    </div>
                                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                                        Marked
                                    </div>
                                </div>

                                <div className="mt-4 rounded-[1.75rem] border border-slate-200 bg-[radial-gradient(circle_at_center,rgba(212,19,103,0.12),transparent_32%),radial-gradient(circle_at_center,rgba(15,23,42,0.06),transparent_58%),linear-gradient(180deg,#ffffff_0%,#f3f6fb_100%)] p-4">
                                    <div className="grid aspect-[1.5] place-items-center rounded-[1.25rem] border border-slate-200 bg-white/70">
                                        <div className="relative h-36 w-36 rounded-full border border-slate-200 bg-white">
                                            <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 bg-slate-200" />
                                            <div className="absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-slate-200" />
                                            <div className="absolute inset-4 rounded-full border border-[#d41367]/20" />
                                            <div className="absolute inset-8 rounded-full border border-slate-200" />
                                            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d41367] shadow-[0_0_0_8px_rgba(212,19,103,0.15)]" />
                                            <div className="absolute left-[18%] top-[24%] h-2 w-2 rounded-full bg-slate-900" />
                                            <div className="absolute right-[20%] top-[20%] h-2 w-2 rounded-full bg-[#d41367]" />
                                            <div className="absolute left-[28%] bottom-[18%] h-2 w-2 rounded-full bg-slate-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </main>
        </div>
    )
}