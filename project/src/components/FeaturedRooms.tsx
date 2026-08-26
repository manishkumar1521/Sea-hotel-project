import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wifi, Eye, Users, Maximize2, Sparkles, Check, ChevronRight, X, BedDouble, Bath } from 'lucide-react';

interface Room {
  id: number;
  name: string;
  category: 'ocean' | 'villa' | 'penthouse';
  categoryLabel: string;
  image: string;
  gallery: string[];
  price: number;
  originalPrice?: number;
  size: string;
  occupancy: string;
  bed: string;
  tag?: string;
  description: string;
  highlights: string[];
  amenities: string[];
}

const FeaturedRooms = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const rooms: Room[] = [
    {
      id: 1,
      name: 'Presidential Overwater Villa',
      category: 'villa',
      categoryLabel: 'Overwater Villa',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80'
      ],
      price: 649,
      originalPrice: 750,
      size: '1,850 sq.ft / 172 m²',
      occupancy: 'Up to 4 Guests',
      bed: '1 King + 1 Daybed',
      tag: 'Signature Villa',
      description: 'Perched directly above the turquoise lagoon with private glass floor panels, infinity plunge pool, and direct sea access.',
      highlights: ['Direct Lagoon Staircase', 'Private Infinity Plunge Pool', '24/7 Dedicated Butler', 'Sunset Champagne Deck'],
      amenities: ['High-speed Starlink Wi-Fi', 'Dyson Hair Care', 'Hermès Toiletries', 'Nespresso Atelier', 'Bose Sound System']
    },
    {
      id: 2,
      name: 'Panoramic Oceanfront Grand Suite',
      category: 'ocean',
      categoryLabel: 'Oceanfront Suite',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80'
      ],
      price: 389,
      originalPrice: 450,
      size: '1,200 sq.ft / 111 m²',
      occupancy: 'Up to 3 Guests',
      bed: '1 Ultra Plush King',
      tag: 'Most Popular',
      description: 'Expansive wrap-around glass walls framing panoramic coral sea vistas, with freestanding deep-soaking bathtub overlooking the waves.',
      highlights: ['Floor-to-Ceiling Sea Views', 'Marble Freestanding Tub', 'Spacious Private Balcony', 'Pillow Menu (6 choices)'],
      amenities: ['Complimentary High-speed Wi-Fi', 'Smart Climate Control', 'Curated Minibar', '65" OLED Smart TV']
    },
    {
      id: 3,
      name: 'The Crown Royal Penthouse',
      category: 'penthouse',
      categoryLabel: 'Royal Penthouse',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80'
      ],
      price: 899,
      originalPrice: 1100,
      size: '2,600 sq.ft / 241 m²',
      occupancy: 'Up to 6 Guests',
      bed: '2 King Master Bedrooms',
      tag: 'Ultra Luxury',
      description: 'The pinnacle of seaside extravagance with private rooftop terrace, heated jacuzzi, full chef kitchen, and 360° coastal panoramas.',
      highlights: ['Private Rooftop Jacuzzi', 'Private In-Suite Chef Option', 'Dual Master Bathrooms', 'Helicopter Transfer Included'],
      amenities: ['Private Wine Cellar', 'Starlink Premium Wi-Fi', 'VIP Lounge Access', 'Bang & Olufsen Audio']
    },
  ];

  const filteredRooms = activeCategory === 'all' 
    ? rooms 
    : rooms.filter(r => r.category === activeCategory);

  const handleBookRoom = (room: Room) => {
    navigate('/booking', { state: { selectedRoomId: room.id, roomName: room.name } });
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accommodations of Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Featured Suites & Private Villas
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every sanctuary is masterfully positioned to face the turquoise horizon, adorned with artisan craftsmanship and discreet personalized service.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Sanctuaries' },
            { id: 'ocean', label: 'Oceanfront Suites' },
            { id: 'villa', label: 'Overwater Villas' },
            { id: 'penthouse', label: 'Royal Penthouses' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-cyan-500 text-white shadow-cyan-glow'
                  : 'glass-panel-dark text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div 
              key={room.id}
              className="bg-ocean-900/60 rounded-3xl overflow-hidden border border-ocean-800 hover:border-cyan-500/50 shadow-2xl transition-all duration-500 group flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image & Badges */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent"></div>
                
                {/* Status Tag */}
                {room.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-ocean-950/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-xs font-semibold tracking-wide">
                      ✦ {room.tag}
                    </span>
                  </div>
                )}

                {/* Price Pill */}
                <div className="absolute bottom-4 right-4 bg-ocean-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-right">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">From</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-white">${room.price}</span>
                    <span className="text-xs text-slate-300 font-sans">/ night</span>
                  </div>
                </div>

                {/* Quick View Button on Image */}
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ocean-950/70 backdrop-blur-md text-white hover:text-cyan-400 hover:bg-ocean-950 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  title="Quick View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Room Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {room.categoryLabel}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-2">
                    {room.description}
                  </p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-ocean-800/80 mb-5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-cyan-400" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 text-cyan-400" />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-cyan-400" />
                      <span>Luxury Ocean Bath</span>
                    </div>
                  </div>

                  {/* Curated Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {room.highlights.slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 py-3 px-4 rounded-xl border border-cyan-500/40 text-cyan-300 font-semibold text-xs hover:bg-cyan-950/40 transition-colors"
                  >
                    Suite Details
                  </button>
                  <button
                    onClick={() => handleBookRoom(room)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-xs shadow-cyan-glow hover:opacity-95 transition-opacity text-center flex items-center justify-center gap-1"
                  >
                    <span>Reserve</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-cyan-500/40 text-white font-semibold text-sm hover:bg-cyan-500 hover:text-white transition-all shadow-lg group"
          >
            <span>Explore All 18 Suites & Villas</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-950/90 backdrop-blur-xl p-4 animate-fade-in">
          <div className="relative w-full max-w-3xl bg-ocean-900 rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/40 max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ocean-950/80 text-white hover:text-cyan-400 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  {selectedRoom.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {selectedRoom.name}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedRoom.description}
              </p>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-ocean-950/70 border border-ocean-800 text-center">
                <div>
                  <div className="text-xs text-slate-400">Total Area</div>
                  <div className="text-sm font-semibold text-white mt-1">{selectedRoom.size}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Max Capacity</div>
                  <div className="text-sm font-semibold text-white mt-1">{selectedRoom.occupancy}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Bed Configuration</div>
                  <div className="text-sm font-semibold text-white mt-1">{selectedRoom.bed}</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-3">
                  Signature Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedRoom.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-3">
                  Luxury In-Room Amenities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRoom.amenities.map((a, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-ocean-950 border border-ocean-800 text-xs text-slate-300">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-ocean-950 border-t border-ocean-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Nightly Rate</div>
                <div className="text-2xl font-serif font-bold text-white">
                  ${selectedRoom.price} <span className="text-xs font-sans font-normal text-slate-400">/ night</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const room = selectedRoom;
                    setSelectedRoom(null);
                    handleBookRoom(room);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-sm shadow-cyan-glow hover:opacity-95"
                >
                  Reserve This Sanctuary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedRooms;