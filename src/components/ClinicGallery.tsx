import React, { useState } from 'react';
import { CLINIC_GALLERY, GalleryItem } from '../data/clinicData';
import { Sparkles, Eye, X, ZoomIn, Building2, ShieldCheck, MapPin } from 'lucide-react';

export const ClinicGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Facility & Building', 'Laser Operatory', 'Advanced Equipment', 'Sterile Standards'];

  const filteredItems = selectedFilter === 'All'
    ? CLINIC_GALLERY
    : CLINIC_GALLERY.filter((item) => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/60">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Virtual Clinic Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            State-of-the-Art Simlapal Flagship Facility
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Tour the actual operatory, advanced diode dental lasers, computerized root canal systems, and hospital-grade Class-B sterilization suite at Hoi Choi Building, Simlapal.
          </p>

          {/* Category Filter Controls */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom text inside image */}
                <div className="absolute bottom-3 inset-x-3 text-white z-10">
                  <h3 className="font-bold text-sm tracking-tight text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sterility & Tech Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50/60 border border-teal-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">
                100% Autoclaved &amp; Laser Disinfected Environment
              </span>
              <span className="text-slate-600">
                Every handpiece, bur, and micro-instrument undergoes rigorous multi-step ultrasonic cleaning and Class-B vacuum sterilization before every patient visit.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-semibold text-teal-800 bg-white px-3 py-1.5 rounded-lg border border-teal-200 shadow-2xs">
              Simlapal Hoi Choi Building
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 text-white hover:bg-teal-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black relative flex items-center justify-center">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-slate-800">
              <div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedImage.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                  Simlapal Main Center
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
