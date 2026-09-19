import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_DATA } from '../data/salonData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-sticky-cta-bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E7DFD5] px-4 py-3 shadow-lg"
    >
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${BUSINESS_DATA.phone}`}
          className="py-2.5 px-3 bg-[#FAF8F5] border border-[#1C1917]/30 text-[#1C1917] hover:bg-[#F4EFEA] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center space-x-2 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call Now</span>
        </a>

        <button
          id="mobile-sticky-book-btn"
          onClick={onOpenBooking}
          className="py-2.5 px-3 bg-[#1C1917] text-[#FAF8F5] hover:bg-[#292524] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center space-x-2 transition-colors shadow-xs cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
