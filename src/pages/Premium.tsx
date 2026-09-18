import React, { useState } from 'react';
import { PageRoute } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedImage } from '../components/AnimatedImage';
import { BuyModal } from '../components/BuyModal';
import {
  Zap,
  Sparkles,
  Check,
  Smartphone,
  Shield,
  Target,
  Sliders,
  Clock,
  Flame,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

interface PremiumProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenBuyModal?: (productId: any) => void;
}

export const Premium: React.FC<PremiumProps> = ({ onNavigate, onOpenBuyModal }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('All Devices');

  const faqs = [
    {
      q: 'What Headshot Tutorials Method is included?',
      a: 'You get our exclusive Pro Headshot Tutorial guide breaking down secret rotation drag angles, straight drag speed, and crosshair placement technique (placing crosshair below enemy collar vs beside chest) so your one-tap shots consistently connect for clean red numbers.',
    },
    {
      q: 'What does Deep System Optimisation do for my phone?',
      a: 'Deep System Optimisation unlocks your device’s true hardware potential. We provide exact phone developer settings to reduce touch latency to 0ms, optimize pointer speed, configure touch sampling rate, and clear background RAM cache for stutter-free 90FPS/120FPS gaming.',
    },
    {
      q: 'How will I get my Sensi pack after paying?',
      a: 'Right after your payment is confirmed, we immediately send your custom sensitivity pack, tutorials, and setup guide directly to your Instagram DM or Telegram chat. Delivery takes under 3 minutes!',
    },
    {
      q: 'Is this a hack or mod APK? Will my Free Fire ID get banned?',
      a: 'Never! This is 100% safe and legal. We only provide custom in-game sensitivity numbers, phone developer options, and legitimate dragging tutorials. There are no scripts, no hack files, and no APK mods. Your main account is completely safe with zero risk of bans.',
    },
    {
      q: 'Does this work on my phone model?',
      a: 'Yes! We create custom settings calculated specifically for your exact phone model — whether you play on Xiaomi, POCO, Samsung, Realme, Vivo, OPPO, OnePlus, iPhone, or iPad.',
    },
    {
      q: 'How can I make the payment?',
      a: 'You can pay easily and safely using any Indian UPI app (Google Pay, PhonePe, Paytm, BHIM, or your bank app). Instant delivery right after payment!',
    },
  ];

  const handleOpenModal = () => {
    if (onOpenBuyModal) {
      onOpenBuyModal('premium');
    } else {
      setIsModalOpen(true);
    }
  };

  const bentoFeatures = [
    {
      icon: Target,
      tag: 'TUTORIALS & AIM',
      title: 'Headshot Tutorials & Drag Method',
      desc: 'Secret dragging methods used by pro tournament players. Includes visual tutorials for rotation drag, straight drag, and crosshair placement to lock pure red numbers.',
      points: ['Step-by-step headshot tutorial methods', 'Straight drag & rotation drag mastery', 'Crosshair placement & one-tap timing'],
      glow: 'hover:border-[#FF0000]/70 hover:shadow-[0_0_25px_rgba(255,0,0,0.35)]',
      iconBg: 'bg-[#FF0000]/15 text-[#FF0000]',
    },
    {
      icon: Sliders,
      tag: 'SYSTEM TUNING',
      title: 'Deep System Optimisation',
      desc: 'Hidden phone developer settings & touch response optimizations to unlock zero touch latency, instant swipe response, and smooth 90/120 FPS performance.',
      points: ['Developer options & touch sampling rate tuning', 'Zero touch delay (0ms input response)', 'RAM & background cache cleaning tweaks'],
      glow: 'hover:border-[#FF0000]/70 hover:shadow-[0_0_25px_rgba(255,0,0,0.35)]',
      iconBg: 'bg-[#FF0000]/15 text-[#FF0000]',
    },
    {
      icon: Zap,
      tag: 'CALIBRATION',
      title: 'Custom DPI & Recoil Mastery',
      desc: 'Tested DPI multiplier calculated specifically for your screen dimensions and refresh rate, paired with zero-recoil fire button sizing.',
      points: ['Model-specific DPI values', 'Optimal fire button size & height', 'Stable close & long range recoil control'],
      glow: 'hover:border-[#FF0000]/70 hover:shadow-[0_0_25px_rgba(255,0,0,0.35)]',
      iconBg: 'bg-[#FF0000]/15 text-[#FF0000]',
    },
    {
      icon: ShieldCheck,
      tag: 'ACCOUNT SAFETY',
      title: '100% Anti-Ban Guarantee',
      desc: 'Pure in-game sensitivity sliders and native phone settings only. Zero third-party files, zero scripts, zero mod APKs. 100% safe for your main ID.',
      points: ['Main ID safe forever', 'Tournament & ranked legal', 'Zero scripts or mod files'],
      glow: 'hover:border-[#FF0000]/70 hover:shadow-[0_0_25px_rgba(255,0,0,0.35)]',
      iconBg: 'bg-[#FF0000]/15 text-[#FF0000]',
    },
  ];

  const deliverySteps = [
    {
      step: '01',
      title: 'Quick UPI Payment',
      desc: 'Tap Buy Now and complete the ₹399 payment securely via GPay, PhonePe, or Paytm.',
    },
    {
      step: '02',
      title: 'Share Phone Model',
      desc: 'Send your payment screenshot and exact phone model name to our Instagram or Telegram.',
    },
    {
      step: '03',
      title: 'Get Pack in 3 Mins',
      desc: 'Receive your custom sensi values, DPI setup, Headshot Tutorials, and Deep System Optimisation guide in under 3 minutes.',
    },
  ];

  const brands = [
    'Xiaomi / Redmi',
    'POCO',
    'Realme / Narzo',
    'Samsung Galaxy',
    'iPhone & iPad',
    'Vivo / iQOO',
    'OPPO / OnePlus',
    'Infinix / Tecno',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 py-8 md:py-12"
    >
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="text-center"
        >
          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight transition-transform uppercase"
          >
            INSANE <span className="text-accent">SENSI</span>
          </motion.h1>
          <p className="text-base md:text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto">
            Custom Sensitivity &amp; Headshot Settings (Android &amp; iOS) — Complete with Pro Headshot Tutorials Method, Deep System Optimisation, and zero recoil on any phone.
          </p>
        </motion.div>

        {/* Product Card (Normal Full-Sized Layout) */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          whileHover={{ y: -4, boxShadow: '0 20px 40px -15px rgba(255, 0, 0, 0.35)' }}
          transition={{ duration: 0.3 }}
          className="glass-card-accent overflow-hidden border-2 border-[#FF0000]/40 hover:border-[#FF0000] rounded-2xl md:rounded-3xl bg-black/70 transition-all duration-300 shadow-2xl shadow-red-950/20"
        >
          {/* Full Cover Showcase (Preserving full 1:1 image perfectly) */}
          <div className="p-3 md:p-6 bg-gradient-to-b from-white/[0.04] to-transparent flex items-center justify-center">
            <AnimatedImage
              src="/premium-cover.jpg"
              alt="Premium Sensi"
              theme="accent"
              containerClassName="rounded-xl md:rounded-2xl overflow-hidden aspect-square w-full max-w-md md:max-w-lg shadow-[0_0_35px_rgba(255,0,0,0.3)] border border-[#FF0000]/40"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6">
            {/* Price & Perfectly Centered 60% OFF Pill */}
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-secondary-text font-bold block mb-1">
                  Limited Time Offer
                </span>
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none">₹399</span>
                  <span className="text-lg sm:text-xl text-secondary-text line-through font-medium leading-none">₹999</span>
                  <span className="text-xs sm:text-sm text-[#FF0000] font-semibold leading-none">
                    ($4.80)
                  </span>
                </div>
              </div>

              {/* 60% OFF Pill — Previous glowing glass pill with pure red accent */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-black text-xs sm:text-sm text-red-400 bg-red-950/60 border border-red-500/50 shadow-[0_0_15px_rgba(255,0,0,0.35)] whitespace-nowrap leading-none text-center cursor-default shrink-0"
              >
                60% OFF
              </motion.div>
            </div>

            <motion.button
              onClick={handleOpenModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-glow-accent w-full flex items-center justify-center gap-3 py-4 text-lg font-black tracking-wider uppercase cursor-pointer transition-all shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,0,0,0.8)]"
            >
              <Zap size={22} className="animate-pulse" />
              <span>BUY NOW</span>
            </motion.button>
          </div>
        </motion.div>

        {/* 4-Card Bento Feature Grid */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-black tracking-widest text-accent uppercase">SYSTEM ADVANTAGES</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mt-1">
              Why Top Players Choose Insane Sensi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {bentoFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`p-6 rounded-2xl bg-[#0B0609] border border-white/10 ${item.glow} transition-all duration-300 flex flex-col justify-between cursor-default`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                        <IconComp size={24} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary-text mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-gray-200">
                        <Check size={14} className="text-accent shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3-Step Delivery Roadmap */}
        <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs font-black tracking-widest text-accent uppercase">FAST &amp; SIMPLE</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mt-1">
              How You Get Your Pack In 3 Minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {deliverySteps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="p-5 rounded-2xl bg-black/50 border border-white/10 hover:border-[#FF0000]/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.25)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#FF0000]/60 mb-3 tracking-wider">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compatible Device Selector */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#090406] border border-[#FF0000]/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black tracking-widest text-[#FF0000] uppercase">COMPATIBILITY</span>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-1">
                Custom Calibrated For All Phones
              </h2>
            </div>
            <span className="text-xs text-secondary-text font-medium">
              Calculated specifically for your screen refresh rate
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {brands.map((brand, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedBrand(brand)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                  selectedBrand === brand
                    ? 'bg-red-950/80 border-red-500 text-white shadow-[0_0_18px_rgba(255,0,0,0.4)]'
                    : 'bg-white/[0.02] border-white/10 text-gray-300 hover:border-red-500/40 hover:text-white'
                }`}
              >
                {brand}
              </motion.button>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs text-gray-400">
              Selected: <strong className="text-[#FF0000]">{selectedBrand}</strong> — Exact mathematical DPI &amp; sensitivity calibrated upon order.
            </span>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-red-950/80 via-black to-red-950/80 border-2 border-[#FF0000]/60 shadow-[0_0_35px_rgba(255,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0000]/20 text-[#FF2233] border border-[#FF0000]/40 text-xs font-black uppercase mb-2">
              <Zap size={14} /> Ready to Rank Push?
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase">
              Start Hitting Pure Red Numbers Today
            </h3>
            <p className="text-sm text-secondary-text mt-1">
              One-time payment of ₹399. Lifetime access to your device configuration.
            </p>
          </div>

          <motion.button
            onClick={handleOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow-accent px-8 py-4 rounded-full font-black text-base text-white uppercase tracking-wider shrink-0 cursor-pointer shadow-[0_0_25px_rgba(255,0,0,0.6)]"
          >
            GET ACCESS NOW — ₹399
          </motion.button>
        </motion.div>

        {/* FAQs */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs font-black tracking-widest text-accent uppercase">HAVE QUESTIONS?</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-2xl border border-white/10 bg-[#0A0507] overflow-hidden hover:border-red-500/40 transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-white text-sm md:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`text-accent shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                      size={20}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-white/5"
                      >
                        <div className="p-5 text-secondary-text text-sm leading-relaxed bg-black/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <BuyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="INSANE SENSI PREMIUM"
        price="₹399"
        originalPrice="₹999"
        theme="premium"
      />
    </motion.div>
  );
};
