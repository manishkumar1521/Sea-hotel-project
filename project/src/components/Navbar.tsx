import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves, Phone, Sparkles, Compass, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Resort' },
    { path: '/rooms', label: 'Suites & Villas' },
    { path: '/restaurant', label: 'Dining' },
    { path: '/spa', label: 'Thalasso Spa' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Concierge' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Luxury Announcement & Concierge Strip */}
      <div className="bg-ocean-950/90 text-slate-300 text-xs py-1.5 px-4 border-b border-ocean-800/60 hidden lg:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Forbes 5-Star Oceanfront Resort & Spa
            </span>
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Compass className="w-3.5 h-3.5" /> Paradise Bay · 28°C Sunny Skies
            </span>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Best Rate Guarantee
            </span>
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-1.5 text-white hover:text-cyan-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> VIP Concierge: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-ocean-950/95 backdrop-blur-xl shadow-2xl border-b border-ocean-800/80 py-3' 
            : 'bg-gradient-to-b from-ocean-950/80 via-ocean-950/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-ocean-900 flex items-center justify-center shadow-cyan-glow group-hover:scale-105 transition-transform duration-300">
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
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
                    isActive(link.path)
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-300 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Action CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/booking"
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-gold-glow"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-300 to-cyan-400 rounded-full animate-shimmer"></span>
                <span className="relative block px-6 py-2.5 rounded-full bg-ocean-900 text-white text-sm font-semibold tracking-wide transition-colors group-hover:bg-ocean-800">
                  <span className="text-gold-gradient font-bold mr-1">✦</span> Reserve Stay
                </span>
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-ocean-900/80 text-white hover:text-cyan-400 focus:outline-none border border-ocean-700/50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-ocean-950/98 backdrop-blur-2xl border-b border-ocean-800 px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-fade-in">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-800/40 font-semibold'
                      : 'text-slate-200 hover:text-cyan-400 hover:bg-ocean-900/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-ocean-800 flex flex-col gap-3">
              <a 
                href="tel:+15551234567" 
                className="flex items-center justify-center gap-2 py-2 text-xs text-slate-300"
              >
                <Phone className="w-4 h-4 text-cyan-400" /> VIP Concierge: +1 (555) 123-4567
              </a>
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-cyan-glow hover:opacity-95 transition-opacity"
              >
                Reserve Your Stay
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;