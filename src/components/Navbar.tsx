import React, { useState } from 'react';
import { PageRoute } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { name: string; path: PageRoute; badge?: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Premium Sensi', path: '/premium' },
    { name: 'Free Sensi', path: '/free' },
  ];

  const handleLinkClick = (path: PageRoute) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full py-5 px-4 md:px-8 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#FF0000]/50 bg-black p-0.5 shadow-[0_0_15px_rgba(255,0,0,0.4)] shrink-0">
            <img
              src="/premium-cover.jpg"
              alt="INSANE"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            INSA<span className="text-[#FF0000]">NE</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.path;

            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`relative px-3 py-1.5 font-bold text-sm transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none ${
                  isActive ? 'text-white font-extrabold' : 'text-secondary-text hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="bg-primary/30 text-primary border border-primary/40 text-[9px] font-black px-1.5 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="header-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Hamburger Toggle Button (mobile only) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 text-white/90 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:border-white/25 cursor-pointer focus:outline-none transition-all shadow-sm flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#0D0B14]/95 backdrop-blur-xl mt-3 py-4 px-4 space-y-2 rounded-b-2xl shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.path;

              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-primary/20 text-white border border-primary/30'
                      : 'text-secondary-text hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-primary text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
