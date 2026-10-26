import React, { useState } from 'react';
import { REVIEWS, Review, DOCTOR_INFO } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export const PatientReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/60">
            <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Real Stories of Gentle Care &amp; Painless Healing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Read what patients across Bankura, Simlapal, Panchmura, and Raipur say about Dr. Kuntal Nayak’s laser precision and empathetic treatment.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="pt-2 flex items-center justify-center gap-2 text-sm text-slate-700">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-slate-400" aria-hidden="true">·</span>
            <span className="text-slate-500 font-medium">Over 500+ Verified Patient Consultations</span>
          </div>
        </div>

        {/* Testimonial Spotlight Carousel */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl overflow-hidden">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100 -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed italic">
                "{current.comment}"
              </p>

              {/* Patient Info */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{current.patientName}</span>
                    <span title="Verified Patient">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    </span>
                  </h4>
                  <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                    <span>{current.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-teal-700 font-medium">{current.treatment}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  {current.date}
                </div>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span>Story {currentIndex + 1} of {REVIEWS.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevReview}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextReview}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Additional Quick Testimonial Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(1, 4).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed line-clamp-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div>
                  <span className="font-bold text-slate-900 block">{rev.patientName}</span>
                  <span className="text-slate-500">{rev.location}</span>
                </div>
                <span className="text-teal-700 font-medium">{rev.treatment.split('&')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
