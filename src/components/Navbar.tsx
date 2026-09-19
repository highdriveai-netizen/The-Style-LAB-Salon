import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { NAV_LINKS, BUSINESS_DATA } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E7DFD5]/80 py-3.5'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-hidden"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#1C1917] group-hover:text-[#A47F3B] transition-colors duration-200">
              THE STYLE LAB
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716C] font-medium mt-0.5">
              Men's Salon • Chattogram
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" aria-label="Primary Navigation" className="hidden md:flex items-center space-x-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-medium text-[#44403C] hover:text-[#1C1917] tracking-wide transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              id="nav-quick-phone-btn"
              href={`tel:${BUSINESS_DATA.phone}`}
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#57534E] hover:text-[#1C1917] transition-colors px-3 py-2"
              title={`Call ${BUSINESS_DATA.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>

            <button
              id="nav-book-appointment-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer rounded-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-quick-book-icon-btn"
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#1C1917] text-[#FAF8F5] rounded-xs"
            >
              Book
            </button>
            <button
              id="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1C1917] hover:text-[#A47F3B] focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#E7DFD5] shadow-lg animate-fadeIn px-6 py-6 transition-all"
        >
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-serif font-medium text-[#1C1917] hover:text-[#A47F3B] transition-colors py-1 flex items-center justify-between border-b border-[#F4EFEA]"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#1C1917] text-[#FAF8F5] text-center text-xs font-semibold uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Book an Appointment</span>
              </button>

              <a
                id="mobile-drawer-call-btn"
                href={`tel:${BUSINESS_DATA.phone}`}
                className="w-full py-2.5 border border-[#1C1917]/20 text-[#1C1917] text-center text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center space-x-2 hover:bg-[#F4EFEA]"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {BUSINESS_DATA.phone}</span>
              </a>
            </div>

            <div className="text-center pt-2 text-[11px] text-[#78716C]">
              {BUSINESS_DATA.address}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
