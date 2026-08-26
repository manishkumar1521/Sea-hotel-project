import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Award, Heart } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Eleanor & Julian Vance',
      location: 'Geneva, Switzerland',
      role: 'Private Overwater Villa Guest',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      stayType: 'Honeymoon Celebration · 7 Nights',
      text: 'From the private helicopter touchdown on the resort jetty to our floating champagne breakfasts in the plunge pool, Sea Breeze redefined what barefoot luxury means. Our private butler Marco was discreet, warm, and anticipated our every desire.',
      date: 'January 2025'
    },
    {
      id: 2,
      name: 'Sir Alexander Wright',
      location: 'London, United Kingdom',
      role: 'Royal Penthouse Guest',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      stayType: 'Annual Luxury Retreat · 10 Nights',
      text: 'The gastronomic excellence at the ocean pavilion rivals the finest 3-star Michelin establishments in Europe. The wine cellar selection is simply world-class. Waking up to pristine coral lagoons from the rooftop terrace was unforgettable.',
      date: 'December 2024'
    },
    {
      id: 3,
      name: 'Dr. Kimberly Chen & Marcus Chen',
      location: 'Singapore',
      role: 'Grand Oceanfront Suite Guest',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      stayType: 'Family Coastal Odyssey · 5 Nights',
      text: 'The Thalassotherapy Spa treatments completely restored our energy. The staff treated our two daughters like royalty, organizing guided marine biologist snorkeling where they swam alongside sea turtles. Truly unmatched hospitality.',
      date: 'November 2024'
    },
    {
      id: 4,
      name: 'Sophia Martinez',
      location: 'New York, USA',
      role: 'Luxury Travel Journalist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      stayType: 'Editorial Stay · 4 Nights',
      text: 'I have reviewed over 200 luxury coastal resorts worldwide. Sea Breeze stands in a league of its own for its architectural harmony, ocean preservation standards, and heartfelt, flawless guest service.',
      date: 'October 2024'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Verified Guest Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Stories of Unforgettable Stays
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hear from distinguished travelers who have made Sea Breeze Hotel their coastal sanctuary of choice.
          </p>
        </div>

        {/* Global Rating Score Pill */}
        <div className="max-w-xl mx-auto mb-12 p-4 rounded-2xl bg-ocean-900/60 border border-ocean-800 flex items-center justify-around text-center text-xs text-slate-300">
          <div>
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="font-bold text-white text-sm">4.98 / 5.0 Rating</div>
            <div className="text-[11px] text-slate-400">Google Reviews (1,240+)</div>
          </div>
          <div className="h-10 w-px bg-ocean-800"></div>
          <div>
            <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="font-bold text-white text-sm">TripAdvisor</span>
            </div>
            <div className="font-bold text-white text-sm">Travelers’ Choice 2025</div>
            <div className="text-[11px] text-slate-400">Top 1% Luxury Worldwide</div>
          </div>
        </div>

        {/* Main Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto bg-ocean-900/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-ocean-800 shadow-2xl relative">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-cyan-500/15 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Stay Type Pill */}
            <span className="px-4 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-semibold">
              ✦ {current.stayType}
            </span>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-2xl font-serif text-white leading-relaxed italic max-w-2xl">
              "{current.text}"
            </p>

            {/* Stars */}
            <div className="flex justify-center space-x-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Guest Profile */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-ocean-800 w-full justify-center">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/50 shadow-gold-glow"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                  <span>{current.name}</span>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" title="Verified Guest" />
                </h4>
                <p className="text-xs text-cyan-300 font-medium">{current.role} · {current.location}</p>
                <p className="text-[11px] text-slate-400">{current.date}</p>
              </div>
            </div>
          </div>

          {/* Nav Controls */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ocean-950 border border-ocean-700 text-white hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center shadow-xl transition-all"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ocean-950 border border-ocean-700 text-white hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center shadow-xl transition-all"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Selector Indicators */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full flex items-center gap-2 p-1 ${
                idx === currentIndex
                  ? 'bg-cyan-500/20 border border-cyan-400 pr-3'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              {idx === currentIndex && (
                <span className="text-xs text-white font-medium hidden sm:inline">
                  {t.name.split(' ')[0]}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;