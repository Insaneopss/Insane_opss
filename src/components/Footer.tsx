import React from 'react';
import { Instagram, Send } from 'lucide-react';

interface FooterProps {
  onNavigate?: (route: any) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full py-8 px-4 border-t border-white/5 mt-16 bg-black/40">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-5 text-center">
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/im_1nsanex07?stkn=MW5xcmM1ZnRwb25tbA=="
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram @im_1nsanex07"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary-text hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://t.me/Insane_opss"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram @Insane_opss"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary-text hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110"
          >
            <Send size={16} className="fill-current -ml-0.5" />
          </a>
        </div>
        <div>
          <p className="text-secondary-text text-xs font-medium text-center">
            © {new Date().getFullYear()} INSANE. All Rights Reserved. Not affiliated with game developers.
          </p>
        </div>
      </div>
    </footer>
  );
};
