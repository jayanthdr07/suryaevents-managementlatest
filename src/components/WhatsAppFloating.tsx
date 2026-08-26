import { useState, useEffect } from "react";
import { MessageSquare, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Quick Menu Popover */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="p-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#D4AF37]/40 rounded-2xl shadow-2xl space-y-3 w-64"
          >
            <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold font-sans">
                Surya Quick Contact
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-[#F5F5F0]/60 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href="https://wa.me/919449303946?text=Hello%20Surya%20Event%20Management%2C%20I%20would%20like%20to%20inquire%20about%20event%20planning."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-white transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 fill-black" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white font-sans">Chat on WhatsApp</p>
                <p className="text-[10px] text-[#25D366]">Instant response</p>
              </div>
            </a>

            <a
              href="tel:+919449303946"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-[#D4AF37]/15 border border-[#D4AF37]/20 text-white transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white font-sans">Call Direct Desk</p>
                <p className="text-[10px] text-[#D4AF37]">+91 9449303946</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] border-2 border-white/20 hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer relative"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-black animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-black" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </button>
    </div>
  );
}
