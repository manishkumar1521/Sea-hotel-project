import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Anchor, UtensilsCrossed, Flower2, Plane, Waves, ChevronRight, Clock, Star } from 'lucide-react';

interface Experience {
  id: string;
  icon: any;
  title: string;
  category: string;
  tagline: string;
  image: string;
  duration: string;
  included: string[];
  description: string;
  link: string;
  linkText: string;
}

const ExperienceShowcase = () => {
  const [activeExp, setActiveExp] = useState<string>('yacht');

  const experiences: Record<string, Experience> = {
    yacht: {
      id: 'yacht',
      icon: Anchor,
      title: 'Private Catamaran & Lagoon Charters',
      category: 'Nautical Adventure',
      tagline: 'Sail across secret atolls with private chef and champagne onboard',
      image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
      duration: 'Half Day / Full Day / Sunset Cruise',
      included: ['Private Captain & Crew', 'Dom Pérignon Welcome Champagne', 'Gourmet Seafood Platter', 'Snorkeling Gear & Seabob'],
      description: 'Step aboard our customized 65-foot luxury catamaran. Chart a course along uninhabited barrier islands, dive into crystalline turquoise lagoons, and toast the golden sunset from the deck.',
      link: '/booking',
      linkText: 'Charter Your Yacht'
    },
    dining: {
      id: 'dining',
      icon: UtensilsCrossed,
      title: 'Michelin-Grade Ocean Gastronomy',
      category: 'Culinary Artistry',
      tagline: 'Under-the-stars oceanfront pavilions & fresh-caught seafood creations',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      duration: 'Daily 18:30 - 23:00',
      included: ['7-Course Tasting Menu', 'Master Sommelier Wine Pairing', 'Private Beachfront Table', 'Live Acoustic Harpist'],
      description: 'Executive Chef Aurelien presents innovative coastal cuisine marrying contemporary French techniques with fresh catches from local fishermen and exotic tropical herbs.',
      link: '/restaurant',
      linkText: 'Explore Dining & Reserve Table'
    },
    spa: {
      id: 'spa',
      icon: Flower2,
      title: 'Thalassotherapy & Ocean Wellness',
      category: 'Holistic Rejuvenation',
      tagline: 'Heated mineral seawater baths, volcanic stones, and botanical elixirs',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      duration: '60 - 180 Minutes',
      included: ['Organic Marine Algae Wrap', 'Aromatherapy Vitality Massage', 'Overwater Hydrotherapy Suite', 'Herbal Infusion Tea Ritual'],
      description: 'Harness the restorative power of pristine seawater and mineral-rich botanicals in our open-air overwater wellness pavilions. Let tension dissolve to the sound of soothing waves.',
      link: '/spa',
      linkText: 'Discover Spa Rituals'
    },
    helicopter: {
      id: 'helicopter',
      icon: Plane,
      title: 'Panoramic Helicopter Atoll Tour',
      category: 'Aerial Odyssey',
      tagline: 'A bird’s-eye perspective of Paradise Bay’s living coral reefs',
      image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80',
      duration: '45-Minute Scenic Flight',
      included: ['Resort Helipad Departure', 'Champagne Toast at 5,000 Ft', 'Noise-Cancelling Bose Headsets', 'Complimentary 4K GoPro Video'],
      description: 'Ascend above Paradise Bay for breathtaking aerial views of the vivid turquoise barrier reefs, sunken shipwrecks, and cascading coastal rainforests.',
      link: '/booking',
      linkText: 'Reserve Aerial Tour'
    },
    diving: {
      id: 'diving',
      icon: Waves,
      title: 'Coral Sanctuary & Bioluminescent Dives',
      category: 'Marine Exploration',
      tagline: 'Encounter manta rays, sea turtles, and glowing night plankton',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      duration: '2 - 4 Hours',
      included: ['PADI Master Instructor Guide', 'Top-tier Scubapro Equipment', 'Private Dive Boat', 'Underwater Photo Package'],
      description: 'Explore the hotel’s protected 50-hectare house reef, teeming with over 300 species of vibrant tropical fish, gentle manta rays, and pristine coral gardens.',
      link: '/booking',
      linkText: 'Book Marine Adventure'
    }
  };

  const current = experiences[activeExp];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Moments of Wonder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            The Sea Breeze Signature Experiences
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Beyond luxurious accommodations, immerse yourself in hand-crafted seaside adventures designed exclusively for our guests.
          </p>
        </div>

        {/* Experience Navigation Tabs */}
        <div className="flex justify-start sm:justify-center items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {Object.values(experiences).map((exp) => {
            const Icon = exp.icon;
            const isActive = activeExp === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-glow'
                    : 'glass-panel-dark text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                <span>{exp.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Experience Card (Detailed Split Showcase) */}
        <div className="bg-ocean-950 rounded-3xl overflow-hidden border border-ocean-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] overflow-hidden group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/30 to-transparent"></div>
            
            {/* Top Left Category Tag */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1.5 rounded-full bg-ocean-950/85 backdrop-blur-md text-amber-300 border border-amber-400/30 text-xs font-semibold">
                ✦ {current.category}
              </span>
            </div>

            {/* Bottom Overlay Detail */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-300 glass-panel-dark p-3.5 rounded-2xl border border-white/10">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Clock className="w-4 h-4 text-cyan-400" /> {current.duration}
              </span>
              <span className="flex items-center gap-1 text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" /> Private Concierge Host
              </span>
            </div>
          </div>

          {/* Text & Inclusions */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
                Signature Escape
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                {current.title}
              </h3>
              <p className="text-amber-300/90 text-sm font-medium italic mb-4">
                "{current.tagline}"
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {current.description}
              </p>

              {/* What is Included */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Privilege Inclusions:
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {current.included.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-ocean-800 flex items-center justify-between">
              <Link
                to={current.link}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-sm shadow-cyan-glow hover:opacity-95 transition-opacity text-center flex items-center justify-center gap-2"
              >
                <span>{current.linkText}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
