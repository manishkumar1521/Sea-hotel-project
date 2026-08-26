import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Waves, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Award, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-ocean-950 text-white relative border-t border-ocean-800">
      {/* Luxury Awards Ribbon */}
      <div className="border-b border-ocean-800/80 bg-ocean-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-semibold text-slate-200">Forbes 5-Star Luxury Resort 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-slate-200">Condé Nast Gold List Winner</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-slate-200">Global Marine Eco-Sanctuary Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-semibold text-slate-200">TripAdvisor Travelers’ Choice Best of Best</span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Resort Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-cyan-glow">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-white tracking-wide block leading-none">
                  SEA BREEZE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-cyan-400 uppercase font-sans font-semibold">
                  Luxury Ocean Resort
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              A private coastal sanctuary situated along the turquoise lagoon of Paradise Bay. Unmatched architectural beauty, Michelin-starred gastronomy, and deeply intuitive hospitality.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-ocean-900 border border-ocean-700 flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-ocean-900 border border-ocean-700 flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-ocean-900 border border-ocean-700 flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              The Resort
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors">Home Experience</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-cyan-400 transition-colors">Heritage & Vision</Link></li>
              <li><Link to="/rooms" className="text-slate-300 hover:text-cyan-400 transition-colors">Suites & Villas</Link></li>
              <li><Link to="/restaurant" className="text-slate-300 hover:text-cyan-400 transition-colors">Ocean Dining</Link></li>
              <li><Link to="/spa" className="text-slate-300 hover:text-cyan-400 transition-colors">Thalasso Spa</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-cyan-400 transition-colors">Resort Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Concierge Desk
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-1" />
                <span>123 Oceanfront Boulevard, Paradise Bay Coral Atoll</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-cyan-400 transition-colors font-medium">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:concierge@seabreezehotel.com" className="hover:text-cyan-400 transition-colors">
                  concierge@seabreezehotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Exclusive Gazette
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Subscribe to receive private invitations, seasonal privilege codes, and luxury travel memoirs.
            </p>
            {isSubscribed ? (
              <div className="p-4 rounded-xl bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Thank you. You have been added to our VIP Guest Directory.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-ocean-900 border border-ocean-700 rounded-xl focus:outline-none focus:border-cyan-400 text-white text-xs placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow-cyan-glow hover:opacity-95 transition-opacity"
                >
                  Join VIP Directory
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-ocean-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; 2025 Sea Breeze Hotel & Luxury Ocean Resort. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Luxury Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Marine Conservation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;