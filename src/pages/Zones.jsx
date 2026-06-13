import React, { useState } from 'react';
import { ZONES } from '../data/zones.js';

export default function Zones() {
  const [activeZone, setActiveZone] = useState(ZONES[0].id);

  const activeZoneData = ZONES.find(z => z.id === activeZone);

  return (
    <div className="flex flex-col gap-10 py-12 px-4 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center space-y-4 mb-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
          DISTRICT ZONES
        </h1>
      </div>

      {/* 4 Zones Image Toggle */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {ZONES.map((zone) => {
          const isActive = activeZone === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              className={`relative h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden group transition-all duration-300 ${isActive
                ? 'ring-4 ring-offset-4 shadow-xl scale-[1.02] z-10'
                : 'hover:scale-105 hover:shadow-lg opacity-80 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              style={{ ringColor: isActive ? zone.themeColor : 'transparent' }}
            >
              <img
                src={zone.jetImage}
                alt={zone.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-white font-bold text-lg md:text-xl tracking-wider uppercase" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
                  {zone.name}
                </h3>
              </div>

              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: zone.themeColor }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 my-4" />

      {/* Selected Zone Content Area */}
      <div className="w-full flex flex-col gap-12">

        {/* ZRR Photos Section */}
        <div className="glass-surface p-8 sm:p-12 rounded-3xl shadow-xl text-center border-t-4" style={{ borderTopColor: activeZoneData.themeColor }}>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
            {activeZoneData.name} ZRR's
          </h2>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-10">Zonal Rotaract Representatives</p>

          <div className="grid grid-cols-2 justify-items-center gap-4 sm:gap-10 md:gap-16">
            {activeZoneData.leaders.map((leader, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 sm:gap-4 group cursor-default text-center">
                <div className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden group-hover:shadow-xl transition-all">
                  {/* Placeholder for ZRR Photo */}
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(leader)}&background=random&size=200`}
                    alt={leader}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-800 leading-tight">{leader}</h3>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest" style={{ color: activeZoneData.themeColor }}>Leader</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs & President Photos Section */}
        <div className="glass-surface p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide uppercase" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
              Clubs in {activeZoneData.name}
            </h2>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeZoneData.clubs.map((club, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 hover:bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                {/* President Photo Placeholder */}
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm group-hover:scale-110 transition-transform flex items-center justify-center">
                  {club.presidentPhoto ? (
                    <img
                      src={club.presidentPhoto}
                      alt={`${club.name} President`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(club.name)}&background=random&color=fff&size=100`}
                      alt={`${club.name} President`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-slate-800 font-bold text-sm leading-tight group-hover:text-pink-600 transition-colors line-clamp-2">
                    {club.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
                    President
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
