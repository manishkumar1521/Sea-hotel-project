import React from 'react';
import { Sparkles, Waves, UtensilsCrossed, Dumbbell, ShieldCheck, HeartHandshake, Wine, Compass, Sun, Star } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Thalassotherapy & Hydro-Spa',
      tag: 'Forbes Award Winner',
      description: 'Heated mineral-rich seawater pools, ocean-mist inhalation chambers, and botanical body polishes.',
      perk: 'Complimentary 30-min welcome hydrotherapy'
    },
    {
      icon: Waves,
      title: 'Private White Sand Lagoon',
      tag: 'Exclusive Access',
      description: '500 meters of pristine protected beachfront with cushioned daybeds, chilled towel service, and reef snorkeling.',
      perk: 'Direct water cabana butler service'
    },
    {
      icon: UtensilsCrossed,
      title: 'Michelin-Grade Ocean Dining',
      tag: 'Culinary Excellence',
      description: 'Three world-class oceanfront pavilions showcasing fresh line-caught seafood and vintage champagne pairings.',
      perk: 'Daily artisanal gourmet breakfast included'
    },
    {
      icon: Wine,
      title: 'Sommelier’s Underground Cellar',
      tag: '1,500+ Rare Vintages',
      description: 'Subterranean tasting vaults featuring rare Grand Cru wines, aged cognacs, and bespoke evening tastings.',
      perk: 'Nightly sunset wine & cheese tastings'
    },
    {
      icon: Dumbbell,
      title: 'Ocean-Panorama Wellness Center',
      tag: 'Technogym & Yoga',
      description: 'State-of-the-art cardiovascular studio facing the turquoise tide with sunrise Vinyasa yoga on the jetty.',
      perk: 'Personal training & Pilates reformer sessions'
    },
    {
      icon: ShieldCheck,
      title: 'Discreet 24/7 Royal Butler',
      tag: 'Unmatched Service',
      description: 'Dedicated private butler to arrange unpacking, private yacht charters, bespoke excursions, and in-suite dining.',
      perk: 'Dedicated WhatsApp direct concierge line'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
            <span>Uncompromising Hospitality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            World-Class Resort Privileges
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every moment at Sea Breeze is elevated by effortless luxury, tailored attention, and an unwavering commitment to your serenity.
          </p>
        </div>

        {/* 6-Grid Luxury Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index} 
                className="bg-ocean-900/50 p-8 rounded-3xl border border-ocean-800 hover:border-cyan-500/50 shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 transition-all duration-300 shadow-cyan-glow">
                      <Icon className="h-7 w-7 text-cyan-300 group-hover:text-ocean-950 transition-colors" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                      {highlight.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {highlight.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-ocean-800/80 flex items-center gap-2 text-xs text-cyan-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{highlight.perk}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;