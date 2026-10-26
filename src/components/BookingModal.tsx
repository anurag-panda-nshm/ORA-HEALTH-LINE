import React, { useState, useEffect } from 'react';
import { CLINIC_CHAMBERS, SERVICES, DOCTOR_INFO, Chamber, ClinicalService } from '../data/clinicData';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  MapPin,
  Stethoscope,
  Send,
  Printer,
  ChevronRight,
  ChevronLeft,
  FileText,
  AlertCircle
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ClinicalService | null;
  preSelectedChamber?: Chamber | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  preSelectedChamber
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedChamberId, setSelectedChamberId] = useState<string>('simlapal');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('laser-dentistry');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientAge, setPatientAge] = useState<string>('');
  const [patientGender, setPatientGender] = useState<string>('Female');
  const [concernNote, setConcernNote] = useState<string>('');
  const [whatsappConfirm, setWhatsappConfirm] = useState<boolean>(true);
  const [bookingRefId, setBookingRefId] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Chamber operating days map: 0 = Sun, 1 = Mon, ..., 6 = Sat
  const CHAMBER_DAYS_MAP: Record<string, { daysOfWeek: number[]; label: string; details: string }> = {
    simlapal: {
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
      label: 'Daily (Mon – Sun)',
      details: 'Daily 6:00 AM – 2:00 PM & 7:00 PM – 9:00 PM'
    },
    panchmura: {
      daysOfWeek: [1, 4],
      label: 'Monday & Thursday only',
      details: 'Mon & Thu from 4:30 PM onwards'
    },
    raipur: {
      daysOfWeek: [2, 5],
      label: 'Tuesday & Friday only',
      details: 'Tue & Fri from 4:00 PM onwards'
    },
    laxmisagar: {
      daysOfWeek: [0],
      label: 'Sunday only',
      details: 'Every Sunday from 6:00 PM onwards'
    }
  };

  const isDateValidForChamber = (dateStr: string, chamberId: string) => {
    if (!dateStr) return false;
    const parts = dateStr.split('-');
    if (parts.length !== 3) return false;
    const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    const dayOfWeek = d.getDay();
    const allowed = CHAMBER_DAYS_MAP[chamberId]?.daysOfWeek ?? [0, 1, 2, 3, 4, 5, 6];
    return allowed.includes(dayOfWeek);
  };

  const getUpcomingDatesForChamber = (chamberId: string, count: number = 8) => {
    const allowed = CHAMBER_DAYS_MAP[chamberId]?.daysOfWeek ?? [0, 1, 2, 3, 4, 5, 6];
    const list: { dateStr: string; dayName: string; formattedDate: string; isToday: boolean; isTomorrow: boolean }[] = [];
    const today = new Date();

    for (let i = 0; i < 60 && list.length < count; i++) {
      const candidate = new Date();
      candidate.setDate(today.getDate() + i);
      const dayOfWeek = candidate.getDay();

      if (i === 0 && candidate.getHours() >= 20) {
        continue;
      }

      if (allowed.includes(dayOfWeek)) {
        const year = candidate.getFullYear();
        const month = String(candidate.getMonth() + 1).padStart(2, '0');
        const day = String(candidate.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        const dayName = candidate.toLocaleDateString('en-US', { weekday: 'short' });
        const formattedDate = candidate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        list.push({
          dateStr,
          dayName,
          formattedDate,
          isToday: i === 0,
          isTomorrow: i === 1
        });
      }
    }
    return list;
  };

  // Set initial selections when preselected props change or modal opens
  useEffect(() => {
    const targetChamberId = preSelectedChamber ? preSelectedChamber.id : selectedChamberId;
    if (preSelectedService) {
      setSelectedServiceId(preSelectedService.id);
    }
    if (preSelectedChamber) {
      setSelectedChamberId(preSelectedChamber.id);
    }

    // Set default date to the next valid operating day for this chamber
    const nextDates = getUpcomingDatesForChamber(targetChamberId, 1);
    if (nextDates.length > 0) {
      setAppointmentDate(nextDates[0].dateStr);
    }
  }, [preSelectedService, preSelectedChamber, isOpen]);

  if (!isOpen) return null;

  const currentChamber = CLINIC_CHAMBERS.find((c) => c.id === selectedChamberId) || CLINIC_CHAMBERS[0];
  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const upcomingAvailableDates = getUpcomingDatesForChamber(selectedChamberId, 8);

  const handleChamberChange = (newChamberId: string) => {
    setSelectedChamberId(newChamberId);
    setSelectedSlot('');
    setErrorMsg('');
    const nextDates = getUpcomingDatesForChamber(newChamberId, 1);
    if (nextDates.length > 0) {
      setAppointmentDate(nextDates[0].dateStr);
    }
  };

  // Dynamic slot generation based on chamber
  const getAvailableSlots = () => {
    if (selectedChamberId === 'simlapal') {
      return {
        morning: ['07:00 AM', '08:30 AM', '10:00 AM', '11:30 AM', '01:00 PM'],
        evening: ['07:00 PM', '07:45 PM', '08:15 PM', '08:45 PM']
      };
    } else if (selectedChamberId === 'panchmura') {
      return {
        afternoon: ['04:30 PM', '05:15 PM', '06:00 PM', '06:45 PM']
      };
    } else if (selectedChamberId === 'raipur') {
      return {
        afternoon: ['04:00 PM', '04:45 PM', '05:30 PM', '06:15 PM']
      };
    } else {
      // Laxmisagar Sunday
      return {
        evening: ['06:00 PM', '06:45 PM', '07:30 PM', '08:15 PM']
      };
    }
  };

  const slots = getAvailableSlots();

  const handleNextStep1 = () => {
    setErrorMsg('');
    // Ensure selected date is valid for this chamber
    if (!isDateValidForChamber(appointmentDate, selectedChamberId)) {
      const nextDates = getUpcomingDatesForChamber(selectedChamberId, 1);
      if (nextDates.length > 0) {
        setAppointmentDate(nextDates[0].dateStr);
      }
    }
    setStep(2);
  };

  const handleNextStep2 = () => {
    setErrorMsg('');
    if (!appointmentDate) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }
    if (!isDateValidForChamber(appointmentDate, selectedChamberId)) {
      const info = CHAMBER_DAYS_MAP[selectedChamberId];
      setErrorMsg(
        `The chosen date is not an active day for ${currentChamber.name.split('–')[0].trim()}. This chamber operates on ${info.label}. Please pick one of the available dates below.`
      );
      return;
    }
    if (!selectedSlot) {
      setErrorMsg('Please select a convenient time slot.');
      return;
    }
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!patientName.trim()) {
      setErrorMsg('Please enter the patient’s full name.');
      return;
    }
    // Basic 10-digit Indian phone validation
    const cleanPhone = patientPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number for appointment confirmation.');
      return;
    }

    // Generate appointment reference number
    const refCode = `ORA-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRefId(refCode);

    // Save locally
    const appointmentData = {
      refCode,
      chamber: currentChamber.name,
      service: currentService.title,
      date: appointmentDate,
      slot: selectedSlot,
      patientName,
      patientPhone,
      patientAge,
      patientGender,
      concernNote,
      createdAt: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem('ora_appointments') || '[]');
      existing.unshift(appointmentData);
      localStorage.setItem('ora_appointments', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setStep(4);
  };

  // WhatsApp formatted string generator
  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hello Dr. Kuntal Nayak / Ora Health Line,\n\n` +
      `I would like to confirm my consultation appointment.\n` +
      `• Ref ID: ${bookingRefId}\n` +
      `• Patient Name: ${patientName} (${patientGender}, ${patientAge || 'N/A'} yrs)\n` +
      `• Mobile: ${patientPhone}\n` +
      `• Chamber: ${currentChamber.name}\n` +
      `• Service: ${currentService.title}\n` +
      `• Date: ${appointmentDate}\n` +
      `• Slot: ${selectedSlot}\n` +
      (concernNote ? `• Medical Concern: ${concernNote}\n` : '') +
      `\nPlease confirm slot availability. Thank you!`
    );
    return `https://wa.me/${DOCTOR_INFO.whatsappRaw}?text=${text}`;
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-teal-800 to-slate-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Ora Health Line · Dr. Kuntal Nayak</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              {step === 4 ? 'Appointment Confirmed!' : 'Book Clinical Consultation'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stepper Progress Indicator (Steps 1 to 3) */}
        {step < 4 && (
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-2.5">
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-500 gap-1 overflow-x-auto scrollbar-none">
              <span className={`whitespace-nowrap ${step >= 1 ? 'text-teal-700 font-bold' : ''}`}>1. Chamber &amp; Service</span>
              <span className="text-slate-300 shrink-0" aria-hidden="true">→</span>
              <span className={`whitespace-nowrap ${step >= 2 ? 'text-teal-700 font-bold' : ''}`}>2. Date &amp; Slot</span>
              <span className="text-slate-300 shrink-0" aria-hidden="true">→</span>
              <span className={`whitespace-nowrap ${step >= 3 ? 'text-teal-700 font-bold' : ''}`}>3. Patient Info</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-4 sm:p-7 max-h-[78vh] overflow-y-auto">
          {errorMsg && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Chamber & Service */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Select Chamber */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Select Consultation Chamber:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CLINIC_CHAMBERS.map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => handleChamberChange(ch.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedChamberId === ch.id
                          ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                        <span>{ch.name.split('–')[0].trim()}</span>
                        {ch.isMainClinic && (
                          <span className="text-[10px] bg-teal-600 text-white px-1.5 py-0.5 rounded">
                            Daily
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-teal-700 font-medium mt-1">
                        {ch.days}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                        {ch.timings}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Procedure */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Select Specialty / Treatment:
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <optgroup label="Routine & General Dental Care (Common Procedures)">
                    {SERVICES.filter((s) => s.category === 'general').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.highlight})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Advanced Oro-Dental Surgery & Laser">
                    {SERVICES.filter((s) => s.category === 'dental').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.highlight})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Aesthetic & Laser Dermatology">
                    {SERVICES.filter((s) => s.category === 'aesthetic').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.highlight})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Procedure Preview Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="font-bold text-slate-900 text-sm">
                  {currentService.title}
                </div>
                <div className="text-slate-600">{currentService.shortDesc}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-slate-500">
                  <span>Recovery: <strong className="text-slate-800">{currentService.recovery}</strong></span>
                  <span>Comfort: <strong className="text-teal-700">{currentService.painLevel}</strong></span>
                </div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextStep1}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue to Date &amp; Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Date & Available Slot */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Chamber Operating Days Banner */}
              <div className="p-3.5 bg-teal-50 border border-teal-200/90 rounded-2xl flex items-start gap-3">
                <Calendar className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-teal-900 block text-sm">
                    {currentChamber.name.split('–')[0].trim()} Consultation Schedule
                  </span>
                  <span className="text-teal-800 font-semibold mt-0.5 block">
                    Active on: {CHAMBER_DAYS_MAP[selectedChamberId].label}
                  </span>
                  <span className="text-teal-700/90 text-[11px] mt-0.5 block">
                    {CHAMBER_DAYS_MAP[selectedChamberId].details}
                  </span>
                </div>
              </div>

              {/* Quick Available Dates Selector for this specific chamber */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Choose Available Consultation Date: *
                  </label>
                  <span className="text-[11px] text-teal-700 font-semibold">
                    {CHAMBER_DAYS_MAP[selectedChamberId].label}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {upcomingAvailableDates.map((opt) => {
                    const isSelected = appointmentDate === opt.dateStr;
                    return (
                      <button
                        key={opt.dateStr}
                        type="button"
                        onClick={() => {
                          setAppointmentDate(opt.dateStr);
                          setErrorMsg('');
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-teal-700 text-white border-teal-700 shadow-md ring-2 ring-teal-500/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-teal-300'
                        }`}
                      >
                        <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-teal-200' : 'text-teal-700'}`}>
                          {opt.dayName}
                        </span>
                        <span className="text-xs font-extrabold mt-0.5">
                          {opt.formattedDate}
                        </span>
                        {opt.isToday && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded mt-1 ${isSelected ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'}`}>
                            Today
                          </span>
                        )}
                        {opt.isTomorrow && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded mt-1 ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                            Tomorrow
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Date Input with validation */}
                <div className="pt-1">
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                    Or select another date from calendar:
                  </label>
                  <input
                    type="date"
                    value={appointmentDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => {
                      const newDate = e.target.value;
                      setAppointmentDate(newDate);
                      if (newDate && !isDateValidForChamber(newDate, selectedChamberId)) {
                        const info = CHAMBER_DAYS_MAP[selectedChamberId];
                        setErrorMsg(`Notice: ${currentChamber.name.split('–')[0].trim()} operates on ${info.label}. Please select an active day.`);
                      } else {
                        setErrorMsg('');
                      }
                    }}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="mt-1 text-[11px] text-slate-500">
                    Note: Only {CHAMBER_DAYS_MAP[selectedChamberId].label} are valid for this chamber.
                  </p>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Choose Consultation Slot:
                </label>

                {/* Morning Slots if available */}
                {'morning' in slots && slots.morning && (
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-600 block mb-1.5">
                      Morning Sessions:
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {slots.morning.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            selectedSlot === slot
                              ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Afternoon Slots if available */}
                {'afternoon' in slots && slots.afternoon && (
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-600 block mb-1.5">
                      Afternoon OPD:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {slots.afternoon.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            selectedSlot === slot
                              ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Evening Slots if available */}
                {'evening' in slots && slots.evening && (
                  <div>
                    <span className="text-xs font-semibold text-slate-600 block mb-1.5">
                      Evening Sessions:
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {slots.evening.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            selectedSlot === slot
                              ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep2}
                  className="flex-1 py-3 px-6 rounded-xl font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Patient Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Patient Full Name: *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Subrata Mukherjee"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Mobile / WhatsApp Number: *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Age:
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="105"
                    placeholder="e.g. 34"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Gender:
                </label>
                <div className="flex gap-4 text-xs font-medium text-slate-700">
                  {['Female', 'Male', 'Other'].map((g) => (
                    <label key={g} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={patientGender === g}
                        onChange={(e) => setPatientGender(e.target.value)}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Brief Medical Concern / Symptoms (Optional):
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Severe tooth sensitivity on lower molar, or desire carbon laser facial"
                  value={concernNote}
                  onChange={(e) => setConcernNote(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* WhatsApp instant confirmation checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 p-3 rounded-xl bg-teal-50 border border-teal-200/80 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={whatsappConfirm}
                    onChange={(e) => setWhatsappConfirm(e.target.checked)}
                    className="mt-0.5 rounded text-teal-600 focus:ring-teal-500"
                  />
                  <span>
                    Send 1-Click WhatsApp appointment confirmation to Dr. Kuntal Nayak’s clinic line (+91 86973 94358)
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3 px-5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Consultation Request</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Confirmation Slip */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Appointment Request Generated!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Reference Code:{' '}
                  <span className="font-mono font-bold text-teal-700 text-sm">
                    {bookingRefId}
                  </span>
                </p>
              </div>

              {/* Printable Appointment Summary Slip */}
              <div
                id="appointment-slip"
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3 shadow-inner"
              >
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-bold text-slate-900">
                    {patientName} ({patientGender}, {patientAge || '–'} yrs)
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-mono text-slate-900">{patientPhone}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Chamber:</span>
                  <span className="font-semibold text-slate-900 text-right max-w-[65%]">
                    {currentChamber.name}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Specialty / Treatment:</span>
                  <span className="font-semibold text-teal-800 text-right max-w-[65%]">
                    {currentService.title}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Date &amp; Slot:</span>
                  <span className="font-bold text-slate-900">
                    {appointmentDate} at {selectedSlot}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-900">
                    {DOCTOR_INFO.name} ({DOCTOR_INFO.qualification})
                  </span>
                </div>
              </div>

              {/* WhatsApp 1-Click Action */}
              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp (+91 86973 94358)</span>
                </a>

                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrintSlip}
                    className="py-2 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Slip</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="py-2 px-4 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold cursor-pointer"
                  >
                    Done / Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
