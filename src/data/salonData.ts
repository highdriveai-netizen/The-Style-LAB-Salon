import { BusinessInfo, ServiceCategory, Benefit, GalleryItem } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: 'The Style Lab',
  tagline: 'Modern style. Personal expression.',
  phone: '01609662296',
  formattedPhone: '+880 1609-662296',
  address: '82 Chatteshwari Rd, Chattogram 4000',
  city: 'Chattogram',
  postalCode: '4000',
  country: 'Bangladesh',
  facebookUrl: 'https://facebook.com/thestylelabctg',
  googleRating: 4.9,
  totalReviews: 198,
  googleMapsQueryUrl: 'https://www.google.com/maps/search/?api=1&query=82+Chatteshwari+Rd,+Chattogram+4000,+Bangladesh',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair',
    name: 'Men\'s Cuts & Fades',
    subtitle: 'Precision Scissors & Modern Tapers',
    description:
      'From tailored scissor cuts and modern textured crops to seamless skin fades and classic gentleman silhouettes contoured to your head shape.',
    image:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80',
    highlights: ['Tailored Scissor Haircuts', 'Low / Mid / High Taper Fades', 'Textured Crop & Styling'],
  },
  {
    id: 'grooming',
    name: 'Beard Sculpting',
    subtitle: 'Razor Lines & Hot Towel Finish',
    description:
      'Refined beard shaping, straight razor edge detailing, and nourishing organic beard oils finished with a soothing warm towel compress.',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
    highlights: ['Custom Beard Shaping & Trim', 'Straight Razor Line Detailing', 'Nourishing Hot Towel Ritual'],
  },
  {
    id: 'styling',
    name: 'Styling & Finish',
    subtitle: 'Texture, Volume & Hold',
    description:
      'Contemporary pompadours, matte textured flow, and executive sleek styling crafted with premium clays and pomades for long-lasting confidence.',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
    highlights: ['Matte & Natural Texture Flow', 'Classic Executive Slick Finish', 'Special Occasion Grooming'],
  },
  {
    id: 'beauty',
    name: 'Men\'s Facial & Skin',
    subtitle: 'Deep Cleanse & Anti-Fatigue',
    description:
      'Targeted skincare formulated specifically for men: deep pore exfoliation, blackhead cleansing, skin hydration, and tension-melting face massage.',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80',
    highlights: ['Deep Cleansing Facial', 'Anti-Fatigue Eye & Skin Hydration', 'Post-Shave Soothing Therapy'],
  },
  {
    id: 'care',
    name: 'Scalp & Hair Therapy',
    subtitle: 'Detox, Massage & Health',
    description:
      'Revitalizing scalp wash, deep conditioning therapy, and targeted anti-dandruff treatments designed to nourish hair roots and relieve stress.',
    image:
      'https://images.unsplash.com/photo-1517832606589-7629c3397143?auto=format&fit=crop&w=900&q=80',
    highlights: ['Invigorating Scalp Massage', 'Anti-Dandruff Deep Detox', 'Root Strengthening Therapy'],
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'personalized',
    title: 'Personalized Style',
    description:
      'A cut and beard shape customized to your facial structure, hair texture, and professional lifestyle rather than a generic stencil.',
    iconName: 'Sparkles',
  },
  {
    id: 'experience',
    title: 'Modern Experience',
    description:
      'A dedicated men\'s grooming sanctuary in Chattogram: calm, modern, and clean, designed for unhurried gentleman relaxation.',
    iconName: 'Compass',
  },
  {
    id: 'detail',
    title: 'Attention to Detail',
    description:
      'Thoughtful master craftsmanship with clean edges, sharp scissor work, and meticulous finishing touches that define a premium look.',
    iconName: 'Scissors',
  },
  {
    id: 'booking',
    title: 'Easy Booking',
    description:
      'Contact the salon directly via phone call, quick online request, or Facebook messenger to easily arrange your visit.',
    iconName: 'CalendarCheck',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Men\'s Lounge & Stations',
    category: 'space',
    categoryLabel: 'Atmosphere & Space',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Precision Scissor & Shear Detailing',
    category: 'hair',
    categoryLabel: 'Hair & Styling',
    image:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    aspect: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'Master Beard Sculpting & Trim',
    category: 'grooming',
    categoryLabel: 'Grooming & Detail',
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    aspect: 'portrait',
  },
  {
    id: 'gal-4',
    title: 'Sharp Contemporary Taper Fade',
    category: 'hair',
    categoryLabel: 'Hair & Styling',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    aspect: 'portrait',
  },
  {
    id: 'gal-5',
    title: 'Classic Leather Barber Chairs',
    category: 'space',
    categoryLabel: 'Atmosphere & Space',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Razor Line & Clipper Precision',
    category: 'hair',
    categoryLabel: 'Hair & Styling',
    image:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    aspect: 'portrait',
  },
];
