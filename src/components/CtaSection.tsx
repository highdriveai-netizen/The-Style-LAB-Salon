import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/salonData';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#1C1917] text-[#FAF8F5] overflow-hidden">
      {/* Subtle warm accent glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative fine lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center space-x-2">
          <span className="h-[1px] w-6 bg-[#C5A059]" />
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#C5A059]">
            The Style Lab • Chattogram
          </span>
          <span className="h-[1px] w-6 bg-[#C5A059]" />
        </div>

        <h2
          id="cta-headline"
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight tracking-tight text-white max-w-3xl mx-auto"
        >
          Ready for Your Next Look?
        </h2>

        <p className="text-base sm:text-lg text-[#D6D3D1] max-w-2xl mx-auto font-light leading-relaxed">
          Book your visit to The Style Lab and make your next style moment count. Enjoy personalized attention, contemporary men's haircuts, beard sculpting, and an unhurried grooming experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            id="cta-call-button"
            href={`tel:${BUSINESS_DATA.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#B88E44] text-[#1C1917] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-3 rounded-xs"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_DATA.phone}</span>
          </a>

          <button
            id="cta-book-button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-[#FAF8F5] border border-white/30 hover:border-white/60 font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-3 rounded-xs cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Book an Appointment</span>
          </button>
        </div>

        <div className="pt-4 text-xs text-[#A8A29E]">
          <span>82 Chatteshwari Rd, Chattogram 4000</span>
          <span className="mx-2">•</span>
          <span>Open for appointments & walk-in consultations</span>
        </div>

      </div>
    </section>
  );
};
