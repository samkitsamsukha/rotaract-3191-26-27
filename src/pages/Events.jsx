import React from 'react';
import { Link } from 'react-router-dom';
import { DISTRICT_EVENTS } from '../data/events.js';

export default function Events() {
  return (
    <div className="flex flex-col gap-8 py-8 px-4 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
          DISTRICT EVENTS
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-medium tracking-wide">
          Discover the flagship events that define our Rotaract journey
        </p>
        <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 mt-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DISTRICT_EVENTS.map((event) => (
          <Link 
            key={event.slug} 
            to={`/events/${event.slug}`}
            className="group glass-surface overflow-hidden rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={event.photos[0]} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-white/30">
                  {event.date}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
                {event.title}
              </h2>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow">
                {event.description}
              </p>
              <div className="text-pink-600 font-semibold text-sm uppercase tracking-widest flex items-center gap-2 mt-auto group-hover:text-pink-500 transition-colors">
                View Event
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
