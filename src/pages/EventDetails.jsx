import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { DISTRICT_EVENTS } from '../data/events.js';

export default function EventDetails() {
  const { slug } = useParams();
  const event = DISTRICT_EVENTS.find(e => e.slug === slug);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (!event || event.photos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % event.photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [event]);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const nextSlide = () => setCurrentSlide(p => (p + 1) % event.photos.length);
  const prevSlide = () => setCurrentSlide(p => (p - 1 + event.photos.length) % event.photos.length);

  return (
    <div className="flex flex-col gap-10 py-8 w-full">
      
      {/* HEADER SECTION */}
      <div className="px-4 sm:px-8 md:px-12 max-w-6xl mx-auto w-full text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
          {event.title}
        </h1>
        <p className="text-slate-500 font-bold tracking-widest uppercase text-sm md:text-base border-t border-b border-slate-200 inline-block py-2 px-8">
          {event.date}
        </p>
      </div>

      {/* PHOTO CAROUSEL */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8">
        <div className="glass-surface p-2 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 group">
            {event.photos.map((photo, index) => (
              <img 
                key={index}
                src={photo} 
                alt={`${event.title} - Photo ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            
            {/* Carousel Controls */}
            {event.photos.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                  {event.photos.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-pink-500' : 'w-2 bg-white/60 hover:bg-white'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* DESCRIPTION & SPONSORS */}
      <div className="px-4 sm:px-8 md:px-12 max-w-4xl mx-auto w-full space-y-16">
        
        {/* About Paragraph */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>About The Event</h2>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Past Sponsors */}
        {event.sponsors && event.sponsors.length > 0 && (
          <div className="glass-surface p-8 rounded-3xl text-center space-y-8">
            <div className="inline-block relative">
              <h3 className="text-2xl font-bold text-slate-900 tracking-wide uppercase" style={{ fontFamily: "'Rajdhani','Inter',sans-serif" }}>
                Event Sponsors
              </h3>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-500"></div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-4">
              {event.sponsors.map((sponsor, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 group">
                  <div className="w-28 h-28 md:w-36 md:h-36 bg-white/50 border border-white/60 rounded-2xl flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all">
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} className="w-3/4 h-3/4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <span className="text-slate-400 font-bold text-xl opacity-30">LOGO</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-600 tracking-wide uppercase">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      
    </div>
  );
}
