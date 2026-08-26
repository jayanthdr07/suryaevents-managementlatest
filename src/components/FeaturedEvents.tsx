import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MapPin, Users, CheckCircle2, ArrowRight, X, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { FEATURED_EVENTS } from "../data";
import { FeaturedEvent } from "../types";

export default function FeaturedEvents() {
  const [selectedEvent, setSelectedEvent] = useState<FeaturedEvent | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  // Close on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    if (selectedEvent) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent]);

  const openEvent = (event: FeaturedEvent) => {
    setSelectedEvent(event);
    setActiveImageIdx(0);
  };

  return (
    <section
      id="featured"
      className="relative z-20 bg-[#050505] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Real Weddings &amp; Celebrations
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Featured <br />
            <span className="text-gold-gradient italic font-normal">Ceremony Masterpieces</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Take a look inside real events managed by Surya Event Management across iconic venues in Bengaluru, Mysuru, and Karnataka.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Featured Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_EVENTS.map((event, idx) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/60 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Banner Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={event.bannerImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] backdrop-blur-md font-bold">
                    {event.type}
                  </div>

                  {/* Guest Count */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-white/20 rounded-md text-[11px] font-sans text-white backdrop-blur-md">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {event.guestCapacity}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-sans">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.venueStyle}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 font-light leading-relaxed">
                    {event.shortStory}
                  </p>

                  <div className="pt-3 border-t border-[#D4AF37]/10 space-y-2">
                    {event.highlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F5F5F0]/80 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-7 pb-7 pt-2 border-t border-[#D4AF37]/10 mt-2">
                <button
                  onClick={() => openEvent(event)}
                  className="w-full py-3 bg-white/5 border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] text-xs font-sans uppercase tracking-widest font-bold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ImageIcon className="w-4 h-4" />
                  Explore Full Event &amp; Gallery
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Featured Event Story & Gallery Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Close / Exit Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/85 border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer z-30 flex items-center gap-1.5 shadow-2xl backdrop-blur-md text-xs font-sans uppercase font-bold tracking-wider"
                title="Close and exit event details (Esc)"
              >
                <span>Exit</span>
                <X className="w-4 h-4" />
              </button>

              {/* Main Image Stage */}
              <div className="relative h-80 md:h-[420px] w-full overflow-hidden bg-black">
                <img
                  src={selectedEvent.images[activeImageIdx] || selectedEvent.bannerImage}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
                
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-bold">
                      {selectedEvent.type}
                    </span>
                    <span className="px-3 py-1 bg-black/80 border border-white/20 rounded-full text-[10px] font-sans text-white flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      {selectedEvent.venueStyle}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight">
                    {selectedEvent.title}
                  </h2>
                </div>
              </div>

              {/* Thumbnail Gallery Strip */}
              {selectedEvent.images.length > 1 && (
                <div className="px-6 py-4 bg-black/60 border-b border-[#D4AF37]/20 flex gap-3 overflow-x-auto">
                  {selectedEvent.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIdx === idx ? "border-[#D4AF37] scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Body Details */}
              <div className="p-6 md:p-10 space-y-8">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#D4AF37] mb-3">Event Story &amp; Vision</h3>
                  <p className="font-sans text-sm md:text-base text-[#F5F5F0]/80 leading-relaxed font-light">
                    {selectedEvent.story}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#D4AF37]">Execution Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedEvent.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-[#D4AF37]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-[#F5F5F0]/90 font-sans">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA with Exit Button */}
                <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 border border-[#D4AF37]/40 text-white hover:text-[#D4AF37] font-sans font-bold text-xs uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back / Exit Event
                  </button>

                  <a
                    href={`https://wa.me/919449303946?text=${encodeURIComponent(`Hello Surya Event Management, I loved your setup for "${selectedEvent.title}" and would like to inquire for our event.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    Inquire For Similar Setup
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
