import React from 'react';
import { DOCTOR_INFO } from '../data/clinicData';
import { AlertCircle, Phone, ArrowRight } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenBooking: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white py-5 px-4 sm:px-6 lg:px-8 border-y border-teal-800/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white tracking-tight">
              Acute Tooth Pain, Accidental Dental Trauma or Uncontrolled Bleeding?
            </h4>
            <p className="text-xs text-slate-300">
              Dr. Kuntal Nayak provides priority emergency dental triage at the Simlapal Main Center daily from 6:00 AM.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <a
            href={`tel:${DOCTOR_INFO.phoneRaw}`}
            className="flex-1 md:flex-initial py-2.5 px-4 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency Call: {DOCTOR_INFO.phone}</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:flex py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Priority Slot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
