import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Calendar, Users, Home as RoomIcon, Star, ShieldCheck, Sparkles, X, ChevronRight, Sun, Sunset, Moon, Anchor } from 'lucide-react';
import FloatingBoat3D from './FloatingBoat3D';

const Hero = () => {
  const navigate = useNavigate();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showBoatModal, setShowBoatModal] = useState(false);
  const [activeMood, setActiveMood] = useState<'noon' | 'sunset' | 'twilight'>('sunset');

  // Booking search states
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('all');

  const moodBackgrounds = {
    noon: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85',
    sunset: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85',
    twilight: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
  };

  const handleBookingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking', {
      state: {
        checkIn,
        checkOut,
        guests,
        roomType,
      },
    });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-32 flex flex-col justify-between overflow-hidden bg-ocean-950">
      {/* Background Image with Smooth Mood Transition */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{ backgroundImage: `url("${moodBackgrounds[activeMood]}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/60 to-ocean-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/80 via-transparent to-ocean-950/70"></div>
      </div>

      {/* Mood Selector Pill */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end mb-4">
        <div className="glass-panel-dark px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 shadow-lg">
          <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold mr-1">Atmosphere:</span>
          <button
            onClick={() => setActiveMood('noon')}
            className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all ${
              activeMood === 'noon' ? 'bg-cyan-500 text-white shadow-cyan-glow' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sun className="w-3 h-3" /> Azure Noon
          </button>
          <button
            onClick={() => setActiveMood('sunset')}
            className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all ${
              activeMood === 'sunset' ? 'bg-amber-500 text-slate-950 shadow-gold-glow font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sunset className="w-3 h-3" /> Golden Sunset
          </button>
          <button
            onClick={() => setActiveMood('twilight')}
            className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all ${
              activeMood === 'twilight' ? 'bg-indigo-600 text-white shadow-luxury' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Moon className="w-3 h-3" /> Twilight
          </button>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Forbes 5-Star Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in shadow-gold-glow">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Forbes 5-Star Luxury Oceanfront Resort · Paradise Bay</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-5xl mx-auto animate-fade-in">
          Where Ocean Splendor Meets <br className="hidden sm:inline" />
          <span className="text-gold-gradient italic font-normal">Unrivaled Luxury</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200/90 font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow">
          Immerse yourself in private overwater pavilions, bespoke Michelin-curated gastronomy, and panoramic turquoise tides.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => navigate('/rooms')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-white font-semibold text-base shadow-cyan-glow hover:opacity-95 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Explore Suites & Villas</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowVideoModal(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel-dark text-white border border-white/20 font-medium text-base hover:bg-white/20 transition-all flex items-center justify-center gap-3 group backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-amber-400 text-ocean-950 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <span>Drone Resort Tour</span>
          </button>

          <button
            onClick={() => setShowBoatModal(true)}
            className="w-full sm:w-auto px-6 py-4 rounded-full glass-panel-dark text-cyan-300 border border-cyan-500/40 font-semibold text-base hover:bg-cyan-950/60 transition-all flex items-center justify-center gap-2 shadow-cyan-glow group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>View 3D Floating Yacht</span>
          </button>
        </div>

        {/* Floating Interactive Quick Booking Bar */}
        <div className="max-w-5xl mx-auto glass-panel-dark p-4 sm:p-6 rounded-3xl border border-cyan-500/30 shadow-2xl backdrop-blur-2xl text-left animate-fade-in-up">
          <form onSubmit={handleBookingSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check-In Date */}
            <div>
              <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Check-In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-ocean-900/90 border border-ocean-700 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Check-Out Date */}
            <div>
              <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Check-Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-ocean-900/90 border border-ocean-700 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Guests Selector */}
            <div>
              <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-ocean-900/90 border border-ocean-700 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests (Couple)</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests (Family)</option>
                <option value="6">6+ Guests (Villa)</option>
              </select>
            </div>

            {/* Suite Category */}
            <div>
              <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <RoomIcon className="w-3.5 h-3.5" /> Category
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-ocean-900/90 border border-ocean-700 text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Suites & Villas</option>
                <option value="ocean">Ocean View Suite</option>
                <option value="deluxe">Deluxe Sea View</option>
                <option value="villa">Presidential Overwater Villa</option>
                <option value="penthouse">Royal Penthouse Haven</option>
              </select>
            </div>

            {/* Submit CTA */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-sm shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Check Rates</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Reassurance Badges */}
          <div className="mt-4 pt-4 border-t border-ocean-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Best Rate Guaranteed · Direct Booking Privilege
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Sparkles className="w-4 h-4 text-amber-400" /> Complimentary Welcome Champagne & Butler Service
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" /> 4.98/5 Rated by 2,400+ Verified Guests
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-950/90 backdrop-blur-xl p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-ocean-900 rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/30">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ocean-950/80 text-white hover:text-cyan-400 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Sea Breeze Resort 4K Virtual Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-ocean-950 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Sea Breeze Resort · Paradise Bay</h3>
                <p className="text-sm text-slate-300">A cinematic look into our coastal haven and private coral lagoon.</p>
              </div>
              <button
                onClick={() => {
                  setShowVideoModal(false);
                  navigate('/booking');
                }}
                className="px-6 py-2.5 rounded-full bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-cyan-glow"
              >
                Book This Experience
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3D Floating Boat Modal Viewer */}
      {showBoatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-950/92 backdrop-blur-2xl p-4 animate-fade-in">
          <div className="relative w-full max-w-5xl bg-ocean-900 rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/40 flex flex-col">
            <button
              onClick={() => setShowBoatModal(false)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-ocean-950/80 text-white hover:text-cyan-400 flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 3D Canvas Box */}
            <div className="relative w-full h-[450px] sm:h-[540px] bg-gradient-to-b from-ocean-950/60 to-ocean-950">
              <FloatingBoat3D atmosphere={activeMood} className="w-full h-full" />
            </div>

            {/* Footer Information */}
            <div className="p-6 bg-ocean-950 border-t border-ocean-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">3D Fleet Showcase</span>
                  <span className="text-xs text-cyan-400">· Real-Time Water Physics</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Sea Breeze 65' Luxury Cruiser</h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowBoatModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:text-white"
                >
                  Close Viewer
                </button>
                <button
                  onClick={() => {
                    setShowBoatModal(false);
                    navigate('/booking', { state: { specialOfferTitle: 'Private Yacht Charter' } });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm shadow-gold-glow hover:opacity-95"
                >
                  Reserve Private Charter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wave Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-12 sm:h-16 text-slate-900" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;