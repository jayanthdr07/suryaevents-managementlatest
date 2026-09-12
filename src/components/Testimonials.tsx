import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Sparkles, Quote, Star, MapPin, Play, Pause, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "../data";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triple the array to create a seamless infinite rolling loop
  const rollingTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  const scrollManual = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const distance = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth"
    });
  };

  return (
    <section
      id="clients"
      className="relative z-20 bg-[#050505] py-24 md:py-32 border-b border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#AA771C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
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
            Read firsthand experiences from families who entrusted their most sacred wedding ceremonies, grand receptions, and traditional milestones to Surya Event Management.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Rolling Status & Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-xs font-sans text-[#F5F5F0]/80">
            <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"}`} />
            <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
              {isPaused ? "Rolling Paused" : "Continuous Rolling Showcase"}
            </span>
            <span className="text-[10px] text-[#F5F5F0]/40 hidden sm:inline">
              (Hover card to pause)
            </span>
          </div>

          {/* Interactive controls: Play/Pause & Left/Right buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-xs font-sans text-white hover:text-[#D4AF37] transition-all flex items-center gap-1.5 cursor-pointer"
              title={isPaused ? "Resume auto-rolling" : "Pause auto-rolling"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Pause className="w-3.5 h-3.5 text-[#D4AF37]" />}
              <span className="text-[11px] font-medium uppercase tracking-wider">
                {isPaused ? "Play" : "Pause"}
              </span>
            </button>

            <button
              onClick={() => scrollManual("left")}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:text-white transition-all cursor-pointer"
              title="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollManual("right")}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:text-white transition-all cursor-pointer"
              title="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Rolling Track Container */}
      <div className="relative mt-8 w-full overflow-hidden">
        {/* Left & Right Gradient Shadows for seamless fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10" />

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth py-4"
        >
          <div
            className="animate-marquee-roll flex gap-6 px-6"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {rollingTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[390px] md:w-[440px] flex-shrink-0 bg-white/5 backdrop-blur-xl border border-[#D4AF37]/25 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/70 hover:bg-white/[0.08] transition-all duration-300 relative group shadow-2xl"
              >
                {/* Subtle gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-tr-2xl pointer-events-none" />
                <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-6 right-6 pointer-events-none group-hover:text-[#D4AF37]/40 transition-colors" />

                <div className="space-y-4">
                  {/* Top Bar: Stars + Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] text-[#D4AF37] font-sans font-medium">
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                      Verified Family
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="font-serif text-sm sm:text-base text-[#F5F5F0]/90 leading-relaxed italic font-normal pt-1">
                    "{t.review}"
                  </p>
                </div>

                {/* Client Info Footer (No profile picture - elegant monogram badge) */}
                <div className="pt-6 border-t border-[#D4AF37]/15 flex items-center gap-3.5 mt-6">
                  {/* Initials Monogram Badge */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4AF37]/25 via-black to-black border border-[#D4AF37]/50 flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-serif font-bold text-sm shadow-md group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                    {getInitials(t.clientName)}
                  </div>

                  {/* Client Details */}
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-sm sm:text-base text-white tracking-wide">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-[#D4AF37] font-sans font-medium">
                      {t.eventType}
                    </p>
                    <p className="text-[11px] text-[#F5F5F0]/60 font-sans flex items-center gap-1.5 pt-0.5">
                      <MapPin className="w-3 h-3 text-[#D4AF37]/70" />
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

