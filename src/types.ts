export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  formattedPhone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  facebookUrl: string;
  googleRating: number;
  totalReviews: number;
  googleMapsQueryUrl: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Scissors' | 'Compass' | 'CalendarCheck';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'space' | 'grooming';
  categoryLabel: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface BookingRequest {
  fullName: string;
  phone: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
