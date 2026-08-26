import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "South Indian Wedding & Muhurtham",
    eventDate: "",
    guestCount: "500-1000 Guests",
    venueCity: "Bengaluru",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Also offer WhatsApp quick link redirection
    const message = `*Event Inquiry - Surya Event Management*%0A%0A*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Event Type:* ${formData.eventType}%0A*Event Date:* ${formData.eventDate || "To be decided"}%0A*Guest Count:* ${formData.guestCount}%0A*Venue / City:* ${formData.venueCity}%0A*Notes:* ${formData.notes || "None"}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919449303946?text=${message}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative z-20 bg-[#050505] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#745414]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Reserve Your Auspicious Date
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Begin Planning Your <br />
            <span className="text-gold-gradient italic font-normal">Royal Family Celebration</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Share your event vision and dates with our wedding planners. We will craft a bespoke proposal tailored to your family traditions.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Trust Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl space-y-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                Direct Communication Desk
              </h3>
              
              <p className="text-xs md:text-sm text-[#F5F5F0]/70 font-light leading-relaxed">
                Connect directly with our event directors for immediate date availability, venue site visits, or customized pricing.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#D4AF37]/10">
                <a
                  href="tel:+919449303946"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                      Direct Telephone
                    </span>
                    <span className="font-serif text-base text-white font-bold group-hover:text-[#D4AF37] transition-colors">
                      +91 9449303946
                    </span>
                    <p className="text-[10px] text-[#F5F5F0]/50 mt-0.5">
                      Available Mon-Sun, 24/7 for auspicious dates
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919449303946?text=Hello%20Surya%20Event%20Management%2C%20I%20would%20like%20to%20inquire%20about%20event%20planning."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-bold block">
                      Official WhatsApp
                    </span>
                    <span className="font-serif text-base text-white font-bold">
                      Instant Chat &amp; Stage Photos
                    </span>
                    <p className="text-[10px] text-[#F5F5F0]/50 mt-0.5">
                      Fast response within 15 minutes
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:suryaevent.india@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                      Email Desk
                    </span>
                    <span className="font-sans text-sm text-white font-medium group-hover:text-[#D4AF37] transition-colors break-all">
                      suryaevent.india@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                      Regional Coverage
                    </span>
                    <span className="font-serif text-sm text-white font-bold">
                      Bengaluru &amp; Karnataka, India
                    </span>
                    <p className="text-[10px] text-[#F5F5F0]/50 mt-0.5">
                      Hubli Registry &amp; Bengaluru Operational Base
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-white/5 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-2xl shadow-2xl relative">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Event Consultation &amp; Booking Form
              </h3>
              <p className="text-xs md:text-sm text-[#F5F5F0]/70 font-light mb-8">
                Fill in your celebration details below and our team will get in touch promptly.
              </p>

              {isSubmitted ? (
                <div className="p-8 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-xl text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto text-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-xs md:text-sm text-[#F5F5F0]/80 max-w-md mx-auto font-light">
                    Your event inquiry has been received and WhatsApp has been initiated. Our senior event curator will call you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anand Gowda"
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9449303946"
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Ceremony / Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-black/80 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all"
                      >
                        <option value="South Indian Wedding & Muhurtham">South Indian Wedding &amp; Muhurtham</option>
                        <option value="Grand Reception Stage Structure">Grand Reception Stage Structure</option>
                        <option value="End-to-End Complete Wedding Package">End-to-End Complete Wedding Package</option>
                        <option value="Nischayathartha (Engagement)">Nischayathartha (Engagement)</option>
                        <option value="Seemantha (Baby Shower)">Seemantha (Baby Shower)</option>
                        <option value="Namakarana (Naming Ceremony)">Namakarana (Naming Ceremony)</option>
                        <option value="Mehendi & Sangeet Night">Mehendi &amp; Sangeet Night</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Tentative Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Expected Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 bg-black/80 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all"
                      >
                        <option value="Under 250 Guests">Under 250 Guests</option>
                        <option value="250-500 Guests">250 - 500 Guests</option>
                        <option value="500-1000 Guests">500 - 1,000 Guests</option>
                        <option value="1000-2500 Guests">1,000 - 2,500 Guests</option>
                        <option value="2500+ Grand Gathering">2,500+ Grand Gathering</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                        Venue / City
                      </label>
                      <input
                        type="text"
                        value={formData.venueCity}
                        onChange={(e) => setFormData({ ...formData, venueCity: e.target.value })}
                        placeholder="e.g. Palace Grounds, Bengaluru"
                        className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold mb-2">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your preferred decor style, Muhurtham timing, catering requirements, or questions..."
                      className="w-full px-4 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#FFDF00] via-[#D4AF37] to-[#AA771C] text-black font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-lg hover:brightness-110 active:scale-98 transition-all shadow-[0_10px_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit Event Inquiry &amp; Launch WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
