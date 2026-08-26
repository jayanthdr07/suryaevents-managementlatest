import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Quote, Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="clients"
      className="relative z-20 bg-[#050505] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background ambient orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Voices of Trust
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Loved by Families <br />
            <span className="text-gold-gradient italic font-normal">Across South India</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Read firsthand experiences from families who entrusted their most sacred wedding ceremonies and milestones to Surya Event Management.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Carousel / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 hover:bg-white/[0.08] transition-all duration-300 relative group shadow-xl"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/25 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-sm md:text-base text-[#F5F5F0]/90 leading-relaxed italic font-normal">
                  "{t.review}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-6 border-t border-[#D4AF37]/10 flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/30 flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.clientName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    {t.clientName}
                  </h4>
                  <p className="text-[11px] text-[#D4AF37] font-sans">
                    {t.eventType}
                  </p>
                  <p className="text-[10px] text-[#F5F5F0]/50 font-sans flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
