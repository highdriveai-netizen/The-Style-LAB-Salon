import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { CtaSection } from './components/CtaSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col antialiased selection:bg-[#C5A059]/20 selection:text-[#1C1917]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Brand Introduction / About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Salon Experience & Gallery */}
        <Gallery />

        {/* Verified Reviews & Social Proof */}
        <Reviews />

        {/* Call to Action Banner */}
        <CtaSection onOpenBooking={() => handleOpenBooking()} />

        {/* Contact & Location Map */}
        <ContactLocation onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceCategory={selectedServiceForBooking}
      />
    </div>
  );
}
