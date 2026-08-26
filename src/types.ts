export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  anchorId: string;
}

export interface FeaturedEvent {
  id: string;
  title: string;
  type: string;
  venueStyle: string;
  shortStory: string;
  story: string;
  bannerImage: string;
  images: string[];
  guestCapacity: string;
  highlights: string[];
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  venueDetails: string;
  designHighlights: string[];
  planningNotes: string;
  testimonial?: {
    client: string;
    text: string;
  };
}

export interface Testimonial {
  clientName: string;
  eventType: string;
  review: string;
  location: string;
  image: string;
}
