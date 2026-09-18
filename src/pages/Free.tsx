import React from 'react';
import { motion } from 'motion/react';
import { Download, Zap } from 'lucide-react';
import { AnimatedImage } from '../components/AnimatedImage';
import { PageRoute } from '../types';

interface FreeProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenBuyModal?: (productId: any) => void;
}

export const Free: React.FC<FreeProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center text-center"
    >
      <div className="glass-card p-2 mb-8 max-w-md overflow-hidden group border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_25px_rgba(123,46,218,0.2)] transition-all duration-300 rounded-2xl bg-black/40">
        <AnimatedImage
          src="/free-cover.jpg"
          alt="INSANE Free Sensi Pack"
          theme="purple"
          containerClassName="rounded-xl overflow-hidden"
          className="w-full rounded-xl group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>

      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white uppercase">
          FREE{' '}
          <span className="text-primary drop-shadow-[0_0_15px_rgba(123,46,218,0.6)]">
            SENSI PACK
          </span>
        </h1>
        <p className="text-xl text-secondary-text max-w-xl mx-auto mb-10">
          Get the free version with basic settings to kickstart your aim improvement. Click below to
          access your download folder.
        </p>

        <a
          href="https://drive.google.com/drive/folders/1_k0KnSc-Lqf0nyQt0oxYomhA9Bj4Z3Jm"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-12 py-6 text-xl font-black rounded-2xl text-white bg-purple-600 hover:bg-purple-500 border border-purple-400 shadow-[0_0_30px_rgba(123,46,218,0.5)] hover:shadow-[0_0_45px_rgba(123,46,218,0.8)] transition-all duration-300 cursor-pointer"
          >
            <Download
              size={24}
              className="transition-transform duration-300 group-hover:translate-y-0.5 text-white"
            />
            <span>GET FREE SENSI</span>
          </motion.div>
        </a>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Basic Tuning', desc: 'Essential values for standard devices.' },
            { title: 'Recoil Help', desc: 'Simple adjustments for better spray.' },
            { title: 'Easy Apply', desc: 'Step-by-step guide included.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="glass-card p-6 border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_15px_rgba(123,46,218,0.1)] hover:shadow-[0_10px_20px_rgba(123,46,218,0.25)] transition-all duration-300 rounded-2xl bg-black/40"
            >
              <Zap size={20} className="text-purple-400 mb-3 animate-pulse" />
              <h4 className="font-bold mb-1 text-white">{item.title}</h4>
              <p className="text-secondary-text text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
