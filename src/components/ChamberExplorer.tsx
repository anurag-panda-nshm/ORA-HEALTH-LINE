import React, { useState } from 'react';
import { CLINIC_CHAMBERS, Chamber, DOCTOR_INFO } from '../data/clinicData';
import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Navigation,
  Calendar,
  CheckCircle2,
  Building,
  Car
} from 'lucide-react';

interface ChamberExplorerProps {
  onSelectChamberForBooking: (chamber: Chamber) => void;
}

export const ChamberExplorer: React.FC<ChamberExplorerProps> = ({ onSelectChamberForBooking }) => {
  const [activeChamberId, setActiveChamberId] = useState<string>('simlapal');
  const [previewMode, setPreviewMode] = useState<'map' | 'photo'>('map');

  const activeChamber = CLINIC_CHAMBERS.find((c) => c.id === activeChamberId) || CLINIC_CHAMBERS[0];

  return (
    <section id="chambers" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/60">
            <Building className="w-3.5 h-3.5 text-teal-600" />
            <span>Regional Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            4 Strategic Consultation Chambers Across Bankura
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Consult Dr. Kuntal Nayak at our full-facility flagship laser center in Simlapal, or at regular weekly specialty OPD chambers in Panchmura, Raipur, and Laxmisagar.
          </p>

          {/* Location Selector Tabs */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {CLINIC_CHAMBERS.map((chamber) => {
              const isSelected = chamber.id === activeChamberId;
              return (
                <button
                  key={chamber.id}
                  type="button"
                  onClick={() => setActiveChamberId(chamber.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <MapPin className={`w-4 h-4 ${isSelected ? 'text-teal-200' : 'text-teal-600'}`} />
                  <span>{chamber.name.split('–')[0].trim()}</span>
                  {chamber.isMainClinic && (
                    <span className="text-[10px] uppercase font-bold bg-teal-500/30 text-teal-100 px-1.5 py-0.5 rounded">
                      Main
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Chamber Detail Card */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60">
                  {activeChamber.badge}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Consulting Surgeon: <strong className="text-slate-900">{DOCTOR_INFO.name}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeChamber.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{activeChamber.address}</span>
                </p>
              </div>

              {/* Schedule and Timings Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span>Days Active</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{activeChamber.days}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Chamber Timings</span>
                  </div>
                  <p className="text-sm font-semibold text-teal-700">{activeChamber.timings}</p>
                </div>
              </div>

              {/* Amenities & Clinical Capabilities */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Chamber Capabilities &amp; Facilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeChamber.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit & Landmark Advice */}
              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Transit &amp; Parking:</strong> {activeChamber.transitTip}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Landmark:</strong> {activeChamber.landmark}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectChamberForBooking(activeChamber)}
                  className="px-6 py-3 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Slot at {activeChamber.name.split('–')[0].trim()}</span>
                </button>

                <a
                  href={activeChamber.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-teal-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call: {DOCTOR_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Map & Directions Panel */}
            <div className="lg:col-span-5 bg-slate-100 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Location &amp; Facility Preview
                  </span>
                  
                  {/* Preview Mode Switcher */}
                  {activeChamber.id === 'simlapal' && (
                    <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-[11px] font-semibold">
                      <button
                        type="button"
                        onClick={() => setPreviewMode('map')}
                        className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                          previewMode === 'map'
                            ? 'bg-teal-700 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Location Map
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewMode('photo')}
                        className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                          previewMode === 'photo'
                            ? 'bg-teal-700 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Clinic Photo
                      </button>
                    </div>
                  )}
                  
                  {activeChamber.id !== 'simlapal' && (
                    <span className="text-xs text-teal-700 font-semibold">
                      Pin: Bankura
                    </span>
                  )}
                </div>

                {/* Location Map Preview / Live Embed container */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner relative aspect-[4/3] flex flex-col">
                  {activeChamber.id === 'simlapal' ? (
                    previewMode === 'map' ? (
                      <div className="relative w-full h-full">
                        <iframe
                          title="Simlapal Hoi Choi Building Location Map Preview"
                          src="https://maps.google.com/maps?q=Hoi+Choi+Building+Simlapal+School+More+Bankura+722151&t=&z=15&ie=UTF8&iwloc=&output=embed"
                          className="w-full h-full border-0"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2.5 left-2.5 z-10">
                          <span className="bg-white/95 backdrop-blur-xs text-[11px] font-bold text-slate-800 px-2.5 py-1 rounded-lg shadow-sm border border-slate-200">
                            Hoi Choi Building, Simlapal School More
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full group">
                        <img
                          src="/images/20250422_101855_11zon-scaled-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg"
                          alt="Simlapal Hoi Choi Building Clinic Exterior"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 inset-x-3 text-white z-10 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">Flagship Building</span>
                            <span className="text-xs font-bold text-white">Hoi Choi Building, Simlapal</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setPreviewMode('map')}
                            className="text-[11px] font-bold bg-teal-600 hover:bg-teal-500 text-white px-2.5 py-1 rounded-lg shadow-sm transition-colors cursor-pointer"
                          >
                            View Map
                          </button>
                        </div>
                      </div>
                    )
                  ) : (
                    <iframe
                      title={`${activeChamber.name} Map`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        activeChamber.name + ', ' + activeChamber.address
                      )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  )}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Patients visiting from Sarenga, Khatra, Taldangra, Ranibandh, or Bankura Town can reach via regular state buses arriving at Simlapal School More or the respective local bus stands.
                </p>
              </div>

              {/* Direct Route Helper Banner */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800 block">Emergency Patient?</span>
                  <span className="text-slate-500">Main laser clinic open daily from 6:00 AM</span>
                </div>
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="font-bold text-teal-700 hover:text-teal-800 underline underline-offset-2"
                >
                  Direct Helpline
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
