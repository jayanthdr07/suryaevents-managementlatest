import { useEffect, useRef } from "react";
import { Sparkles, CalendarRange, Landmark, Wallet2, CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const trustPoints = [
    {
      icon: CalendarRange,
      title: "Decades of Heritage",
      desc: "Decades of defining, sculpting, and perfecting traditional South Indian weddings and grand family celebrations."
    },
    {
      icon: Landmark,
      title: "Prestigious Venues",
      desc: "Unparalleled operational ties with Bengaluru Palace Grounds, Taj West End, Leela Palace, and top heritage venues."
    },
    {
      icon: Wallet2,
      title: "Dynamic Packages",
      desc: "Fully customizable end-to-end wedding packages, adjusting to financial goals while keeping royal visual decor absolute."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Ease",
      desc: "Seamless planning for Muhurtha, Receptions, Seemantha, and Namakarana so your family remains entirely stress-free."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Parallax/Stagger on section headers
      gsap.fromTo(
        ".parallax-header-element",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".parallax-header-element",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // 2. Parallax scrub effect on Image 1 (moves slower)
      gsap.fromTo(
        ".parallax-img-main",
        { y: -40 },
        {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          }
        }
      );

      // 3. Parallax scrub effect on Image 2 (moves opposite direction)
      gsap.fromTo(
        ".parallax-img-secondary",
        { y: 50 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );

      // 4. Parallax scrub on background geometric box
      gsap.fromTo(
        ".parallax-bg-frame",
        { y: -20, rotate: -1 },
        {
          y: 20,
          rotate: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-20 bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 overflow-hidden border-b border-[#D4AF37]/10"
    >
      {/* Background ambient gold orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-sans font-semibold block parallax-header-element">
                The Legacy of Excellence
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] parallax-header-element">
                Sculpting Experiences, <br />
                <span className="text-gold-gradient italic font-normal">Celebrating Legacies</span>
              </h2>
            </div>

            <p className="font-sans text-[#F5F5F0]/80 text-base md:text-lg leading-relaxed font-light parallax-header-element">
              For over decades, <strong className="text-[#f5f5f0] font-semibold">Surya Event Management</strong> has been the premier choice for families across Bengaluru and South India seeking authentic grandeur, flawless execution, and bespoke wedding design. Founded on deep artistic passion and valuable venue relationships, we treat every Muhurtha, Reception, and traditional ceremony as a historic family milestone.
            </p>

            <p className="font-sans text-[#F5F5F0]/70 text-sm md:text-base leading-relaxed font-light parallax-header-element">
              Our team specializes in end-to-end wedding packages, traditional Muhurtha setups adorned with fresh jasmine and marigolds, and majestic reception structures. Beyond grand weddings, we bring equal warmth to traditional family milestones like Nischayathartha (Engagement), Seemantha (Baby Shower), and Namakarana (Naming Ceremony).
            </p>

            {/* Why Clients Trust Us Grid */}
            <div className="pt-8 border-t border-[#D4AF37]/10 parallax-header-element">
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-6 flex items-center gap-2 font-medium">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                The Pillars of Surya Trust
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-md bg-white/5 backdrop-blur-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 hover:bg-white/10 transition-all duration-300 shadow-md">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                      <point.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-sm text-[#f5f5f0] tracking-wide mb-1">
                        {point.title}
                      </h4>
                      <p className="font-sans text-[11px] text-[#F5F5F0]/60 leading-normal font-light">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Layered Luxury Visual Montage */}
          <div ref={imageContainerRef} className="lg:col-span-5 relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden py-10">
            
            {/* Background geometric gold outline */}
            <div className="absolute inset-10 border border-[#D4AF37]/15 rounded-md pointer-events-none parallax-bg-frame" />

            {/* Image 1: Main Large Frame */}
            <div className="absolute top-4 right-4 w-[85%] h-[75%] rounded-sm overflow-hidden border border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 group parallax-img-main">
              <img
                src="https://cdn0.weddingwire.in/vendor/3890/3_2/960/jpg/wedding-planners-surya-events-stage-decor-7_15_373890-162973430996842.jpeg"
                alt="Surya Event Management Premium Celebration Setup"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-serif text-lg text-white font-semibold">South Indian Wedding Craftsmanship</p>
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans">Official Celebration Gallery</p>
              </div>
            </div>

            {/* Image 2: Secondary Overlapping Frame (Staggered Offset) */}
            <div className="absolute bottom-4 left-4 w-[60%] h-[45%] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_30px_50px_rgba(0,0,0,0.95)] z-20 group parallax-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600"
                alt="Grand South Indian Reception Stage"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-serif text-sm text-[#f5f5f0] font-semibold">Grand Reception Structure</p>
                <p className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-sans">Palace Grounds, Bengaluru</p>
              </div>
            </div>

            {/* Small Floating Seal Card */}
            <div className="absolute top-1/3 left-0 bg-black/45 border border-[#D4AF37]/30 p-4 rounded-md z-30 shadow-[0_15px_30px_rgba(0,0,0,0.9)] max-w-[150px] text-center backdrop-blur-md animate-[bounce_6s_infinite_ease-in-out]">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-2 border border-[#D4AF37]/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p className="text-[10px] tracking-wider text-[#D4AF37] font-bold uppercase mb-0.5">100% Certified</p>
              <p className="text-[8px] text-[#F5F5F0]/60 font-sans leading-normal">Premium Luxury Venue Operations</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
