import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LiveStatusBadge } from './components/LiveStatusBadge';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ServiceSwitcher } from './components/ServiceSwitcher';
import { ChamberExplorer } from './components/ChamberExplorer';
import { ClinicGallery } from './components/ClinicGallery';
import { DoctorProfile } from './components/DoctorProfile';
import { PatientReviews } from './components/PatientReviews';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { Chamber, ClinicalService } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<ClinicalService | null>(null);
  const [preSelectedChamber, setPreSelectedChamber] = useState<Chamber | null>(null);

  const handleOpenGeneralBooking = () => {
    setPreSelectedService(null);
    setPreSelectedChamber(null);
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (service: ClinicalService) => {
    setPreSelectedService(service);
    setPreSelectedChamber(null);
    setIsBookingOpen(true);
  };

  const handleSelectChamberForBooking = (chamber: Chamber) => {
    setPreSelectedChamber(chamber);
    setPreSelectedService(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Dynamic IST Live Clinic Status Bar */}
      <LiveStatusBadge />

      {/* Dynamic Sticky Top Navigation */}
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      <main className="flex-1">
        {/* Interactive Hero with Value Proposition & Doctor Spotlight */}
        <Hero onOpenBooking={handleOpenGeneralBooking} />

        {/* Emergency Triage & Acute Dental Pain Banner */}
        <EmergencyBanner onOpenBooking={handleOpenGeneralBooking} />

        {/* Interactive Clinical Wings (Oro-Dental Surgery vs Laser & Aesthetic Clinic) */}
        <ServiceSwitcher onSelectService={handleSelectServiceForBooking} />

        {/* Chamber & Schedule Explorer (Simlapal Main, Panchmura, Raipur, Laxmisagar) */}
        <ChamberExplorer onSelectChamberForBooking={handleSelectChamberForBooking} />

        {/* Doctor Spotlight, Credentials & Laser vs Traditional Comparison */}
        <DoctorProfile onOpenBooking={handleOpenGeneralBooking} />

        {/* Virtual Clinic Tour & Laser Facility Gallery */}
        <ClinicGallery />

        {/* Verified Patient Reviews & Rating Carousel */}
        <PatientReviews />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Clinic Footer */}
      <Footer onOpenBooking={handleOpenGeneralBooking} />

      {/* Persistent WhatsApp Floating Quick Widget */}
      <FloatingWhatsApp />

      {/* Smart 3-Step Appointment Booking Stepper Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedService={preSelectedService}
        preSelectedChamber={preSelectedChamber}
      />
    </div>
  );
}
