import React, { useState } from 'react';
import { DOCTOR_INFO, LASER_VS_TRADITIONAL } from '../data/clinicData';
import {
  Award,
  ShieldCheck,
  Stethoscope,
  Heart,
  CheckCircle2,
  Calendar,
  Zap,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenBooking }) => {
  const [docImgError, setDocImgError] = useState(false);

  return (
    <section id="doctor" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Spotlight Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Headshot Presentation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200 shadow-2xl aspect-[4/5] max-w-md mx-auto group">
              {!docImgError ? (
                <img
                  src={DOCTOR_INFO.realPhotoUrl}
                  alt="Dr. Kuntal Nayak BDS MDS Kolkata - Dental & Oral Surgeon"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  onError={() => setDocImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-slate-900">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                    <Stethoscope className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-lg">{DOCTOR_INFO.name}</span>
                  <span className="text-xs text-teal-300 mt-1">{DOCTOR_INFO.qualification}</span>
                </div>
              )}

              {/* Scrim overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none" />

              {/* Verified Badge & Info overlay */}
              <div className="absolute bottom-4 inset-x-4 text-white z-10 flex items-end justify-between">
                <div>
                  <div className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
                    <span>{DOCTOR_INFO.name}</span>
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="text-xs text-teal-300 font-medium">
                    {DOCTOR_INFO.qualification}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    WB Dental Council Reg. No: <strong>{DOCTOR_INFO.regNo}</strong>
                  </div>
                </div>

                <div className="bg-teal-600/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl backdrop-blur-xs shadow-md whitespace-nowrap">
                  10+ Yrs Exp
                </div>
              </div>
            </div>
          </div>

          {/* Right Clinical Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/60">
              <Award className="w-3.5 h-3.5 text-teal-600" />
              <span>Lead Oral Surgeon &amp; Laser Specialist</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {DOCTOR_INFO.name}
              </h2>
              <p className="text-base font-semibold text-teal-700">
                {DOCTOR_INFO.qualification} · Reg. No: {DOCTOR_INFO.regNo}
              </p>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              {DOCTOR_INFO.about}
            </p>

            {/* Credential Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Oncological Surgical Training</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trained at Medella Cancer Institute Kolkata with extensive expertise in oral mucosal lesions, precancerous screening, and sterile surgical techniques.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Zap className="w-4 h-4 text-teal-600" />
                  <span>Laser Master Certification</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certified in soft-tissue dental lasers and dermatological Q-switched Nd:YAG systems for suture-free oral and facial treatments.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Layers className="w-4 h-4 text-teal-600" />
                  <span>Single-Sitting Rotary RCTs</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized in computerized apex locators and nickel-titanium motorized systems, saving natural teeth with zero pain in 40 minutes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Heart className="w-4 h-4 text-teal-600" />
                  <span>Patient-First Compassion</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated to making high-end clinical care accessible to rural and urban patients across Bankura without inflating medical costs.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Direct Consultation</span>
              </button>

              <a
                href={DOCTOR_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-600 hover:text-teal-700 underline underline-offset-4"
              >
                Visit kuntalnayak.com
              </a>
            </div>
          </div>
        </div>

        {/* Laser vs. Traditional Surgery Comparison Table */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
              <Activity className="w-3.5 h-3.5 text-teal-600" />
              <span>Technology Comparison</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Traditional Surgery vs. Dr. Nayak’s Laser Care
            </h3>
            <p className="text-slate-600 text-sm">
              See why hundreds of patients choose bloodless laser dentistry over conventional scalpels and sutures.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="p-4 sm:p-5">Clinical Aspect</th>
                  <th className="p-4 sm:p-5 text-slate-500">Traditional Surgery</th>
                  <th className="p-4 sm:p-5 text-teal-800 bg-teal-50/70">
                    Dr. Nayak's Laser Dentistry
                  </th>
                  <th className="p-4 sm:p-5 text-slate-700 hidden md:table-cell">
                    Patient Advantage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {LASER_VS_TRADITIONAL.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      {row.traditional}
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-teal-700 bg-teal-50/40">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{row.laser}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 font-medium hidden md:table-cell">
                      {row.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
