import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Tag, Clock, Check, ChevronRight, Gift } from 'lucide-react';

interface Offer {
  id: string;
  title: string;
  badge: string;
  discount: string;
  duration: string;
  image: string;
  price: string;
  originalPrice: string;
  inclusions: string[];
  limitedText: string;
}

const SpecialOffers = () => {
  const navigate = useNavigate();

  const offers: Offer[] = [
    {
      id: 'honeymoon',
      title: 'The Azure Romance & Honeymoon Escape',
      badge: 'Most Romantic',
      discount: 'Save 25%',
      duration: '3 Nights / 4 Days',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      price: '$1,750',
      originalPrice: '$2,350',
      limitedText: 'Only 3 packages available this month',
      inclusions: [
        'Overwater Villa with sunset plunge pool',
        'Private 5-course beachfront candlelight dinner',
        '90-min couple’s aromatic marine massage',
        'Daily floating champagne breakfast in your pool'
      ]
    },
    {
      id: 'wellness',
      title: 'Holistic Thalasso & Rejuvenation Retreat',
      badge: 'Wellness Focus',
      discount: 'Save 20%',
      duration: '4 Nights / 5 Days',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      price: '$2,150',
      originalPrice: '$2,690',
      limitedText: 'Includes full spa access pass',
      inclusions: [
        'Oceanfront Deluxe Suite with mineral bath',
        'Daily personalized hydrotherapy sessions',
        'Sunrise jetty yoga & Tibetan sound baths',
        'Clean culinary dining menu crafted by nutritionists'
      ]
    },
    {
      id: 'family',
      title: 'The Grand Royal Villa Family Odyssey',
      badge: 'Family & Group',
      discount: 'Save 30%',
      duration: '5 Nights / 6 Days',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      price: '$3,800',
      originalPrice: '$5,400',
      limitedText: 'Complimentary private airport transfer',
      inclusions: [
        'Two-Bedroom Royal Beachfront Villa',
        'Half-day private catamaran sailing trip',
        'Junior Marine Biologist coral reef academy',
        'Unlimited in-suite family dining with private chef'
      ]
    }
  ];

  const handleClaimOffer = (offer: Offer) => {
    navigate('/booking', {
      state: {
        specialOfferId: offer.id,
        specialOfferTitle: offer.title,
      }
    });
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Limited Seasonal Privileges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Curated Escapes & Exclusive Packages
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience the finest moments of Sea Breeze with our bespoke all-inclusive packages crafted for unforgettable getaways.
          </p>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-ocean-950 rounded-3xl overflow-hidden border border-ocean-800 hover:border-amber-400/50 shadow-2xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image & Discount Badge */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-ocean-950/90 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-400/40">
                    ✦ {offer.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-xs font-bold shadow-gold-glow">
                    {offer.discount}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 glass-panel-dark px-3 py-2 rounded-xl">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> {offer.duration}
                  </span>
                  <span className="text-amber-300 font-medium">{offer.limitedText}</span>
                </div>
              </div>

              {/* Offer Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    {offer.title}
                  </h3>

                  {/* Pricing Box */}
                  <div className="flex items-baseline gap-2 mb-6 p-3.5 rounded-2xl bg-ocean-900/60 border border-ocean-800">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {offer.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {offer.originalPrice}
                    </span>
                    <span className="text-xs text-slate-300 ml-auto font-medium">
                      All-Inclusive Package
                    </span>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Package Privileges:
                    </div>
                    {offer.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Claim CTA */}
                <button
                  onClick={() => handleClaimOffer(offer)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-sm shadow-gold-glow hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Reserve This Package</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
