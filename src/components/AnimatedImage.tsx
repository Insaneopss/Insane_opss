import React, { useState, memo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
  theme?: 'red' | 'purple' | 'accent' | 'default';
  aspectRatio?: string;
}

const THEMES = {
  red: {
    bg: 'bg-gradient-to-br from-red-950/40 via-[#120507] to-black',
    glow: 'bg-red-500/10',
    shimmer: 'via-red-500/15',
    spinner: 'text-[#FF1744]',
    border: 'border-red-500/20',
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-950/40 via-[#10061A] to-black',
    glow: 'bg-purple-500/10',
    shimmer: 'via-purple-500/15',
    spinner: 'text-purple-400',
    border: 'border-purple-500/20',
  },
  accent: {
    bg: 'bg-gradient-to-br from-red-950/30 via-[#13080A] to-black',
    glow: 'bg-accent/10',
    shimmer: 'via-accent/15',
    spinner: 'text-accent',
    border: 'border-accent/20',
  },
  default: {
    bg: 'bg-gradient-to-br from-white/5 via-white/[0.02] to-black',
    glow: 'bg-white/5',
    shimmer: 'via-white/10',
    spinner: 'text-white/60',
    border: 'border-white/10',
  },
};

export const AnimatedImage = memo(
  ({
    src,
    alt,
    className = '',
    containerClassName = '',
    fallbackSrc,
    theme = 'default',
    aspectRatio,
  }: AnimatedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);

    const activeTheme = THEMES[theme] || THEMES.default;

    const handleError = () => {
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      } else {
        setHasError(true);
      }
    };

    return (
      <div className={`relative overflow-hidden ${aspectRatio || ''} ${containerClassName}`}>
        <AnimatePresence>
          {!isLoaded && !hasError && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 z-10 ${activeTheme.bg} flex items-center justify-center`}
            >
              <div className={`absolute inset-0 ${activeTheme.glow} blur-xl animate-pulse`} />
              <div
                className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${activeTheme.shimmer} to-transparent animate-shimmer`}
              />
              <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                <Loader2 className={`w-7 h-7 ${activeTheme.spinner} animate-spin`} />
                <span className="text-[10px] uppercase font-black tracking-widest text-white/40 animate-pulse">
                  Loading...
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <img
          src={currentSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          referrerPolicy="no-referrer"
          className={`transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[0.97] blur-sm'
          } ${className}`}
        />
      </div>
    );
  }
);

AnimatedImage.displayName = 'AnimatedImage';
