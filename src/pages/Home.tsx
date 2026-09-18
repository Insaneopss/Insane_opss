import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HomeProps {
  onNavigate: (route: PageRoute) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 py-6 md:py-8 space-y-6"
    >
      {/* Top Hero Banner Card */}
      <motion.div
        whileHover={{ y: -3 }}
        className="rounded-2xl md:rounded-3xl border border-[#FF0000]/60 shadow-[0_0_35px_rgba(255,0,0,0.35)] bg-[#090608] relative overflow-hidden transition-all duration-300 min-h-[280px] md:min-h-[320px] flex items-center"
      >
        {/* Seamless Right Hero Graphic with soft organic gradient mask (no black film over the art) */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/4 md:w-3/5 lg:w-[58%] h-full pointer-events-none overflow-hidden flex items-center justify-end">
          <img
            src="/hero-banner.jpg"
            alt="INSANE Demon Artwork"
            className="w-full h-full object-cover object-[92%_center]"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 42%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 42%)',
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Left Text Content */}
        <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center items-start max-w-xl">
          <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#FF0000]/60 bg-black p-0.5 shadow-[0_0_18px_rgba(255,0,0,0.4)] mb-4 shrink-0">
            <img
              src="/premium-cover.jpg"
              alt="INSANE"
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            INSA<span className="text-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">NE</span>
          </h2>

          <p className="text-secondary-text text-sm md:text-base font-medium mt-3 max-w-sm sm:max-w-md leading-relaxed">
            Custom in-game sensitivity and touch optimizations for Android &amp; iOS devices.
          </p>

          <button
            onClick={() => onNavigate('/premium')}
            className="mt-6 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-red-950/50 hover:bg-red-900/60 border border-red-500/70 hover:border-red-400 flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_20px_rgba(255,26,42,0.35)] hover:shadow-[0_0_30px_rgba(255,26,42,0.6)] cursor-pointer active:scale-98"
          >
            <span>View Details</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Bottom Grid: 2 Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: PREMIUM SENSI */}
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-[#FF0000]/60 shadow-[0_0_25px_rgba(255,0,0,0.3)] hover:shadow-[0_0_35px_rgba(255,0,0,0.55)] bg-[#080507] p-6 md:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
        >
          <div>
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#FF0000]/60 bg-black p-0.5 shadow-[0_0_15px_rgba(255,0,0,0.35)] shrink-0">
                <img
                  src="/premium-cover.jpg"
                  alt="Premium Sensi"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="bg-[#FF0000]/15 text-[#FF1122] border border-[#FF0000]/60 text-[11px] font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-[0_0_12px_rgba(255,0,0,0.3)]">
                HOT RELEASE
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2 tracking-tight">
              PREMIUM{' '}
              <span className="text-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
                SENSI
              </span>
            </h3>

            <p className="text-secondary-text text-sm font-medium mb-8 leading-relaxed">
              Custom in-game sensitivity and touch optimizations for Android &amp; iOS devices.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/premium')}
            className="w-full py-3.5 px-4 rounded-full font-bold text-sm text-white bg-red-950/40 hover:bg-red-900/60 border border-red-500/70 hover:border-red-400 flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(255,26,42,0.25)] hover:shadow-[0_0_25px_rgba(255,26,42,0.5)] cursor-pointer active:scale-98"
          >
            <span>View Details</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Card 2: FREE SENSI */}
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-purple-600/60 shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] bg-[#07050A] p-6 md:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
        >
          <div>
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-purple-500/50 bg-black p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0">
                <img
                  src="/free-cover.jpg"
                  alt="Free Sensi"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="bg-purple-950/60 text-purple-300 border border-purple-500/50 text-[11px] font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                FREE ACCESS
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2 tracking-tight">
              FREE{' '}
              <span className="text-[#9333EA] drop-shadow-[0_0_12px_rgba(147,51,234,0.7)]">
                SENSI
              </span>
            </h3>

            <p className="text-secondary-text text-sm font-medium mb-8 leading-relaxed">
              Free basic sensitivity setup with instant access for all devices.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/free')}
            className="w-full py-3.5 px-4 rounded-full font-bold text-sm text-white bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/70 hover:border-purple-400 flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] cursor-pointer active:scale-98"
          >
            <span>View Details</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
