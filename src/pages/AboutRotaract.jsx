import { NavLink } from "react-router-dom";

const focusAreas = [
  {
    title: "Promoting Peace",
    icon: "/assets/focus/peace.png",
    description:
      "Training leaders to foster understanding, empathy and conflict resolution.",
  },
  {
    title: "Fighting Disease",
    icon: "/assets/focus/disease.png",
    description:
      "Supporting healthcare initiatives and improving access to treatment.",
  },
  {
    title: "Clean Water",
    icon: "/assets/focus/water.png",
    description:
      "Improving sanitation and access to clean water worldwide.",
  },
  {
    title: "Supporting Education",
    icon: "/assets/focus/education.png",
    description:
      "Creating opportunities through quality education and literacy.",
  },
  {
    title: "Maternal & Child Health",
    icon: "/assets/focus/maternal.png",
    description:
      "Improving health and wellbeing of mothers and children.",
  },
  {
    title: "Growing Local Economies",
    icon: "/assets/focus/economy.png",
    description:
      "Supporting entrepreneurship and sustainable development.",
  },
  {
    title: "Protecting Environment",
    icon: "/assets/focus/environment.png",
    description:
      "Driving environmental conservation and sustainability projects.",
  },
];

function SectionHeader({ title }) {
  return (
    <div className="my-12">
      <div className="flex items-center gap-5">
        <div className="h-px flex-1 bg-pink-200" />
        <h2 className="text-center text-lg md:text-3xl font-black uppercase tracking-[0.35em] text-[#d41367]">
          {title}
        </h2>
        <div className="h-px flex-1 bg-pink-200" />
      </div>
    </div>
  );
}

export default function AboutRotaract() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* HERO */}
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              INTERNATIONAL NETWORK
            </p>

            <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-6xl">
              ROTARACT
            </h1>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Rotaract is a global network of young leaders committed to
              community service, leadership development and international
              understanding.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "180+ Countries",
                "10,000+ Clubs",
                "200,000+ Members",
                "Founded 1968",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="rounded-3xl border border-dashed border-[#d41367] bg-pink-50 aspect-video flex items-center justify-center">
            <span className="font-bold text-[#d41367]">
              ROTARACT HERO IMAGE
            </span>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <SectionHeader title="MISSION OVERVIEW" />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-6">
          <h3 className="text-2xl font-black">
            Service. Leadership. Fellowship.
          </h3>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Rotaract empowers young people to create lasting change in
            themselves, their communities and around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            ["Countries", "180+"],
            ["Members", "200K+"],
            ["Clubs", "10K+"],
            ["Established", "1968"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                {label}
              </p>

              <p className="mt-2 text-3xl font-black text-[#d41367]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <SectionHeader title="SEVEN AREAS OF FOCUS" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-4xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div className="h-3 w-3 rounded-full bg-[#d41367]" />

              <span className="text-xs tracking-[0.3em] text-slate-500 uppercase">
                ACTIVE
              </span>
            </div>

            <div className="mt-5 flex justify-center">
              <div className="h-24 w-24 rounded-full border border-dashed border-[#d41367] flex items-center justify-center">
                LOGO
              </div>
            </div>

            <h3 className="mt-5 text-center text-xl font-black">
              {area.title}
            </h3>

            <p className="mt-4 text-center text-slate-600">
              {area.description}
            </p>
          </div>
        ))}
      </div>

      {/* HISTORY */}
      <SectionHeader title="HISTORY OF ROTARACT" />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-dashed border-[#d41367] bg-pink-50 aspect-[4/3] flex items-center justify-center">
          HISTORY IMAGE
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-6">
          <div className="space-y-6">
            {[
              ["1968", "First Rotaract Club Chartered"],
              ["1980s", "Global Expansion"],
              ["2000s", "Thousands of Clubs Worldwide"],
              ["Today", "Global Movement"],
            ].map(([year, title]) => (
              <div key={year} className="flex gap-4">
                <div className="font-black text-[#d41367] min-w-[80px]">
                  {year}
                </div>

                <div>{title}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-relaxed text-slate-600">
            Rotaract was established in 1968 by Rotary International to engage
            young adults in service, leadership and fellowship. Today it
            continues to empower young leaders worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}