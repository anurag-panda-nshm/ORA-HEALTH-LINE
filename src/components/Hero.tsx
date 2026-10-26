import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/clinicData';
import { Calendar, ArrowDown, Award, ShieldCheck, Zap, Stethoscope, ChevronRight, Check } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-12 -left-12 -z-10 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clinical Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 w-fit px-3 py-1.5 rounded-lg shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>West Bengal Dental Council Reg. No: 4565-A</span>
              <span className="text-teal-400" aria-hidden="true">·</span>
              <span>WBUHS Kolkata</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Next-Generation Dentistry &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600">
                Bloodless Laser Precision
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Experience gentle, suture-free oral surgery, single-sitting root canals, dental implants, and cutting-edge aesthetic laser dermatology by{' '}
              <strong className="text-slate-900 font-semibold">{DOCTOR_INFO.name}</strong>{' '}
              <span className="text-slate-500">({DOCTOR_INFO.qualification})</span>. Bringing premier Kolkata surgical standards right to Simlapal, Panchmura, Raipur, and Laxmisagar.
            </p>

            {/* Clinical Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>No stitches &amp; zero bleeding</strong> with precision surgical lasers</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Single-visit root canal</strong> with digital apex locators</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Ex-Surgeon, Medella Cancer Institute</strong> Kolkata</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Class-B 100% Autoclave</strong> hospital-grade sterilization</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 active:scale-98 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-teal-100" />
                <span>Book Instant Appointment</span>
                <ChevronRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#laser-clinic"
                className="px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors flex items-center gap-2"
              >
                <span>Explore Laser Treatments</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Regional chamber note */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span>Main Clinic: Simlapal School More</span>
              <span aria-hidden="true">·</span>
              <span>Also at Panchmura, Raipur &amp; Laxmisagar</span>
            </div>
          </div>

          {/* Right Column: Doctor Spotlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-3">
              {/* Doctor Visual */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-900 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={DOCTOR_INFO.realPhotoUrl}
                    alt="Dr. Kuntal Nayak - Dental & Oral Surgeon & Laser Specialist"
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-tr from-teal-950 via-slate-900 to-teal-900 text-white">
                    <div className="w-20 h-20 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center mb-4">
                      <Stethoscope className="w-10 h-10 text-teal-300" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white mb-1">
                      {DOCTOR_INFO.name}
                    </span>
                    <span className="text-xs text-teal-300 font-medium mb-3">
                      {DOCTOR_INFO.qualification}
                    </span>
                    <span className="text-xs text-slate-300 max-w-xs leading-relaxed">
                      Dental &amp; Oral Surgeon &amp; LASER Specialist · Reg No: 4565-A
                    </span>
                  </div>
                )}

                {/* Scrim overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                {/* Floating badge inside image */}
                <div className="absolute bottom-4 inset-x-4 text-white z-10">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {DOCTOR_INFO.name}
                      </h3>
                      <p className="text-xs text-teal-300 font-medium">
                        {DOCTOR_INFO.qualification}
                      </p>
                    </div>
                    <div className="bg-teal-500/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                      10+ Yrs Exp
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {DOCTOR_INFO.pastExperience}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Bar with Real Operatory Image */}
              <div className="mt-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs text-slate-700 gap-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/20250422_110630_11zon-scaled-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg"
                    alt="Simlapal Laser Operatory Chair"
                    className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">Simlapal Laser Operatory</span>
                    <span className="text-[11px] text-slate-500">Diode Surgical Laser &amp; Digital RVG</span>
                  </div>
                </div>
                <a
                  href="#gallery"
                  className="text-[11px] font-bold text-teal-700 hover:text-teal-800 bg-teal-50 px-2.5 py-1.5 rounded-lg border border-teal-200/60 whitespace-nowrap"
                >
                  Tour Facility &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Quantitative Strip */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
              10+ Years
            </div>
            <div className="text-sm font-semibold text-slate-700">Clinical Excellence</div>
            <div className="text-xs text-slate-500">Post-graduate WBUHS Kolkata &amp; hospital training</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-teal-700 tracking-tight font-mono tabular-nums">
              15,000+
            </div>
            <div className="text-sm font-semibold text-slate-700">Smiles Restored</div>
            <div className="text-xs text-slate-500">Root canals, dental implants &amp; smile restorations</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
              100% Suture-Free
            </div>
            <div className="text-sm font-semibold text-slate-700">Laser Soft Tissue Care</div>
            <div className="text-xs text-slate-500">Zero blood, zero stitches, same-day healing</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-teal-700 tracking-tight font-mono tabular-nums">
              4 Chambers
            </div>
            <div className="text-sm font-semibold text-slate-700">Bankura &amp; South Bengal</div>
            <div className="text-xs text-slate-500">Simlapal, Panchmura, Raipur &amp; Laxmisagar</div>
          </div>
        </div>
      </div>
    </section>
  );
};
