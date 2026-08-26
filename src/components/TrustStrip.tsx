import { useEffect, useState, useRef } from "react";
import { Sparkles, Landmark, Heart, ShieldCheck } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: any;
}

export default function TrustStrip() {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { value: 500, suffix: "+", label: "Weddings & Ceremonies", icon: Sparkles },
    { value: 100, suffix: "+", label: "Venue Partnerships", icon: Landmark },
    { value: 1000, suffix: "+", label: "Happy Families", icon: Heart },
    { value: 100, suffix: "% Scope", label: "End-to-End Packages", icon: ShieldCheck }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="trust-strip"
      ref={containerRef}
      className="relative z-20 bg-gradient-to-b from-black to-[#050505] border-y border-[#D4AF37]/20 py-20 px-6 overflow-hidden"
    >
      {/* Background overlay noise/grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-xl border border-[#D4AF37]/15 rounded-md hover:border-[#D4AF37]/40 hover:bg-white/10 transition-all duration-500 group relative"
            >
              {/* Corner decorative bracket */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

              {/* Icon in gold circle */}
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center mb-4 text-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-all duration-300">
                <stat.icon className="w-5.5 h-5.5 stroke-[1.5]" />
              </div>

              {/* Animated number */}
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#f5f5f0] group-hover:text-white transition-colors flex items-baseline justify-center">
                <Counter value={stat.value} trigger={active} />
                <span className="text-[#D4AF37] ml-0.5">{stat.suffix}</span>
              </div>

              {/* Label */}
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#F5F5F0]/60 mt-2 font-sans group-hover:text-[#F5F5F0] transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, trigger }: { value: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1500; // ms
    const increment = value / (duration / 16); // 60fps frame budget

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, trigger]);

  return <span>{count}</span>;
}
