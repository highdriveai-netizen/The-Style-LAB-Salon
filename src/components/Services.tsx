import React, { useState } from 'react';
import { Sparkles, Calendar, Check, ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/salonData';
import { ServiceCategory } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C5A059]" />
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#A47F3B]">
              Care & Craftsmanship
            </span>
            <span className="h-[1px] w-6 bg-[#C5A059]" />
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal tracking-tight"
          >
            Our Service Categories
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed font-light">
            Every appointment begins with a personal conversation about your goals. Explore our core styling and care categories tailored for modern Chattogram lifestyles.
          </p>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              id="filter-category-all"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-full cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#F4EFEA] text-[#57534E] hover:bg-[#E7DFD5]'
              }`}
            >
              All Services
            </button>
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                id={`filter-category-${category.id}`}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-full cursor-pointer ${
                  activeTab === category.id
                    ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                    : 'bg-[#F4EFEA] text-[#57534E] hover:bg-[#E7DFD5]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((service: ServiceCategory) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-[#FAF8F5] border border-[#E7DFD5] hover:border-[#C5A059]/60 transition-all duration-300 rounded-xs overflow-hidden flex flex-col hover:shadow-lg"
            >
              {/* Image Container with subtle zoom on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F4EFEA]">
                <img
                  src={service.image}
                  alt={`${service.name} services at The Style Lab`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#1C1917]/85 backdrop-blur-xs text-[#FAF8F5] text-[11px] uppercase tracking-widest font-semibold rounded-xs">
                  {service.name}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium group-hover:text-[#A47F3B] transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-[#57534E] leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Service Highlights */}
                  <div className="pt-2 border-t border-[#F4EFEA] space-y-1.5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-[#44403C]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#E7DFD5]/80 flex items-center justify-between">
                  <span className="text-[11px] text-[#78716C] italic">Customized consultation</span>
                  <button
                    id={`service-enquire-btn-${service.id}`}
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#A47F3B] group/btn transition-colors cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on customized pricing & consultation */}
        <div className="mt-12 p-6 bg-[#F4EFEA] border border-[#E7DFD5] rounded-xs text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 text-[#C5A059]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1C1917]">
              Tailored Consultations
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
            Service requirements vary based on personal preferences, hair length, and condition. Please contact us directly or visit our salon at 82 Chatteshwari Rd for a friendly, no-obligation style assessment.
          </p>
        </div>

      </div>
    </section>
  );
};
