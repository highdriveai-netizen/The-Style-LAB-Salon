import React from 'react';
import { Phone, MapPin, Facebook, ArrowUp } from 'lucide-react';
import { BUSINESS_DATA, NAV_LINKS, SERVICE_CATEGORIES } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#141210] text-[#D6D3D1] border-t border-[#292524] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#292524]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#FAF8F5]">
                THE STYLE LAB
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium mt-1">
                Men's Salon • Chattogram, Bangladesh
              </span>
            </div>

            <p className="text-sm text-[#A8A29E] leading-relaxed font-light italic">
              "{BUSINESS_DATA.tagline}"
            </p>

            <p className="text-xs text-[#78716C] leading-relaxed pr-4">
              A modern men's salon experience designed around your style, confidence, and individuality. Premium haircutting, beard sculpting, and grooming in a comfortable atmosphere.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                id="footer-facebook-icon-link"
                href={BUSINESS_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#1C1917] border border-[#3E3835] hover:border-[#C5A059] text-[#FAF8F5] hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="The Style Lab on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                id="footer-phone-icon-link"
                href={`tel:${BUSINESS_DATA.phone}`}
                className="w-9 h-9 rounded-xs bg-[#1C1917] border border-[#3E3835] hover:border-[#C5A059] text-[#FAF8F5] hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Call The Style Lab"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                id="footer-map-icon-link"
                href={BUSINESS_DATA.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#1C1917] border border-[#3E3835] hover:border-[#C5A059] text-[#FAF8F5] hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Location on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#FAF8F5] block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    id={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#A8A29E] hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Category List */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#FAF8F5] block">
              Services
            </span>
            <ul className="space-y-2 text-sm text-[#A8A29E]">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#FAF8F5] block">
              Salon Location
            </span>
            <div className="space-y-2.5 text-xs text-[#A8A29E]">
              <p className="text-white font-medium">The Style Lab</p>
              <p>{BUSINESS_DATA.address}</p>
              <p>{BUSINESS_DATA.country}</p>

              <div className="pt-2">
                <span className="block text-[11px] text-[#78716C] uppercase tracking-wider">Phone</span>
                <a
                  href={`tel:${BUSINESS_DATA.phone}`}
                  className="text-white hover:text-[#C5A059] font-medium text-sm transition-colors"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </div>

              <div className="pt-1">
                <span className="block text-[11px] text-[#78716C] uppercase tracking-wider">Facebook</span>
                <a
                  href={BUSINESS_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:underline"
                >
                  /thestylelabctg
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© 2026 The Style Lab. All rights reserved.</p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-[#A8A29E] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
