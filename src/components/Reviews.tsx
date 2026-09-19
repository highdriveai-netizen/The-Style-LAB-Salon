import React from 'react';
import { Star, ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';
import { BUSINESS_DATA } from '../data/salonData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F4EFEA] border-y border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C5A059]" />
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#A47F3B]">
              Verified Feedback
            </span>
            <span className="h-[1px] w-6 bg-[#C5A059]" />
          </div>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal tracking-tight"
          >
            Client Trust & Satisfaction
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed font-light">
            Our reputation in Chattogram is built on authentic client experiences, attentive listening, and consistent styling precision.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="max-w-4xl mx-auto bg-[#FAF8F5] border border-[#E7DFD5] rounded-xs p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#E7DFD5] pb-8 md:pb-0 md:pr-8 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#A47F3B]">
                Overall Rating
              </span>
              <div className="flex items-baseline justify-center md:justify-start space-x-2">
                <span className="text-6xl sm:text-7xl font-serif font-bold text-[#1C1917]">
                  {BUSINESS_DATA.googleRating}
                </span>
                <span className="text-xl text-[#78716C]">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C5A059]" />
                ))}
              </div>

              <p className="text-sm font-medium text-[#1C1917]">
                Based on <span className="font-bold">{BUSINESS_DATA.totalReviews}</span> verified customer reviews
              </p>

              <div className="inline-flex items-center space-x-1.5 text-xs text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Salon Rating</span>
              </div>
            </div>

            {/* Right Pillars / Rating Breakdown */}
            <div className="md:col-span-7 space-y-5">
              <h3 className="font-serif text-lg text-[#1C1917] font-medium">
                Customer Satisfaction Hallmarks
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between font-medium text-[#44403C] mb-1">
                    <span>Styling Precision & Craftsmanship</span>
                    <span className="text-[#1C1917] font-semibold">99%</span>
                  </div>
                  <div className="w-full bg-[#E7DFD5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-full w-[99%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[#44403C] mb-1">
                    <span>Hygiene, Cleanliness & Ambience</span>
                    <span className="text-[#1C1917] font-semibold">98%</span>
                  </div>
                  <div className="w-full bg-[#E7DFD5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-full w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[#44403C] mb-1">
                    <span>Attentive Consultation & Courtesy</span>
                    <span className="text-[#1C1917] font-semibold">99%</span>
                  </div>
                  <div className="w-full bg-[#E7DFD5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-full w-[99%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[#44403C] mb-1">
                    <span>Comfortable, Relaxed Atmosphere</span>
                    <span className="text-[#1C1917] font-semibold">97%</span>
                  </div>
                  <div className="w-full bg-[#E7DFD5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-full w-[97%]" />
                  </div>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-xs text-[#78716C]">
                  Visit The Style Lab in Chattogram to experience our hospitality.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Social Proof CTA */}
        <div className="mt-10 text-center">
          <a
            id="reviews-facebook-check-btn"
            href={BUSINESS_DATA.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#1C1917] hover:text-[#A47F3B] transition-colors py-2 px-4 border border-[#1C1917]/20 hover:border-[#1C1917]/50 rounded-xs"
          >
            <span>See What Our Clients Say on Facebook</span>
            <span className="text-[#C5A059]">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};
