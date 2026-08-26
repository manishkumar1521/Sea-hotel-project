import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, X, ExternalLink, Sparkles } from 'lucide-react';

interface PhotoItem {
  id: number;
  image: string;
  author: string;
  location: string;
  caption: string;
  likes: string;
}

const InstagramGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      author: '@wanderlust_claire',
      location: 'Overwater Villa 07',
      caption: 'Morning coffee with nothing but endless turquoise in sight ☕🌊 #SeaBreezeMoments #LuxuryEscape',
      likes: '1,420'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      author: '@matthew.travels',
      location: 'Paradise Bay Beach',
      caption: 'The golden hour light hits differently when you’re barefoot in paradise ✨ #BeachVibes',
      likes: '2,890'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      author: '@epicurean_journeys',
      location: 'The Azure Ocean Pavilion',
      caption: 'Fresh line-caught lobster and aged Krug vintage under the stars 🦞🍾 #FineDining',
      likes: '3,110'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      author: '@elena_voyages',
      location: 'Main Infinity Horizons Pool',
      caption: 'Where the pool ends and the ocean begins 🏊‍♀️💙 @SeaBreezeResort #ParadiseFound',
      likes: '4,520'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      author: '@ocean_explorer_alex',
      location: 'House Reef Lagoon',
      caption: 'Swam with three giant sea turtles on this morning’s house reef dive 🐢🤿 #MarineLife',
      likes: '1,980'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      author: '@sophia_lifestyle',
      location: 'Sunset Jetty Bar',
      caption: 'Unfiltered sunset bliss. Truly one of the world’s most magical retreats 🌅 #SeaBreezeMoments',
      likes: '5,210'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Instagram className="w-3.5 h-3.5" />
              <span>#SeaBreezeMoments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-2">
              Captured in Paradise
            </h2>
            <p className="text-slate-300 text-base">
              Follow our community of discerning travelers and share your unforgettable memories.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel-dark text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-cyan-400" />
            <span>Follow @SeaBreezeResort</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* 6-Photo Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-ocean-800 shadow-lg"
            >
              <img
                src={photo.image}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-ocean-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-xs text-white">
                <span className="font-semibold text-cyan-300 truncate">{photo.author}</span>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> {photo.likes}
                  </span>
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-950/90 backdrop-blur-xl p-4 animate-fade-in">
          <div className="relative w-full max-w-2xl bg-ocean-900 rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/30">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ocean-950/80 text-white hover:text-cyan-400 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-ocean-950 text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-bold text-white text-base">{selectedPhoto.author}</h4>
                  <p className="text-xs text-cyan-400">{selectedPhoto.location}</p>
                </div>
                <div className="flex items-center gap-1.5 text-rose-400 text-sm font-semibold">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{selectedPhoto.likes} likes</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramGallery;
