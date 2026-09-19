import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'space' | 'grooming'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2">
              <span className="h-[1px] w-6 bg-[#C5A059]" />
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#A47F3B]">
                Salon Experience
              </span>
            </div>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal tracking-tight"
            >
              Step Into Your Style
            </h2>
            <p className="text-base text-[#57534E] max-w-xl font-light">
              Glimpses of contemporary salon aesthetics, precision hair rituals, and grooming artistry in an elegant environment.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'hair', label: 'Hair & Styling' },
              { id: 'space', label: 'Atmosphere' },
              { id: 'grooming', label: 'Grooming' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`gallery-filter-${tab.id}`}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#1C1917] text-[#FAF8F5]'
                    : 'bg-[#F4EFEA] text-[#57534E] hover:bg-[#E7DFD5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            // Asymmetric layout spans for high-fashion editorial rhythm
            const colSpan =
              index === 0
                ? 'lg:col-span-7 aspect-[16/11]'
                : index === 1
                ? 'lg:col-span-5 aspect-[4/5]'
                : index === 2
                ? 'lg:col-span-4 aspect-[4/5]'
                : index === 3
                ? 'lg:col-span-4 aspect-[4/5]'
                : index === 4
                ? 'lg:col-span-4 aspect-[4/5]'
                : 'lg:col-span-6 aspect-[16/10]';

            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded-xs border border-[#E7DFD5] bg-[#F4EFEA] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 ${colSpan}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Elegant Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-[#1C1917]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-2 bg-[#FAF8F5]/90 rounded-full text-[#1C1917] hover:bg-white shadow-xs">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C5A059]">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg text-white font-medium mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Replaceable photography footnote */}
        <p className="mt-8 text-center text-xs text-[#78716C] italic">
          * Representative visual styling and ambience preview for The Style Lab, Chattogram.
        </p>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          id="gallery-lightbox-overlay"
          className="fixed inset-0 z-50 bg-[#1C1917]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-xs overflow-hidden shadow-2xl border border-[#E7DFD5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#1C1917]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <button
                id="gallery-lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2.5 bg-[#1C1917]/80 hover:bg-[#1C1917] text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#FAF8F5] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#A47F3B]">
                  {selectedImage.categoryLabel}
                </span>
                <h4 className="font-serif text-xl text-[#1C1917] font-medium mt-0.5">
                  {selectedImage.title}
                </h4>
              </div>
              <span className="text-xs text-[#78716C]">The Style Lab • Chattogram</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
