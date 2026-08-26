import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is included in your End-to-End South Indian Wedding Packages?",
    answer: "Our end-to-end package is a complete turnkey service. It covers venue coordination, authentic Muhurtha floral architecture (with fresh marigolds, jasmine, banana saplings, and brass lamps), reception stage structures, lighting and sound rigging, pure veg traditional dining logistics, Purohit/priest schedule coordination, and dedicated guest hospitality.",
    category: "Packages & Scope"
  },
  {
    question: "Do you coordinate with Purohits / Priests for auspicious Muhurtha timings?",
    answer: "Yes, absolutely. South Indian weddings adhere strictly to specific Shubha Muhurtha windows (often early morning or pre-dawn). Our event managers work closely with your family priests and purohits to ensure all sacred rituals, Havans, and Mangalya Dharanam ceremonies happen exactly on time without stress.",
    category: "Rituals & Timings"
  },
  {
    question: "How far in advance should we book Surya Event Management for our wedding?",
    answer: "For peak South Indian wedding muhurtha dates in Bengaluru and Karnataka, we recommend reserving your date 3 to 6 months in advance. However, we also cater to urgent requirements and family ceremonies based on date availability.",
    category: "Bookings"
  },
  {
    question: "Do you manage traditional South Indian pure vegetarian feasts (Banana Leaf dining)?",
    answer: "Yes. Traditional dining protocol is one of our key specialties. We coordinate seamless banana leaf dining service, seating transitions, server attire, authentic South Indian menu curation, and guest hospitality for both intimate family feasts and grand banquets with 1,000+ guests.",
    category: "Dining & Hospitality"
  },
  {
    question: "Can you design custom stage structures for venues like Palace Grounds and Taj West End?",
    answer: "Yes. Our team has decades of experience creating 40-foot to 60-foot custom fabricated stage structures, illuminated archways, crystal chandeliers, and floral canopies at Bengaluru Palace Grounds, Taj West End, Leela Palace, and major convention centers across South India.",
    category: "Decor & Production"
  },
  {
    question: "Do you also organize smaller family milestone ceremonies?",
    answer: "Yes! In addition to grand weddings, we specialize in traditional family milestone celebrations including Nischayathartha (Engagement), Seemantha (Baby Shower), Namakarana (Naming Ceremony), Mehendi & Sangeet nights, and 60th/80th Shanthi milestones.",
    category: "Family Ceremonies"
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative z-20 bg-[#080808] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Frequently Asked Questions
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Planning Your Event: <br />
            <span className="text-gold-gradient italic font-normal">Common Questions Answered</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Everything you need to know about our South Indian wedding planning, stage designs, and ceremony packages.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/10 border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
                    : "bg-white/5 border-[#D4AF37]/15 hover:border-[#D4AF37]/35"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-[#F5F5F0]/40"}`} />
                    <span className="font-serif text-base md:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-[#F5F5F0]/80 font-sans font-light leading-relaxed border-t border-[#D4AF37]/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 bg-gradient-to-r from-[#D4AF37]/10 via-black to-[#745414]/15 border border-[#D4AF37]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg md:text-xl font-bold text-white">
              Have a Specific Wedding or Ritual Question?
            </h4>
            <p className="text-xs text-[#F5F5F0]/70 font-light mt-1">
              Talk directly with our lead wedding consultants today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919449303946"
              className="px-5 py-3 bg-white/10 border border-[#D4AF37]/30 text-white rounded-md text-xs font-sans uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call Directly
            </a>
            <a
              href="https://wa.me/919449303946?text=Hello%20Surya%20Event%20Management%2C%20I%20have%20a%20few%20questions%20regarding%20event%20planning."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] rounded-md text-xs font-sans uppercase tracking-widest font-bold hover:bg-[#25D366]/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
