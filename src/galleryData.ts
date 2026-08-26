export interface GalleryCategoryInfo {
  id: string;
  name: string;
  description: string;
  coverImage: string;
}

export interface GalleryEvent {
  id: string;
  categoryId: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  venueDetails: string;
  designHighlights: string[];
  planningNotes: string;
  testimonial?: {
    client: string;
    text: string;
  };
  images: string[];
}

export const GALLERY_CATEGORIES_INFO: GalleryCategoryInfo[] = [
  {
    id: "luxury-weddings",
    name: "South Indian Weddings & Muhurtha",
    description: "Traditional Muhurtha, marigold arches, silk drapes, and end-to-end wedding celebrations.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJD_nx7o0mX5JU88Ih-hUVAsxOB9UVOFAHxcz0IA768OETNUEKFM1toB8&s=10"
  },
  {
    id: "reception-structures",
    name: "Reception Stage Structures",
    description: "Grand reception stages, illuminated floral arches, glass walkways, and crystal canopies.",
    coverImage: "https://www.marriagecolours.com/wp-content/uploads/2024/10/prithiviraj-sanjeeani-wedding-pudukkottai-couple-entry.jpg"
  },
  {
    id: "family-ceremonies",
    name: "Pre-Wedding & Family Ceremonies",
    description: "Nischayathartha (Engagement), Mehendi, Sangeet, Seemantha (Baby Shower), and Namakarana (Naming Ceremony).",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN6B7_FSQAO2kVw10_wws_X0B-wq4esHAC6x2FbjtY6zANyW8T_vyDRM&s=10"
  }
];

export const GALLERY_EVENTS: GalleryEvent[] = [
  // --- Category: South Indian Weddings & Muhurtha ---
  {
    id: "marigold-palace",
    categoryId: "luxury-weddings",
    title: "Grand South Indian Muhurtha",
    tagline: "Palace Grounds, Bengaluru",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6hWe-ffEia8wORkl8oACfwZxidr0kCnpM0tiB_oIZ_g33GQcMb0kdck&s=10",
    description: "A multi-day traditional South Indian wedding celebrating rich heritage at Palace Grounds, Bengaluru. Surya Event Management designed a 40-foot Muhurtha adorned with fresh marigolds, mogra (jasmine), banana tree saplings, and handcrafted brass oil lamps.",
    venueDetails: "Palace Grounds, Bengaluru, Karnataka. Features expansive lawns, heritage architecture, and grand dining pavilions.",
    designHighlights: [
      "40-foot traditional Muhurtha with marigolds and white mogra garlands",
      "Banana sapling entrance arches with traditional lotus brass urlis",
      "Custom gold-sculpted wedding mandap seating",
      "Authentic South Indian banana leaf seating arrangements"
    ],
    planningNotes: "Complete end-to-end event management, priest coordination, dining protocol management, and guest transport.",
    testimonial: {
      client: "Divakara Kakathkar",
      text: "Surya Event Management made our daughter's wedding at Bengaluru Palace Grounds an unforgettable family celebration. The Muhurtha was deeply authentic and beautiful."
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6hWe-ffEia8wORkl8oACfwZxidr0kCnpM0tiB_oIZ_g33GQcMb0kdck&s=10",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000&sig=w2",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1000&sig=w3",
      "https://images.unsplash.com/photo-1507504038482-76211377bcde?auto=format&fit=crop&q=80&w=1000&sig=w4",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1000&sig=w5",
      "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1000&sig=w6"
    ]
  },
  {
    id: "mysuru-heritage-wedding",
    categoryId: "luxury-weddings",
    title: "Heritage Mysuru Wedding",
    tagline: "Heritage Resort, Mysuru",
    heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
    description: "An open-air heritage wedding surrounded by natural flora and classical South Indian architecture. Features customized silk drapery, lotus petal urlis, and a peaceful green courtyard setting.",
    venueDetails: "Heritage Resort Venue, Mysuru, Karnataka.",
    designHighlights: [
      "Lotus floral fountain surrounds",
      "Brass oil lamp lighted pathways",
      "Silk cloth drapes in traditional gold and temple red",
      "Nadaswaram musical stage styling"
    ],
    planningNotes: "Coordination with venue management for heritage preservation and seamless accommodation for family guests.",
    testimonial: {
      client: "Nagaraj V Suvarna",
      text: "An end-to-end wedding package that gave our family total peace of mind. Every ritual was executed seamlessly with great respect for our traditions."
    },
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000&sig=m1",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000&sig=m2",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000&sig=m3",
      "https://images.unsplash.com/photo-1505232458627-5ae907589990?auto=format&fit=crop&q=80&w=1000&sig=m4"
    ]
  },

  // --- Category: Reception Stage Structures ---
  {
    id: "bengaluru-reception-stage",
    categoryId: "reception-structures",
    title: "Illuminated Grand Reception Stage",
    tagline: "Taj West End, Bengaluru",
    heroImage: "https://www.marriagecolours.com/wp-content/uploads/2024/10/prithiviraj-sanjeeani-wedding-pudukkottai-couple-entry.jpg",
    description: "A custom 50-foot reception stage structure with curved illuminated arches, crystal chandeliers, and lush white orchid overlays designed for an evening reception in Bengaluru.",
    venueDetails: "Grand Lawns, Taj West End, Bengaluru.",
    designHighlights: [
      "50-foot custom structural stage backdrop with warm ambient lighting",
      "Hanging crystal chandeliers and white floral canopy",
      "Glass walkway with embedded golden lights",
      "High-end royal stage seating"
    ],
    planningNotes: "Structural safety testing, precision sound setup, and hospitality counters for 800 reception guests.",
    testimonial: {
      client: "Radhika Vinod",
      text: "Their reception stage structure design in Bengaluru was beyond our expectations. Everything was managed with complete care and warmth."
    },
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000&sig=r1",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000&sig=r2",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000&sig=r3",
      "https://images.unsplash.com/photo-1505232458627-5ae907589990?auto=format&fit=crop&q=80&w=1000&sig=r4"
    ]
  },

  // --- Category: Pre-Wedding & Family Ceremonies ---
  {
    id: "seemantha-namakarana",
    categoryId: "family-ceremonies",
    title: "Seemantha & Namakarana Celebration",
    tagline: "Traditional Family Milestones, Bengaluru",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIWsfmZXhgYnXUsAlJnyZnOb_N9Rkyag1BkzIKIWy9TuwBn9P5nBX47k&s=10",
    description: "A heartwarming Seemantha (Baby Shower) and Namakarana (Naming Ceremony) styled with soft pastel pink roses, traditional brass cradles, and flower-decorated swings.",
    venueDetails: "Boutique Garden Venue, Bengaluru.",
    designHighlights: [
      "Custom lotus flower backdrop and decorated jhula (swing)",
      "Traditional brass cradle decoration for Namakarana",
      "Pastel flower entrance arches",
      "Handcrafted return gift favor counters"
    ],
    planningNotes: "Customized seating for elders, gentle lighting, and dedicated family host coordinators.",
    testimonial: {
      client: "Pavithra Ajay",
      text: "We handed over the complete responsibility of our daughter's Seemantha and Namakarana ceremonies to Surya Event Management. The floral decor was so elegant!"
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIWsfmZXhgYnXUsAlJnyZnOb_N9Rkyag1BkzIKIWy9TuwBn9P5nBX47k&s=10",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000&sig=s2",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000&sig=s3",
      "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=1000&sig=s4"
    ]
  }
];

