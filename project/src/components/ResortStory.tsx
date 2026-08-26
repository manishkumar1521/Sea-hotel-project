import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Compass, ShieldCheck, HeartHandshake, ArrowUpRight, Sparkles } from 'lucide-react';

const ResortStory = () => {
  const stats = [
    { value: '500m', label: 'Private White Sand Beach', detail: 'Protected natural coral reef lagoon' },
    { value: '3', label: 'Michelin Star Dining Venues', detail: 'Curated by master executive chefs' },
    { value: '100%', label: 'Oceanfront Suites & Villas', detail: 'Unobstructed sunrise & sunset views' },
    { value: '24/7', label: 'Dedicated Royal Butler Service', detail: 'Bespoke personalized luxury care' },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Sea Breeze Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              A Sanctuary Suspended Between <br />
              <span className="text-gold-gradient italic">Azure Tides</span> and Endless Skies
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Nestled along the most pristine secluded coastline of Paradise Bay, Sea Breeze Hotel is 
              conceived as a timeless sanctuary of barefoot elegance. Here, modern architectural luxury harmonizes 
              with the rhythm of the ocean tides.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every detail—from hand-carved teakwood furnishings to private plunge pools overlooking 
              the coral reef—has been curated for the discerning traveler seeking serenity, gastronomy, and 
              unmatched coastal splendor.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group"
              >
                <span>Discover Our Heritage & Vision</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
                <Award className="w-8 h-8 text-amber-400" />
                <div className="text-xs text-slate-300">
                  <div className="font-semibold text-white">World Luxury Hotel Awards</div>
                  <div>Best Coastal Resort 2024 & 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Layered Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main large image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Sea Breeze Oceanfront Pool & Villas"
                  className="w-full h-96 sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-dark border border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-serif font-bold text-white text-sm">Paradise Bay Lagoon</span>
                    <span className="text-cyan-300">Private Atoll Access</span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 max-w-xs p-5 rounded-2xl glass-panel-dark border border-cyan-500/30 shadow-2xl backdrop-blur-xl hidden sm:block animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                    ★
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Guest Experience Score</div>
                    <div className="text-lg font-bold text-white">4.98 / 5.0 Exceptional</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 italic">
                  "The most serene escape we have experienced in twenty years of world travel."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Four Key Luxury Pillars / Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-800">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-ocean-950/60 border border-ocean-800/80 hover:border-cyan-500/40 transition-all group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-cyan-400 mb-2 group-hover:text-amber-300 transition-colors">
                {stat.value}
              </div>
              <h4 className="text-base font-semibold text-white mb-1">{stat.label}</h4>
              <p className="text-xs text-slate-400">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResortStory;
