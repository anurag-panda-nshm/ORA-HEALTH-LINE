import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How is Laser Dentistry bloodless and suture-free?',
    answer:
      'Unlike traditional scalpels that slice through tissue and sever blood capillaries, Dr. Kuntal Nayak’s dental surgical laser uses targeted optical energy. As it vaporizes targeted tissue, it instantly coagulates micro-vessels (photocoagulation) and seals nerve endings. This results in virtually zero bleeding, no need for stitches, and significantly reduced post-operative discomfort.'
  },
  {
    question: 'Can a Root Canal Treatment (RCT) really be done in a single sitting without pain?',
    answer:
      'Yes! At Ora Health Line, we utilize computerized digital apex locators paired with motorized nickel-titanium rotary endodontics. This enables Dr. Nayak to thoroughly clean and disinfect the entire canal system in 35 to 45 minutes under gentle local anesthesia, saving infected teeth with 99.4% clinical success.'
  },
  {
    question: 'What is the Carbon Laser Facial ("Hollywood Peel") and does it hurt?',
    answer:
      'The Carbon Laser Facial is a non-invasive skin rejuvenation therapy. A medical carbon suspension is applied to your skin to absorb oil and impurities. A high-speed Nd:YAG laser beam then gently vaporizes the carbon particles. You feel only a mild warm tingling sensation. There is zero peeling, no redness, and no downtime—you leave with clean, glowing skin immediately.'
  },
  {
    question: 'Where is the main Ora Health Line clinic located and how do I reach it?',
    answer:
      'The flagship center is at Hoi Choi Building, Simlapal Road, Simlapal School More, Bankura - 722151. It is just a 2-minute walk from Simlapal School More bus stand with ample parking. Direct local buses operate regularly from Khatra, Sarenga, Taldangra, and Bankura Town.'
  },
  {
    question: 'Which days does Dr. Kuntal Nayak visit Panchmura, Raipur, and Laxmisagar?',
    answer:
      'Simlapal is open daily (6:00 AM – 2:00 PM & 7:00 PM – 9:00 PM). Dr. Nayak visits Panchmura (Dev Drug House) every Monday & Thursday from 4:30 PM, Raipur (Medicare Polyclinic) every Tuesday & Friday from 4:00 PM, and Laxmisagar (Cure Pharmacy) every Sunday from 6:00 PM.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/60">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Patient Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about our laser procedures, timings, and comfort standards.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/60 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
