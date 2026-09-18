import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Home as HomeIcon, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';

interface NotFoundProps {
  onNavigate: (route: PageRoute) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full text-center glass-card p-8 md:p-10 border-white/10 relative overflow-hidden"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/20 blur-3xl rounded-full pointer-events-none" />
        <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 shadow-[0_0_20px_rgba(255,51,51,0.2)]">
          <ShieldAlert size={32} />
        </div>
        <span className="text-xs uppercase tracking-widest font-black text-accent mb-2 block">
          ERROR 404
        </span>
        <h1 className="text-3xl font-black text-white tracking-tight mb-3">
          PAGE NOT FOUND
        </h1>
        <p className="text-secondary-text text-sm leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => onNavigate('/')}
            className="flex-1 py-3 px-5 bg-gradient-to-r from-primary to-accent hover:opacity-90 active:scale-95 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,51,51,0.3)] cursor-pointer"
          >
            <HomeIcon size={18} />
            <span>BACK TO STORE</span>
          </button>
          <button
            onClick={() => window.history.back()}
            className="py-3 px-5 bg-white/5 hover:bg-white/10 active:scale-95 text-white/80 hover:text-white rounded-xl font-semibold text-sm border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>GO BACK</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
