import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Instagram, Send, ShieldCheck, CheckCircle2, QrCode } from 'lucide-react';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  price?: string;
  originalPrice?: string;
  theme?: string;
}

export const BuyModal: React.FC<BuyModalProps> = ({
  isOpen,
  onClose,
  title = 'PREMIUM SENSI PACK',
  price = '₹399',
  originalPrice = '₹999',
}) => {
  const [paymentDone, setPaymentDone] = useState(false);

  const themeClasses = {
    border: 'border-accent/40',
    shadow: 'shadow-[0_0_50px_rgba(255,0,0,0.3)]',
    topGlow: 'via-accent',
    ambientGlow: 'bg-accent/10',
    badge: 'bg-accent/10 border-accent/30 text-accent',
    price: 'text-accent',
  };

  const handleClose = () => {
    setPaymentDone(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className={`relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#0A0A0F] border ${themeClasses.border} rounded-2xl p-5 sm:p-7 ${themeClasses.shadow} overflow-hidden z-10`}
          >
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent ${themeClasses.topGlow} to-transparent`} />
            <div className={`absolute top-0 right-0 w-32 h-32 ${themeClasses.ambientGlow} rounded-full blur-2xl pointer-events-none`} />
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-secondary-text hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-5">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-3 ${themeClasses.badge}`}>
                <Sparkles size={12} /> Direct Instant Order
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-1">{title}</h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className={`text-3xl font-black ${themeClasses.price}`}>{price}</span>
                {originalPrice && <span className="text-lg text-secondary-text line-through opacity-60">{originalPrice}</span>}
              </div>
            </div>

            {!paymentDone ? (
              <>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 text-white font-bold text-base mb-1">
                    <QrCode size={19} className="text-accent" /> Step 1: Pay ₹399
                  </div>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    Scan the QR code below and complete your ₹399 payment. Then take a screenshot of the successful payment.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-3 sm:p-4 mx-auto w-fit shadow-xl shadow-black/30 border border-white/10">
                  <img
                    src="/payment-qr.jpg"
                    alt="Payment QR code for ₹399"
                    className="block w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-lg"
                  />
                </div>

                <div className="mt-4 mb-5 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
<<<<<<< HEAD
                  <p className="text-sm text-white font-semibold">After payment, please take a screenshot of the successful payment.</p>
                  <p className="text-xs text-secondary-text mt-1">DM options will appear after you confirm the payment step.</p>
=======
                  <p className="text-sm text-white font-semibold">Payment ke baad screenshot zaroor lena.</p>
                  <p className="text-xs text-secondary-text mt-1">DM options payment confirmation step ke baad hi visible honge.</p>
>>>>>>> 8b95e48f31370c791796fd400e7f6b0c130a1612
                </div>

                <button
                  type="button"
                  onClick={() => setPaymentDone(true)}
                  className="w-full py-3.5 px-5 rounded-xl font-black text-white bg-accent hover:opacity-95 shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <CheckCircle2 size={20} />
                  PAYMENT DONE — SHOW DM OPTIONS
                </button>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 mb-5 text-center">
                  <CheckCircle2 size={28} className="mx-auto text-green-400 mb-2" />
                  <p className="text-white font-bold">Payment step completed.</p>
                  <p className="text-secondary-text text-sm mt-1 leading-relaxed">
<<<<<<< HEAD
                    Send your payment screenshot and exact phone model to Instagram or Telegram. After verification, your Premium Sensi Pack/file will be provided.
=======
                    Ab payment ka screenshot aur apna exact phone model Instagram ya Telegram par bhejo. Verification ke baad Premium Sensi Pack/file provide ki jayegi.
>>>>>>> 8b95e48f31370c791796fd400e7f6b0c130a1612
                  </p>
                </div>

                <div className="text-center mb-3">
<<<<<<< HEAD
                  <p className="text-white font-bold">Step 2: Send Screenshot</p>
                  <p className="text-secondary-text text-xs mt-1">Choose one of the DM options below and submit your payment screenshot.</p>
=======
                  <p className="text-white font-bold">Step 2: Screenshot Send Karo</p>
                  <p className="text-secondary-text text-xs mt-1">Neeche kisi ek DM option par jao aur payment screenshot submit karo.</p>
>>>>>>> 8b95e48f31370c791796fd400e7f6b0c130a1612
                </div>

                <div className="space-y-3 mb-5">
                  <a
                    href="https://www.instagram.com/im_1nsanex07?stkn=MW5xcmM1ZnRwb25tbA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="w-full py-3.5 px-4 sm:px-5 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-pink-500/20 transition-all flex items-center justify-between gap-3 group hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform"><Instagram size={22} className="text-white" /></div>
                      <div className="text-left"><div className="text-sm sm:text-base font-extrabold tracking-wide text-white leading-tight">Send on Instagram</div><div className="text-xs font-medium text-white/80">@im_1nsanex07</div></div>
                    </div>
                    <div className="shrink-0 bg-white/20 hover:bg-white/25 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-sm">DM Now</div>
                  </a>
                  <a
                    href="https://t.me/Insane_opss"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="w-full py-3.5 px-4 sm:px-5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-95 shadow-lg shadow-sky-500/20 transition-all flex items-center justify-between gap-3 group hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform"><Send size={20} className="text-white fill-white ml-[-1px]" /></div>
                      <div className="text-left"><div className="text-sm sm:text-base font-extrabold tracking-wide text-white leading-tight">Send on Telegram</div><div className="text-xs font-medium text-white/80">@Insane_opss</div></div>
                    </div>
                    <div className="shrink-0 bg-white/20 hover:bg-white/25 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-sm">DM Now</div>
                  </a>
                </div>
              </motion.div>
            )}

            <div className="flex items-center justify-center gap-2 text-xs text-secondary-text bg-white/2 border border-white/5 py-2.5 px-4 rounded-xl">
              <ShieldCheck size={16} className="text-green-400 shrink-0" />
<<<<<<< HEAD
              <span>Delivery after payment screenshot verification</span>
=======
              <span>Payment screenshot verification ke baad delivery</span>
>>>>>>> 8b95e48f31370c791796fd400e7f6b0c130a1612
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
