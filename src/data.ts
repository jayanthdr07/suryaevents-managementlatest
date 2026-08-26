import { Service, FeaturedEvent, GalleryCategory, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "wedding",
    title: "South Indian Weddings & Muhurtham",
    description: "End-to-end planning for traditional South Indian weddings, grand Muhurtha, and sacred ritual setups.",
    details: [
      "Authentic Muhurtha Design with Fresh Jasmine & Marigolds",
      "Traditional Floral Structures, Banana Sapling Entrance & Silk Drapery",
      "Purohit & Priest Coordination for Ritual Timings",
      "Traditional South Indian Pure Veg Feast & Dining Protocol",
      "Nadaswaram, Classical Music & Royal Barat Welcomes"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJD_nx7o0mX5JU88Ih-hUVAsxOB9UVOFAHxcz0IA768OETNUEKFM1toB8&s=10",
    anchorId: "wedding"
  },
  {
    id: "reception",
    title: "Grand Reception Structures",
    description: "Bespoke reception stage architecture, illuminated crystal backdrops, and majestic entrance archways.",
    details: [
      "Custom Sculpted Stage Structures & Floral Canopies",
      "Warm Starlight & LED Ambient Stage Lighting",
      "Glass Runway & Mirror Finish Aisles",
      "Bridal & Groom Grand Stage Seating Concepts",
      "Complete On-Site Management & Guest Care"
    ],
    image: "https://www.marriagecolours.com/wp-content/uploads/2024/10/prithiviraj-sanjeeani-wedding-pudukkottai-couple-entry.jpg",
    anchorId: "reception"
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Ceremonies",
    description: "Vibrant celebrations for Nischayathartha (Engagement), Mehendi, Starlight Sangeet, and Haldi Flower Rain.",
    details: [
      "Nischayathartha (Engagement) Stage & Ring Tray Styling",
      "Colorful Mehendi Seating & Floral Swings",
      "High-Energy Sangeet Audio-Visuals & Dance Floor Rigging",
      "Haldi Flower Shower Setup & Traditional Brass Urli Vessel Decor"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN6B7_FSQAO2kVw10_wws_X0B-wq4esHAC6x2FbjtY6zANyW8T_vyDRM&s=10",
    anchorId: "pre-wedding"
  },
  {
    id: "family-ceremonies",
    title: "Seemantha & Traditional Functions",
    description: "Heartwarming arrangements for Seemantha (Baby Shower), Namakarana (Naming Ceremony), Half-Saree & Milestones.",
    details: [
      "Seemantha (Baby Shower) Lotus & Cradle Floral Backdrops",
      "Namakarana (Naming Ceremony) Traditional Brass Cradle & Swing Styling",
      "Family Milestone Celebrations & Golden Anniversaries",
      "Return Gift Packaging & Customized Guest Favor Counters"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIWsfmZXhgYnXUsAlJnyZnOb_N9Rkyag1BkzIKIWy9TuwBn9P5nBX47k&s=10",
    anchorId: "family-ceremonies"
  },
  {
    id: "end-to-end",
    title: "End-to-End Wedding Packages",
    description: "Complete turnkey wedding management covering venue booking, decor, catering, photography, and hospitality.",
    details: [
      "Complete Budget Allocation & Step-by-Step Timeline Planning",
      "Premium Venue Selection across Bengaluru & South India",
      "Guest Accommodation, Airport & Railway Station Transfers",
      "Complete Event Day Logistics & Zero-Stress Execution"
    ],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    anchorId: "end-to-end"
  }
];

export const FEATURED_EVENTS: FeaturedEvent[] = [
  {
    id: "royal-palace",
    title: "Grand South Indian Muhurtham & Reception",
    type: "Traditional South Indian Wedding",
    venueStyle: "Palace Grounds, Bengaluru",
    shortStory: "A multi-day celebration featuring a traditional Muhurtha adorned with fresh marigolds and a majestic reception stage.",
    story: "Organized at the iconic Palace Grounds in Bengaluru, this wedding brought together traditional South Indian rituals and a breathtaking reception setup. Surya Event Management designed a 40-foot Muhurtha adorned with thousands of fresh marigolds, fragrant mogra (jasmine), and handcrafted brass lamps. The evening reception featured a customized illuminated stage structure with crystal chandeliers, offering a memorable experience for over 1,200 guests.",
    bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6hWe-ffEia8wORkl8oACfwZxidr0kCnpM0tiB_oIZ_g33GQcMb0kdck&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6hWe-ffEia8wORkl8oACfwZxidr0kCnpM0tiB_oIZ_g33GQcMb0kdck&s=10",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600"
    ],
    guestCapacity: "1,200 Guests",
    highlights: [
      "40-foot traditional Muhurtha with fresh jasmine and marigolds",
      "Grand Reception Stage structure with warm crystal lighting",
      "Banana sapling entrance arches with traditional brass urns",
      "Authentic South Indian multi-course feast management",
      "Complete end-to-end guest logistics and venue management"
    ]
  },
  {
    id: "heritage-mysuru",
    title: "Heritage Mysuru Destination Wedding",
    type: "Royal Heritage Celebration",
    venueStyle: "Heritage Resort, Mysuru",
    shortStory: "A serene heritage wedding surrounded by traditional architecture, royal floral walkways, and classical Nadaswaram music.",
    story: "Set in a picturesque heritage venue in Mysuru, this wedding celebrated rich South Indian traditions with timeless elegance. Our team crafted an open-air Muhurtha overlooking lush green lawns. Guests enjoyed a traditional welcome with rose water, chandan, and live classical Nadaswaram tunes, followed by an evening reception beneath a starlight floral canopy.",
    bannerImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1505232458627-5ae907589990?auto=format&fit=crop&q=80&w=600"
    ],
    guestCapacity: "650 Guests",
    highlights: [
      "Open-air traditional Muhurtha surrounded by lotus fountains",
      "Starlight floral canopy for the evening reception",
      "Custom brass lamp walkways with lotus floral decor",
      "Smooth guest hospitality and accommodation management"
    ]
  },
  {
    id: "seemantha-gala",
    title: "Traditional Seemantha & Family Milestone",
    type: "Family Ceremony",
    venueStyle: "Taj West End, Bengaluru",
    shortStory: "An elegant, traditional Seemantha (Baby Shower) decorated with soft pastel flowers and traditional swing setups.",
    story: "Hosted at the lush lawns of Taj West End, Bengaluru, this Seemantha celebration was styled with soft pink and gold floral backdrops, a flower-adorned traditional swing, and handcrafted return gift favor counters. Surya Event Management took care of every detail, allowing the family to enjoy every moment with their loved ones.",
    bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIWsfmZXhgYnXUsAlJnyZnOb_N9Rkyag1BkzIKIWy9TuwBn9P5nBX47k&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIWsfmZXhgYnXUsAlJnyZnOb_N9Rkyag1BkzIKIWy9TuwBn9P5nBX47k&s=10",
      "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600"
    ],
    guestCapacity: "350 Guests",
    highlights: [
      "Custom lotus flower backdrop and flower-wrapped jhula (swing)",
      "Traditional brass lamps and lotus petal urli arrangements",
      "Customized return gift packaging for all guests",
      "Warm, stress-free hospitality for elders and family members"
    ]
  }
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "luxury-weddings",
    name: "South Indian Weddings & Muhurtham",
    description: "Traditional Muhurtha, marigold arches, and end-to-end wedding celebrations.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJD_nx7o0mX5JU88Ih-hUVAsxOB9UVOFAHxcz0IA768OETNUEKFM1toB8&s=10",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507504038482-76211377bcde?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1000"
    ],
    venueDetails: "Palace Grounds Bengaluru, Taj West End, Leela Palace, Mysuru Heritage Venues, and leading convention centers.",
    designHighlights: [
      "Traditional Muhurtha with marigolds and jasmine",
      "Banana tree entrance arches with lotus brass urlis",
      "Gold-sculpted wedding stage seating",
      "Starlight canopy lighting for evening receptions"
    ],
    planningNotes: "Complete end-to-end coordination including priest timings, guest welcoming, dining arrangements, and zero-delay execution.",
    testimonial: {
      client: "Divakara Kakathkar",
      text: "Surya Event Management made our daughter's wedding at Bengaluru Palace Grounds a memorable event. The Muhurtha was deeply authentic and beautiful."
    }
  },
  {
    id: "reception-structures",
    name: "Reception Stage Structures",
    description: "Grand reception stages, illuminated floral arches, and crystal backdrops.",
    coverImage: "https://www.marriagecolours.com/wp-content/uploads/2024/10/prithiviraj-sanjeeani-wedding-pudukkottai-couple-entry.jpg",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505232458627-5ae907589990?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
    ],
    venueDetails: "Major convention halls, luxury hotel ballrooms, and outdoor grand lawns in Bengaluru and across South India.",
    designHighlights: [
      "Custom curved illuminated stage backdrops",
      "Hanging crystal chandeliers and floral ceilings",
      "Glass walkways with embedded warm lighting",
      "High-end comfortable stage seating arrangements"
    ],
    planningNotes: "Precision setup and breakdown schedules, stage safety verification, and smooth lighting calibration.",
    testimonial: {
      client: "Radhika Vinod",
      text: "Their reception stage structure design in Bengaluru was beyond our expectations. From the grand entrance archway to the stage lighting, everything was managed with complete care."
    }
  },
  {
    id: "family-ceremonies",
    name: "Pre-Wedding & Family Ceremonies",
    description: "Engagement, Mehendi, Sangeet, Seemantha (Baby Shower), and Namakarana.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN6B7_FSQAO2kVw10_wws_X0B-wq4esHAC6x2FbjtY6zANyW8T_vyDRM&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIWsfmZXhgYnXUsAlJnyZnOb_N9Rkyag1BkzIKIWy9TuwBn9P5nBX47k&s=10",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000"
    ],
    venueDetails: "Boutique lawns, hotel banquets, and heritage family estates.",
    designHighlights: [
      "Seemantha lotus floral backdrops and decorated jhulas",
      "Nischayathartha ring exchange tray & backdrop styling",
      "Vibrant Mehendi seating with marigold swings",
      "Namakarana traditional brass cradle decorations"
    ],
    planningNotes: "Personalized guest care, warm hospitality, traditional ritual setup, and custom food stalls.",
    testimonial: {
      client: "Pavithra Ajay",
      text: "We handed over the complete responsibility of our daughter's Seemantha (Baby Shower) and Namakarana ceremonies to Surya Event Management. The floral decor was elegant and beautiful."
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    clientName: "Divakara Kakathkar",
    eventType: "Grand South Indian Wedding",
    review: "Surya Event Management made our daughter's wedding at Bengaluru Palace Grounds an unforgettable family celebration. The Muhurtha with fresh jasmine and gold drapes was deeply authentic and beautiful.",
    location: "Palace Grounds, Bengaluru",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400"
  },
  {
    clientName: "Radhika Vinod",
    eventType: "Grand Reception & Stage Decor",
    review: "Their reception stage structure design in Bengaluru was beyond our expectations. From the grand entrance archway to the stage lighting, everything was managed with complete care and warmth.",
    location: "Taj West End, Bengaluru",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400"
  },
  {
    clientName: "Pavithra Ajay",
    eventType: "Seemantha & Namakarana Ceremony",
    review: "We handed over the complete responsibility of our daughter's Seemantha (Baby Shower) and Namakarana ceremonies to Surya Event Management. The pastel floral decor was so elegant!",
    location: "Grand Lawns, Bengaluru",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=400"
  },
  {
    clientName: "Nagaraj V Suvarna",
    eventType: "End-to-End Wedding Package",
    review: "An end-to-end wedding package that gave our family total peace of mind. Every ritual from Nischayathartha to Bidaai was executed seamlessly with great respect for our traditions.",
    location: "Heritage Resort, Mysuru",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
  },
  {
    clientName: "Nirmala Chandrashekar",
    eventType: "Traditional Muhurtham & Reception",
    review: "The traditional Muhurtham setup with fresh marigolds and brass lamps looked so divine. Highly recommend their team for any South Indian wedding in Karnataka.",
    location: "Imperial Courtyard, Hubli",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  }
];

export const TRUST_METRICS = [
  { value: "Decades", label: "Of Trusted Heritage" },
  { value: "500+", label: "Happy South Indian Families" },
  { value: "100%", label: "End-to-End Package Support" },
  { value: "Bengaluru", label: "Headquarters & Regional Operations" }
];

