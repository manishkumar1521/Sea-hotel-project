import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingBoat3D from './FloatingBoat3D';
import { Anchor, Compass, Sparkles, ShieldCheck, ArrowRight, Sun, Sunset, Moon, Gauge, Users, BedDouble, Award } from 'lucide-react';

const YachtExperience3D = () => {
  const navigate = useNavigate();
  const [atmosphere, setAtmosphere] = useState<'noon' | 'sunset' | 'twilight'>('sunset');

  const yachtSpecs = [
    { label: 'Length & Beam', value: '65 Ft / 19.8 M', icon: Anchor },
    { label: 'Cruising Speed', value: '28 Knots Top Speed', icon: Gauge },
    { label: 'Guest Capacity', value: '12 Day / 6 Overnight', icon: Users },
    { label: 'Luxury Staterooms', value: '3 En-Suite Master Cabins', icon: BedDouble },
  ];

  return (
    <section className="py-24 bg-ocean-950 text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-cyan-glow">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Interactive 3D Fleet Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            The Sea Breeze 65' Luxury Yacht
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience our flagship ocean cruiser in interactive real-time 3D. Glide across gentle coral lagoon waves and chart your private island charter.
          </p>
        </div>

        {/* Atmosphere Lighting Switcher */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-8">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline mr-2">
            3D Atmosphere:
          </span>
          <button
            onClick={() => setAtmosphere('noon')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              atmosphere === 'noon'
                ? 'bg-cyan-500 text-white shadow-cyan-glow'
                : 'glass-panel-dark text-slate-300 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" /> Azure Noon
          </button>
          <button
            onClick={() => setAtmosphere('sunset')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              atmosphere === 'sunset'
                ? 'bg-amber-500 text-slate-950 shadow-gold-glow font-bold'
                : 'glass-panel-dark text-slate-300 hover:text-white'
            }`}
          >
            <Sunset className="w-3.5 h-3.5" /> Golden Sunset
          </button>
          <button
            onClick={() => setAtmosphere('twilight')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              atmosphere === 'twilight'
                ? 'bg-indigo-600 text-white shadow-luxury'
                : 'glass-panel-dark text-slate-300 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5" /> Twilight Glow
          </button>
        </div>

        {/* Main 3D Stage & Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Canvas Box */}
          <div className="lg:col-span-8 bg-ocean-900/60 rounded-3xl p-2 sm:p-4 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
            <FloatingBoat3D 
              atmosphere={atmosphere} 
              className="w-full h-[400px] sm:h-[500px] bg-gradient-to-b from-ocean-950/40 to-ocean-950/80" 
            />
          </div>

          {/* Specifications & Charter Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-ocean-900/70 border border-ocean-800 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-semibold">
                    ✦ Flagship Vessel
                  </span>
                  <span className="text-amber-300 text-xs font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> RINA Certified
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Azure Horizon 65
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Equipped with expansive teakwood decks, flybridge champagne lounge, and underwater LED night lights for bioluminescent coral viewings.
                </p>

                {/* Specs Grid */}
                <div className="space-y-3 mb-6">
                  {yachtSpecs.map((spec, i) => {
                    const Icon = spec.icon;
                    return (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-ocean-950/80 border border-ocean-800/80 text-xs">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Icon className="w-4 h-4 text-cyan-400" />
                          <span>{spec.label}</span>
                        </div>
                        <span className="font-semibold text-white">{spec.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => navigate('/booking', { state: { specialOfferTitle: 'Private Yacht Charter' } })}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-sm shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Charter This Vessel</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center">
                  <span className="text-[11px] text-slate-400">
                    Complimentary for Presidential Villa & Royal Penthouse guests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtExperience3D;
