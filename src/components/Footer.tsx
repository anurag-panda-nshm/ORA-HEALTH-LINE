import React from 'react';
import { DOCTOR_INFO, CLINIC_CHAMBERS } from '../data/clinicData';
import { Sparkles, Phone, Mail, MapPin, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Doctor Profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={DOCTOR_INFO.logoUrl}
                alt="ORA Health Line Logo"
                className="h-11 w-auto object-contain bg-white/10 p-1 rounded-lg"
              />
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Modern oral surgery and advanced laser clinic led by <strong>{DOCTOR_INFO.name}</strong> ({DOCTOR_INFO.qualification}, Reg. No: {DOCTOR_INFO.regNo}). Suture-free laser precision, single-sitting root canals, dental implants, and aesthetic laser therapies in South Bengal.
            </p>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{DOCTOR_INFO.pastExperience}</span>
              </div>
              <div>West Bengal Dental Council Registration: <strong>4565-A</strong></div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <a
                href={DOCTOR_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center gap-1 font-semibold"
              >
                <span>Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <a
                href={DOCTOR_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center gap-1 font-semibold"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: The 4 Chambers & Timings */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Chambers &amp; Timings
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CLINIC_CHAMBERS.map((ch) => (
                <div
                  key={ch.id}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1"
                >
                  <div className="font-bold text-white text-xs">
                    {ch.name.split('–')[0].trim()}
                  </div>
                  <div className="text-[11px] text-teal-400 font-medium">{ch.days}</div>
                  <div className="text-[11px] text-slate-400">{ch.timings}</div>
                  <div className="text-[10px] text-slate-500 truncate mt-1">{ch.landmark}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contacts & Booking CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact &amp; Emergency
            </h4>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <div>
                  <span className="block font-bold text-white">{DOCTOR_INFO.phone}</span>
                  <span className="text-[10px] text-slate-400">Call &amp; WhatsApp Consultations</span>
                </div>
              </a>

              <a
                href={`mailto:${DOCTOR_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="truncate">{DOCTOR_INFO.email}</span>
              </a>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-teal-600 hover:bg-teal-500 text-white shadow-md transition-colors cursor-pointer text-center"
                >
                  Book Instant Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ORA Health Line · Dr. Kuntal Nayak. All rights reserved.
          </p>
          <p className="text-slate-500 text-center sm:text-right max-w-md">
            Medical information provided on this website is for patient education and appointment scheduling purposes. Clinical treatment plans are formulated after clinical evaluation by Dr. Nayak.
          </p>
        </div>
      </div>
    </footer>
  );
};
