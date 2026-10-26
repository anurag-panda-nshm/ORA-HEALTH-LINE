import React, { useState } from 'react';
import { SERVICES, ClinicalService } from '../data/clinicData';
import {
  Sparkles,
  Stethoscope,
  Clock,
  HeartPulse,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Shield,
  Zap,
  Info
} from 'lucide-react';

interface ServiceSwitcherProps {
  onSelectService: (service: ClinicalService) => void;
}

export const ServiceSwitcher: React.FC<ServiceSwitcherProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'general' | 'dental' | 'aesthetic'>('general');
  const [selectedModalService, setSelectedModalService] = useState<ClinicalService | null>(null);

  const filteredServices = SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="specialties" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/60">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Comprehensive Clinical Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Specialized Care Designed Around Comfort &amp; Technology
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From daily dental checkups, cavity fillings, and toothache relief to advanced suture-free laser surgery and clinical aesthetic dermatology.
          </p>

          {/* Interactive Wing Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex flex-wrap sm:flex-nowrap p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-xs gap-1">
              <button
                type="button"
                onClick={() => setActiveCategory('general')}
                className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'general'
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>Routine Dental Care</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory('dental')}
                className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'dental'
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Oro-Dental Surgery</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory('aesthetic')}
                className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'aesthetic'
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Laser &amp; Aesthetic Clinic</span>
              </button>
            </div>
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-teal-400/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Clinical Procedure Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Highlight pill inside image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[11px] font-bold text-teal-900 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs">
                      {service.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1 text-[11px] text-white font-medium bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    <Clock className="w-3 h-3 text-teal-300" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits List */}
                  <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clinical Specs: Recovery & Pain Level */}
                  <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200/80 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-500">Recovery:</span>
                      <span className="font-semibold text-slate-900">{service.recovery}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-500">Pain Level:</span>
                      <span className="font-semibold text-teal-700">{service.painLevel}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-200/60 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedModalService(service)}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-teal-800 bg-white hover:bg-teal-50 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Clinical Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Procedure</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Laser Clinic Banner Spotlight */}
        <div id="laser-clinic" className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 bg-teal-900/60 border border-teal-700/50 px-3 py-1 rounded-lg">
                <Zap className="w-3.5 h-3.5" />
                <span>Simlapal Dedicated Laser Operatory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Why Laser Oral Surgery &amp; Dermatology Is Superior
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Conventional dental cutting utilizes metal scalpel blades that crush tissue cells, trigger heavy bleeding, and require sutures. Our medical-grade soft-tissue laser photocoagulates instantly, seals nerve endings to minimize post-op soreness, and sterilizes pathogens on contact.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs">
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/10">
                  <div className="font-bold text-teal-300 text-sm">Bloodless</div>
                  <div className="text-slate-300 mt-0.5">Instant photocoagulation</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/10">
                  <div className="font-bold text-teal-300 text-sm">Zero Stitches</div>
                  <div className="text-slate-300 mt-0.5">No uncomfortable sutures</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/10">
                  <div className="font-bold text-teal-300 text-sm">Rapid Healing</div>
                  <div className="text-slate-300 mt-0.5">Normal diet same day</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/10">
                  <div className="font-bold text-teal-300 text-sm">100% Sterile</div>
                  <div className="text-slate-300 mt-0.5">Kills bacteria on contact</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
              <button
                type="button"
                onClick={() => {
                  const laserService = SERVICES.find((s) => s.id === 'laser-dentistry') || SERVICES[0];
                  onSelectService(laserService);
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg hover:shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Laser Consultation</span>
              </button>
              <span className="text-xs text-slate-400">
                Dr. Kuntal Nayak · Simlapal &amp; Branch Chambers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Details Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>

            <div className="space-y-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src={selectedModalService.imageUrl}
                  alt={selectedModalService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold text-teal-900 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs">
                    {selectedModalService.category === 'general'
                      ? 'Routine Dental Care'
                      : selectedModalService.category === 'dental'
                      ? 'Oro-Dental Surgery'
                      : 'Laser Aesthetic Care'}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {selectedModalService.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedModalService.fullDesc}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Clinical Benefits:
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                  {selectedModalService.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block mb-0.5">Recovery Time:</span>
                  <span className="font-semibold text-slate-900">{selectedModalService.recovery}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block mb-0.5">Comfort Index:</span>
                  <span className="font-semibold text-teal-700">{selectedModalService.painLevel}</span>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const s = selectedModalService;
                    setSelectedModalService(null);
                    onSelectService(s);
                  }}
                  className="w-full py-3 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Procedure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
