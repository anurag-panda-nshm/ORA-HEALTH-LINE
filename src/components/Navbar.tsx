import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/clinicData';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          {/* Zone 1: Single text element wordmark with official logo */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 text-slate-900 group whitespace-nowrap shrink-0"
          >
            <img
              src={DOCTOR_INFO.logoIconUrl}
              alt="ORA Health Line Logo"
              className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors leading-tight">
                ORA Health Line
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-teal-700 tracking-wider uppercase">
                Dental &amp; Laser Clinic
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a
              href="#specialties"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Specialties
            </a>
            <a
              href="#laser-clinic"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Laser Clinic
            </a>
            <a
              href="#doctor"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Dr. Kuntal Nayak
            </a>
            <a
              href="#gallery"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Clinic Tour
            </a>
            <a
              href="#chambers"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Chambers &amp; Timings
            </a>
            <a
              href="#reviews"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              Patient Reviews
            </a>
          </nav>

          {/* Zone 3: 1 primary action + Quick Phone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
              title="Call Clinic Emergency & Appointments"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-teal-100" />
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Book Now</span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-18 z-30 bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-5 py-6 space-y-4">
          <nav className="flex flex-col gap-3 font-medium text-slate-700">
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              Oro-Dental Specialties
            </a>
            <a
              href="#laser-clinic"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              Laser Aesthetic Clinic
            </a>
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              Dr. Kuntal Nayak (Profile &amp; Credentials)
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              Virtual Clinic Tour &amp; Laser Facility
            </a>
            <a
              href="#chambers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              4 Chambers &amp; Daily Timings
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              Verified Patient Reviews
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Clinic: {DOCTOR_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
