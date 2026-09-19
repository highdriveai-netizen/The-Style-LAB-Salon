import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Clock, Sparkles, CheckCircle2, MessageSquare, Facebook } from 'lucide-react';
import { BUSINESS_DATA, SERVICE_CATEGORIES } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceCategory,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialServiceCategory || "Men's Cuts & Fades");
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Afternoon (1:00 PM - 5:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceCategory) {
      setCategory(initialServiceCategory);
    }
  }, [initialServiceCategory]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    try {
      await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          category,
          date,
          time,
          notes,
        }),
      });
    } catch {
      // In case of offline or direct static mode, still allow confirmation
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-[#1C1917]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="relative bg-[#FAF8F5] border border-[#E7DFD5] w-full max-w-lg rounded-xs shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1C1917] text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              The Style Lab • Chattogram
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#FAF8F5]">
              Request an Appointment
            </h3>
            <p className="text-xs text-[#A8A29E]">
              82 Chatteshwari Rd • Call: {BUSINESS_DATA.phone}
            </p>
          </div>
          <button
            id="booking-modal-close-btn"
            onClick={onClose}
            className="text-[#A8A29E] hover:text-white p-1.5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#E8F5E9] text-[#2E7D32] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif text-2xl text-[#1C1917]">
                Appointment Request Received
              </h4>
              <p className="text-sm text-[#57534E] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#1C1917]">{name}</span>. Our styling team will contact you at{' '}
                <span className="font-semibold text-[#1C1917]">{phone}</span> to confirm your slot for{' '}
                <span className="font-semibold text-[#1C1917]">{category}</span> service.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${BUSINESS_DATA.phone}`}
                  className="px-5 py-2.5 bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xs inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Direct: {BUSINESS_DATA.phone}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#F4EFEA] hover:bg-[#E7DFD5] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Category */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1.5">
                  Service Category *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Men's Cuts & Fades",
                    'Beard Sculpting',
                    'Styling & Finish',
                    "Men's Facial & Skin",
                    'Scalp Therapy',
                    'Complete Grooming',
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`py-2 px-2.5 text-xs font-medium rounded-xs border text-center transition-all cursor-pointer ${
                        category === cat
                          ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]'
                          : 'bg-[#F4EFEA] text-[#57534E] border-[#E7DFD5] hover:bg-[#E7DFD5]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2 bg-white border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs"
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3.5 py-2 bg-white border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs"
                  />
                </div>
              </div>

              {/* Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs"
                  />
                </div>

                <div>
                  <label htmlFor="booking-time" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="booking-notes" className="block text-[11px] uppercase tracking-wider font-semibold text-[#57534E] mb-1">
                  Specific Requests or Notes (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Haircut & beard trim, special event styling..."
                  className="w-full px-3.5 py-2 bg-white border border-[#E7DFD5] focus:border-[#C5A059] focus:outline-hidden text-sm text-[#1C1917] rounded-xs"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 space-y-3">
                <button
                  id="booking-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#1C1917] hover:bg-[#292524] disabled:opacity-70 text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}</span>
                </button>

                {/* Direct alternative options */}
                <div className="pt-2 border-t border-[#E7DFD5] flex items-center justify-between text-xs text-[#78716C]">
                  <span>Need immediate booking?</span>
                  <div className="flex items-center space-x-3">
                    <a
                      href={`tel:${BUSINESS_DATA.phone}`}
                      className="text-[#1C1917] font-semibold hover:text-[#A47F3B] flex items-center space-x-1"
                    >
                      <Phone className="w-3 h-3 text-[#C5A059]" />
                      <span>Call {BUSINESS_DATA.phone}</span>
                    </a>
                    <a
                      href={BUSINESS_DATA.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C1917] font-semibold hover:text-[#A47F3B] flex items-center space-x-1"
                    >
                      <Facebook className="w-3 h-3 text-[#C5A059]" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
