import React from "react";

const core_team = [
  {
    id: 1,
    position: "District Rotaract Representative, RI District 3191",
    name: "Rtn. Rtr. Anirudh Kulkarni",
    photo: "/assets/team/2026-27/core-team/Karthik U Chikmath.jpeg",
  },
  {
    id: 2,
    position: "Immediate Past DRR, RI District 3191",
    name: "Rtn. Rtr. Karthik Chikmath",
    photo: "/assets/team/2026-27/core-team/Karthik U Chikmath.jpeg",
  },
  {
    id: 3,
    position: "District Rotaract Representative Elect, RI District 3191",
    name: "Rtn. Rtr. Rohan A",
    photo: "/assets/team/2026-27/core-team/Rohan A.JPG",
  },
  {
    id: 4,
    position: "General Secretary",
    name: "PP. Rtr. Girish AR",
    photo: "/assets/team/2026-27/core-team/Girish A R.jpeg",
  },
  {
    id: 5,
    position: "District Rotaract Secretary - Admin",
    name: "PP. Rtr. Soumi Bhattacharyya",
    photo: "/assets/team/2026-27/core-team/Soumi Bhattacharyya.jpeg",
  },
  {
    id: 6,
    position: "District Rotaract Secretary - Operations",
    name: "PP. Rtr. Padma Nesar R",
    photo: "/assets/team/2026-27/core-team/Padma Nesar R.jpg",
  },
  {
    id: 7,
    position: "District Rotaract Secretary - Initiatives",
    name: "PP. Rtr. Ram M Narayanan",
    photo: "/assets/team/2026-27/core-team/Ram M Narayanan.jpeg",
  }
];

const zrrs = [
  {
    id: 1,
    position: "Zonal Rotaract Representative",
    name: "IPP. Rtr. Hitha Suresh",
    photo: "/assets/team/2026-27/zrrs/Hitha Suresh.jpeg",
  },
  {
    id: 2,
    position: "Zonal Rotaract Representative + Rotary Foundation Chair",
    name: "IPP. Rtn. Rtr. Samarth Viswanath",
    photo: "/assets/team/2026-27/zrrs/Samarth Viswanath.jpeg",
  },
  {
    id: 3,
    position: "Zonal Rotaract Representative",
    name: "PP. Rtr. Hemant Chhajer",
    photo: "/assets/team/2026-27/zrrs/Hemant Chhajer.jpeg",
  },
  {
    id: 4,
    position: "Zonal Rotaract Representative",
    name: "IPP. Rtr. Rohith K R",
    photo: "/assets/team/2026-27/zrrs/Rohith K R.jpeg",
  },
  {
    id: 5,
    position: "Zonal Rotaract Representative",
    name: "PP. Rtn. Rtr. Gagan M",
    photo: "/assets/team/2026-27/zrrs/Gagan M.jpeg",
  },
  {
    id: 6,
    position: "Zonal Rotaract Representative",
    name: "PP. Rtr. Madan Mohan B",
    photo: "/assets/team/2026-27/zrrs/Madan Mohan B.jpeg",
  },
  {
    id: 7,
    position: "Zonal Rotaract Representative",
    name: "IPP. Rtr. Akhilesh R",
    photo: "/assets/team/2026-27/zrrs/Akhilesh R.jpeg",
  },
  {
    id: 8,
    position: "Zonal Rotaract Representative",
    name: "PP. PHF Rtn. Rtr. Akshay Kumar BS",
    photo: "/assets/team/2026-27/zrrs/Akshay Kumar BS.jpeg",
  },
  {
    id: 9,
    position: "Kolar Regional Representative",
    name: "PP. Rtr. Rahul R",
    photo: "/assets/team/2026-27/zrrs/Rahul R.jpeg",
  },
  {
    id: 10,
    position: "Ramnagar Regional Representative",
    name: "PP. Rtr. Shashank MN",
    photo: "/assets/team/2026-27/zrrs/Shashank MN.jpeg",
  }
];

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-pink-200 bg-[#fff8fb] px-6 py-4 shadow-sm">
      <p className="text-xs uppercase tracking-widest text-slate-500">
        {label}
      </p>

      <h3 className="mt-1 text-2xl font-black text-[#d41367]">
        {value}
      </h3>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="my-12">
      <div className="flex items-center gap-5">
        <div className="h-px flex-1 bg-pink-200" />

        <h2 className="text-center text-lg md:text-3xl font-black uppercase tracking-[0.35em] text-[#d41367] text-shadow-sm">
          {title}
        </h2>

        <div className="h-px flex-1 bg-pink-200" />
      </div>
    </div>
  );
}

function LeadershipCard({ member }) {
  return (
    <div
      className="
  group
  overflow-hidden
  rounded-[28px]
  border
  border-pink-100
  bg-white
  shadow-lg
  transition-all
  duration-300
  hover:-translate-y-2
  hover:border-[#d41367]
  hover:shadow-2xl
"
    >
      <img
        src={member.photo}
        alt={member.name}
        className="
    h-[350px]
    w-full
    object-cover
    transition-transform
    duration-500
    group-hover:scale-105
  "
      />

      <div className="bg-pink-50 px-6 py-5 text-center">
        <h3 className="text-xl font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {member.position}
        </p>
      </div>
    </div>
  );
}

function TeamMemberCard({ member }) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-pink-100
      bg-white/90
      p-5
      text-center
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#d41367]
      hover:shadow-lg
    "
    >
      <img
        src={member.photo}
        alt={member.name}
        className="
        mx-auto
        h-40
        w-40
        rounded-full
        object-cover
      "
      />

      <h4 className="mt-4 font-bold text-slate-900">
        {member.name}
      </h4>

      <p className="mt-1 text-sm text-slate-500">
        {member.position}
      </p>
    </div>
  );
}

export default function Team() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* HERO */}

        <section
          className="
          rounded-[40px]
          border
          border-pink-200
          bg-white/85
          p-4
          shadow-[0_20px_80px_rgba(212,19,103,0.08)]
          backdrop-blur-xl
          md:px-12 md:py-6
        "
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p
                className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#d41367]
              "
              >
                District Command Center
              </p>

              <h1 className="mt-1 text-5xl font-black md:text-5xl">
                THE TEAM
              </h1>

              <p className="mt-1 max-w-2xl text-lg text-slate-600">
                Meet the leaders, visionaries and changemakers
                driving service, fellowship, leadership and
                impact across Rotaract District 3191.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <StatCard label="Personnel" value="120+" />
              <StatCard label="Zones" value="4" />
            </div>
          </div>
        </section>

        {/* CORE TEAM */}

        <SectionHeader title="District Core Team" />

        <div className="grid gap-10 lg:grid-cols-3">
          {core_team.map((member) => (
            <LeadershipCard
              key={member.id}
              member={member}
            />
          ))}
        </div>

        {/* ZONAL TEAM */}

        <SectionHeader title="Zonal Rotaract Representatives" />

        <div className="grid gap-10 lg:grid-cols-4">
          {zrrs.map((member) => (
            <LeadershipCard
              key={`zone-${member.id}`}
              member={member}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
