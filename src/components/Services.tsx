import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, CheckCircle2, ArrowRight, X, Calendar, Phone, MessageSquare, ArrowLeft } from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Close on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const scrollToContact = (serviceTitle?: string) => {
    setSelectedService(null);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="relative z-20 bg-[#080808] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#AA771C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Bespoke Event Offerings
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Comprehensive <br />
            <span className="text-gold-gradient italic font-normal">Wedding &amp; Ceremony Services</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            From divine morning Muhurtha arrangements to monumental reception architecture, we offer fully customizable end-to-end event production.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/60 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />
                  
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] backdrop-blur-md font-bold">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#D4AF37]/10">
                    {service.details.slice(0, 3).map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-[#F5F5F0]/80 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-[#D4AF37]/10 mt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/919449303946?text=${encodeURIComponent(`Hello Surya Event Management, I am interested in your service: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                  title="Inquire on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.6 }}
              onDragEnd={(_e, info) => {
                if (info.offset.y > 75 || info.velocity.y > 400) {
                  setSelectedService(null);
                }
              }}
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#0e0e0e] border border-[#D4AF37]/40 rounded-t-3xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header with Swipe Bar and Exit Options */}
              <div className="sticky top-0 left-0 right-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-[#D4AF37]/30 px-4 py-3 flex items-center justify-between shadow-lg">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-sans uppercase font-bold tracking-wider cursor-pointer transition-all active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                {/* Mobile Drag / Swipe Pill */}
                <div className="flex flex-col items-center cursor-grab active:cursor-grabbing">
                  <div className="w-12 h-1.5 bg-[#D4AF37]/60 hover:bg-[#D4AF37] rounded-full mb-0.5" />
                  <span className="text-[9px] uppercase tracking-widest text-[#F5F5F0]/50 font-sans hidden xs:inline">
                    Swipe down to close
                  </span>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37] hover:brightness-110 text-black text-xs font-sans uppercase font-bold tracking-wider cursor-pointer transition-all shadow-md active:scale-95"
                  title="Close (Esc or swipe down)"
                >
                  <span>Exit</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Modal Cover Image */}
              <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden flex-shrink-0">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/40" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                    Specialized Service Detail
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 md:p-8 space-y-6 flex-1">
                <p className="font-sans text-sm md:text-base text-[#F5F5F0]/80 leading-relaxed font-light">
                  {selectedService.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-serif text-base font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    What Is Included In This Package
                  </h4>
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {selectedService.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-[#D4AF37]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-[#F5F5F0]/90 font-sans">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons with Exit Option */}
                <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-[#D4AF37]/40 text-white hover:text-[#D4AF37] font-sans font-bold text-xs uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back / Exit Details
                  </button>

                  <button
                    onClick={() => scrollToContact(selectedService.title)}
                    className="flex-1 w-full py-3.5 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </button>

                  <a
                    href={`https://wa.me/919449303946?text=${encodeURIComponent(`Hello Surya Event Management, I'd like to discuss the package: ${selectedService.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:bg-[#25D366]/30 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
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
