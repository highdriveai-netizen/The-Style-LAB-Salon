import React from 'react';
import { MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/salonData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4EFEA] border-y border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with dual imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Image */}
              <div className="relative z-10 w-4/5 shadow-xl border border-[#E7DFD5] overflow-hidden rounded-xs aspect-[4/5] bg-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                  alt="Modern men's salon interior and barber chairs at The Style Lab Chattogram"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 right-0 w-3/5 z-20 shadow-2xl border-2 border-[#FAF8F5] overflow-hidden rounded-xs aspect-square bg-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80"
                  alt="Professional men's scissor haircut and styling consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Accent Badge */}
              <div className="absolute -top-4 -left-4 z-30 p-4 bg-[#1C1917] text-[#FAF8F5] rounded-xs shadow-lg hidden sm:block">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                  Men's Salon
                </span>
                <span className="font-serif text-sm font-medium">Chattogram 4000</span>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Introduction */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="h-[1px] w-8 bg-[#C5A059]" />
                <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#A47F3B]">
                  About The Style Lab
                </span>
              </div>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal leading-tight"
              >
                Where Style Meets You
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[#57534E] leading-relaxed font-light">
              <p className="text-[#1C1917] font-normal">
                The Style Lab is a modern salon in Chattogram created for people who want to look and feel their best.
              </p>
              <p>
                From everyday grooming to a complete style refresh, our focus is on creating a comfortable experience and a look that feels uniquely yours. We believe personal styling should be an invigorating, relaxed ritual that honors your individuality.
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-3.5 bg-[#FAF8F5] border border-[#E7DFD5] rounded-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1C1917]">Personalized Attention</h4>
                  <p className="text-xs text-[#78716C] mt-0.5">Consultative styling tailored to your distinct lifestyle.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-[#FAF8F5] border border-[#E7DFD5] rounded-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1C1917]">Comfortable Ambience</h4>
                  <p className="text-xs text-[#78716C] mt-0.5">A clean, unhurried space designed for peaceful visits.</p>
                </div>
              </div>
            </div>

            {/* Address & Google Maps Direction Link */}
            <div className="pt-4 border-t border-[#E7DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">Salon Address</p>
                  <p className="text-sm text-[#57534E] font-medium mt-0.5">{BUSINESS_DATA.address}, Bangladesh</p>
                </div>
              </div>

              <a
                id="about-view-directions-btn"
                href={BUSINESS_DATA.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#A47F3B] hover:text-[#1C1917] transition-colors"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
