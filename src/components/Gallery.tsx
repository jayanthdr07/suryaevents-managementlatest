import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, FolderOpen, ExternalLink, ChevronLeft, ChevronRight, X, ZoomIn, Eye, Quote } from "lucide-react";
import { GALLERY_CATEGORIES_INFO, GALLERY_EVENTS, GalleryEvent } from "../galleryData";
import { GALLERY_CATEGORIES } from "../data";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string; categoryName: string } | null>(null);
  const [selectedEventModal, setSelectedEventModal] = useState<GalleryEvent | null>(null);

  // Flatten all photos for easy filtering & lightbox navigation
  const allPhotos: { url: string; title: string; categoryId: string; categoryName: string }[] = [];
  
  GALLERY_EVENTS.forEach((event) => {
    const category = GALLERY_CATEGORIES_INFO.find((c) => c.id === event.categoryId);
    event.images.forEach((img) => {
      allPhotos.push({
        url: img,
        title: event.title,
        categoryId: event.categoryId,
        categoryName: category?.name || "Event Photo"
      });
    });
  });

  const filteredPhotos = activeCategory === "all"
    ? allPhotos
    : allPhotos.filter((p) => p.categoryId === activeCategory);

  const filteredEvents = activeCategory === "all"
    ? GALLERY_EVENTS
    : GALLERY_EVENTS.filter((e) => e.categoryId === activeCategory);

  const handleNextPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currIdx = filteredPhotos.findIndex((p) => p.url === selectedPhoto.url);
    const nextIdx = (currIdx + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIdx]);
  };

  const handlePrevPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currIdx = filteredPhotos.findIndex((p) => p.url === selectedPhoto.url);
    const prevIdx = (currIdx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <section
      id="gallery"
      className="relative z-20 bg-[#070707] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#745414]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-[#D4AF37]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
              Visual Architecture
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Curated <br />
            <span className="text-gold-gradient italic font-normal">Celebration Portfolio</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Immerse yourself in our signature South Indian Muhurtha, grand illuminated reception stages, and traditional family decor.
          </p>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#D4AF37] text-black font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                : "bg-white/5 border border-white/10 text-[#F5F5F0]/70 hover:text-white hover:border-[#D4AF37]/40"
            }`}
          >
            All Portfolios
          </button>
          {GALLERY_CATEGORIES_INFO.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#D4AF37] text-black font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                  : "bg-white/5 border border-white/10 text-[#F5F5F0]/70 hover:text-white hover:border-[#D4AF37]/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Spotlight Card */}
        {activeCategory !== "all" && (
          <div className="p-8 bg-gradient-to-r from-white/5 via-[#D4AF37]/5 to-white/5 border border-[#D4AF37]/30 rounded-2xl">
            {(() => {
              const currentCat = GALLERY_CATEGORIES.find((c) => c.id === activeCategory);
              if (!currentCat) return null;
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2 space-y-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans font-bold">
                      Category Overview
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                      {currentCat.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#F5F5F0]/80 font-light leading-relaxed">
                      {currentCat.description}
                    </p>
                    <p className="text-xs text-[#D4AF37] font-sans">
                      <strong className="text-white font-medium">Frequent Venues:</strong> {currentCat.venueDetails}
                    </p>
                  </div>
                  {currentCat.testimonial && (
                    <div className="p-5 rounded-xl bg-black/60 border border-[#D4AF37]/20 relative">
                      <Quote className="w-6 h-6 text-[#D4AF37]/30 absolute top-4 right-4" />
                      <p className="font-serif text-xs italic text-[#F5F5F0]/80 leading-relaxed mb-3">
                        "{currentCat.testimonial.text}"
                      </p>
                      <span className="text-[11px] font-sans uppercase tracking-wider text-[#D4AF37] font-bold block">
                        — {currentCat.testimonial.client}
                      </span>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
              className="relative h-72 sm:h-80 rounded-xl overflow-hidden group cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]/70 shadow-lg"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-sans font-bold block mb-1">
                  {photo.categoryName}
                </span>
                <h4 className="font-serif text-base font-bold text-white leading-snug drop-shadow-md">
                  {photo.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Google Asset Drive Card */}
        <div className="p-8 bg-gradient-to-r from-black via-white/5 to-black border border-[#D4AF37]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
              Looking for High-Resolution Stage Portfolios?
            </h3>
            <p className="text-xs md:text-sm text-[#F5F5F0]/70 font-light">
              Browse our complete archive of live setup photos, Muhurtham floral backdrops, and raw stage builds on our official Google Asset Drive.
            </p>
          </div>
          <a
            href="https://share.google/XzoqUIxxXwynxX8Fn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#D4AF37] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 active:scale-98 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
          >
            <FolderOpen className="w-4 h-4" />
            Open Google Media Drive
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-black/80 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer z-30 shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Photo */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer z-20 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Photo */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer z-20 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border border-[#D4AF37]/30 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans font-bold">
                  {selectedPhoto.categoryName}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
