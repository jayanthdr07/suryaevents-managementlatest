import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (scrollY / docHeight) * 100;
        setScrollPercentage(Math.min(Math.max(scrolled, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculate

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="reading-progress-bar-container"
      className="fixed top-0 left-0 right-0 h-[3px] sm:h-[4px] z-[100] bg-black/40 pointer-events-none"
    >
      <div
        id="reading-progress-bar"
        className="h-full bg-gradient-to-r from-[#AA771C] via-[#FFDF00] to-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.95)] transition-all duration-75 ease-out rounded-r-full"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
