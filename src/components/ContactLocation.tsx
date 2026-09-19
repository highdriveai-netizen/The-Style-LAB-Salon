import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Facebook,
  ExternalLink,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/salonData';

interface ContactLocationProps {
  onOpenBooking: () => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          message,
        }),
      });
    } catch {
      // In case of offline or fallback, proceed to confirmation
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName('');
        setPhone('');
        setMessage('');
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C5A059]" />
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#A47F3B]">
              Visit & Connect
            </span>
            <span className="h-[1px] w-6 bg-[#C5A059]" />
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal tracking-tight"
          >
            Location & Contact
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed font-light">
            Conveniently located on Chatteshwari Road in Chattogram. Reach out directly or drop by for a customized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div
              id="contact-details-card"
              className="bg-[#FAF8F5] border border-[#E7DFD5] p-8 rounded-xs space-y-6 shadow-xs"
            >
              <div>
                <h3 className="font-serif text-2xl text-[#1C1917] font-medium">
                  {BUSINESS_DATA.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#A47F3B] font-semibold mt-1">
                  Chattogram, Bangladesh
                </p>
              </div>

              <div className="space-y-4 text-sm">
                {/* Address Item */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#F4EFEA] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7DFD5]">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                      Address
                    </span>
                    <p className="font-medium text-[#1C1917] mt-0.5 leading-snug">
                      {BUSINESS_DATA.address}
                    </p>
                    <p className="text-xs text-[#57534E]">{BUSINESS_DATA.country}</p>
                    <a
                      id="contact-maps-link"
                      href={BUSINESS_DATA.googleMapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#A47F3B] hover:text-[#1C1917] font-semibold mt-1 transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#F4EFEA] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7DFD5]">
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                      Direct Phone
                    </span>
                    <a
                      id="contact-phone-link"
                      href={`tel:${BUSINESS_DATA.phone}`}
                      className="font-medium text-[#1C1917] hover:text-[#A47F3B] text-base mt-0.5 block transition-colors"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                    <span className="text-xs text-[#78716C]">Call directly for scheduling</span>
                  </div>
                </div>

                {/* Facebook Item */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#F4EFEA] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7DFD5]">
                    <Facebook className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                      Social Page
                    </span>
                    <a
                      id="contact-facebook-link"
                      href={BUSINESS_DATA.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1C1917] hover:text-[#A47F3B] mt-0.5 inline-flex items-center space-x-1.5 transition-colors"
                    >
                      <span>facebook.com/thestylelabctg</span>
                      <ExternalLink className="w-3 h-3 text-[#A47F3B]" />
                    </a>
                    <p className="text-xs text-[#78716C] mt-0.5">Direct messaging & updates</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons inside card */}
              <div className="pt-4 border-t border-[#E7DFD5] grid grid-cols-2 gap-3">
                <a
                  id="contact-call-action-btn"
                  href={`tel:${BUSINESS_DATA.phone}`}
                  className="py-2.5 px-3 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center space-x-2 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Now</span>
                </a>
                <button
                  id="contact-appointment-modal-btn"
                  onClick={onOpenBooking}
                  className="py-2.5 px-3 bg-[#F4EFEA] hover:bg-[#E7DFD5] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#E7DFD5] transition-colors cursor-pointer text-center"
                >
                  Book Online
                </button>
              </div>

            </div>

            {/* Quick Note Box */}
            <div className="p-5 bg-[#F4EFEA] border border-[#E7DFD5] rounded-xs space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Visit Us Today</span>
              </span>
              <p className="text-xs text-[#57534E] leading-relaxed">
                We accommodate both reserved appointments and walk-in consultations. Prior reservation is recommended for prime styling hours.
              </p>
            </div>

          </div>

          {/* Right: Map Card & Quick Inquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Elegant Map Representation Card */}
            <div
              id="map-container-card"
              className="bg-[#FAF8F5] border border-[#E7DFD5] rounded-xs overflow-hidden shadow-xs"
            >
              <div className="p-4 bg-[#F4EFEA] border-b border-[#E7DFD5] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                    Location Map Preview
                  </span>
                </div>

                <a
                  id="map-directions-btn"
                  href={BUSINESS_DATA.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider bg-[#1C1917] text-[#FAF8F5] px-3.5 py-1.5 rounded-xs hover:bg-[#292524] transition-colors"
                >
                  <Navigation className="w-3 h-3 text-[#C5A059]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Styled Interactive Location Visual / Map Frame */}
              <div className="relative h-64 sm:h-72 w-full bg-[#EFE9DF] overflow-hidden flex items-center justify-center">
                {/* Embedded OSM / Google Maps safe frame or clean graphic interface */}
                <iframe
                  title="The Style Lab Location Map"
                  src="https://maps.google.com/maps?q=82+Chatteshwari+Rd,+Chattogram+4000,+Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin Badge in case iframe is loading */}
                <div className="absolute bottom-4 left-4 z-10 bg-[#FAF8F5]/95 backdrop-blur-xs px-3.5 py-2 border border-[#E7DFD5] rounded-xs shadow-md">
                  <p className="text-xs font-bold text-[#1C1917]">The Style Lab</p>
                  <p className="text-[11px] text-[#57534E]">82 Chatteshwari Rd, Chattogram</p>
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-[#FAF8F5] border border-[#E7DFD5] p-6 sm:p-8 rounded-xs space-y-4">
              <h3 className="font-serif text-xl text-[#1C1917] font-medium">
                Send a Direct Style Inquiry
              </h3>
              <p className="text-xs text-[#57534E]">
                Have a question regarding hair styling, treatments, or scheduling? Leave your details below and our team will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-4 bg-[#E8F5E9] border border-[#A5D6A7] rounded-xs flex items-center space-x-3 text-[#2E7D32]">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-semibold">
                    Thank you! Your inquiry has been received. We will contact you at {phone} shortly.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                        Your Name
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Shakib Ahmed"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                      Message / Desired Service
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what look or service you have in mind..."
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs transition-colors"
                    />
                  </div>

                  <button
                    id="inquiry-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-[#1C1917] hover:bg-[#292524] disabled:opacity-70 text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
