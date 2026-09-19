import React from 'react';
import { Star, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#FAF8F5] overflow-hidden"
    >
      {/* Background subtle ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#E7DFD5]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
            
            {/* Trust Indicator & Location pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div
                id="hero-rating-badge"
                className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#F4EFEA] border border-[#E7DFD5] rounded-full text-xs text-[#44403C]"
              >
                <div className="flex items-center space-x-0.5 text-[#C5A059]" aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                  ))}
                </div>
                <span className="font-semibold text-[#1C1917]">{BUSINESS_DATA.googleRating} / 5</span>
                <span className="text-[#78716C]">({BUSINESS_DATA.totalReviews} reviews)</span>
              </div>

              <div
                id="hero-location-pill"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 bg-transparent border border-[#E7DFD5] rounded-full text-xs text-[#57534E]"
              >
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Chattogram, Bangladesh</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <span className="inline-block text-xs uppercase font-semibold tracking-[0.3em] text-[#A47F3B]">
                Contemporary Men's Salon & Grooming
              </span>
              <h1
                id="hero-main-heading"
                className="text-4xl sm:text-6xl xl:text-7xl font-serif font-normal text-[#1C1917] leading-[1.08] tracking-tight"
              >
                Your Style.{' '}
                <span className="italic font-normal block sm:inline text-[#292524] underline decoration-[#C5A059]/40 decoration-1 underline-offset-8">
                  Your Statement.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl font-light">
              Discover a modern salon experience designed around your style, confidence, and individuality. Precision haircuts, beard sculpting, and an unhurried gentleman's atmosphere in the heart of Chattogram.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-cta-btn"
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-3 rounded-xs cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-secondary-cta-btn"
                href="#services"
                onClick={handleScrollToServices}
                className="px-8 py-4 bg-transparent hover:bg-[#F4EFEA] text-[#1C1917] border border-[#1C1917]/20 hover:border-[#1C1917]/40 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2 rounded-xs"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 border-t border-[#E7DFD5]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#57534E]">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="font-medium text-[#292524]">Precision Haircuts</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="font-medium text-[#292524]">Beard Sculpting</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="font-medium text-[#292524]">82 Chatteshwari Rd</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Editorial Visuals */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Editorial Image Card */}
              <div
                id="hero-featured-image-container"
                className="relative z-10 overflow-hidden shadow-2xl rounded-xs border border-[#E7DFD5] bg-[#FAF8F5] aspect-[4/5]"
              >
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern men's salon haircut and beard styling at The Style Lab Chattogram"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60" />
                
                {/* Floating caption on hero image */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                  <p className="text-[11px] uppercase tracking-widest text-[#E7D7B5] font-semibold">The Style Lab</p>
                  <p className="text-sm font-serif italic text-[#FAF8F5]">Tailored men's cuts. Master beard craftsmanship.</p>
                </div>
              </div>

              {/* Decorative Secondary Floating Card */}
              <div
                id="hero-floating-stat-card"
                className="absolute -bottom-6 -left-6 z-20 hidden sm:flex items-center space-x-3 p-4 bg-[#FAF8F5] border border-[#E7DFD5] shadow-xl rounded-xs backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xs bg-[#1C1917] flex items-center justify-center text-[#C5A059]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-[#1C1917]">4.9 Rating</span>
                    <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  </div>
                  <p className="text-[11px] text-[#78716C]">198 Verified Reviews</p>
                </div>
              </div>

              {/* Decorative framing background line */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#C5A059]/30 -z-0 pointer-events-none hidden sm:block" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
