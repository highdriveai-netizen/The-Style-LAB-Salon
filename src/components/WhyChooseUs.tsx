import React from 'react';
import { Sparkles, Scissors, Compass, CalendarCheck } from 'lucide-react';
import { BENEFITS } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#C5A059]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#C5A059]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F4EFEA] border-y border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C5A059]" />
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#A47F3B]">
              The Style Lab Standard
            </span>
            <span className="h-[1px] w-6 bg-[#C5A059]" />
          </div>
          <h2
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal tracking-tight"
          >
            Why Choose Us
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed font-light">
            We prioritize thoughtful artistry, attentive consultations, and a calming salon sanctuary where every client feels heard and refreshed.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.id}
              id={`why-choose-card-${benefit.id}`}
              className="bg-[#FAF8F5] p-8 border border-[#E7DFD5] hover:border-[#C5A059] transition-all duration-300 rounded-xs flex flex-col justify-between group hover:shadow-md"
            >
              <div className="space-y-6">
                {/* Icon with refined styling */}
                <div className="w-14 h-14 rounded-xs bg-[#F4EFEA] group-hover:bg-[#1C1917] flex items-center justify-center transition-colors duration-300 border border-[#E7DFD5]">
                  <span className="group-hover:brightness-125 transition-all">
                    {getIcon(benefit.iconName)}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl font-medium text-[#1C1917] group-hover:text-[#A47F3B] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Minimal bottom sequence indicator */}
              <div className="pt-6 mt-6 border-t border-[#E7DFD5]/60 flex items-center justify-between text-[11px] text-[#78716C] font-mono">
                <span>0{idx + 1}</span>
                <span className="text-[#C5A059] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
