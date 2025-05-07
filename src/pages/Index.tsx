
import React from 'react';
import HeroSection from '../components/HeroSection';
import ClinicIntroduction from '../components/ClinicIntroduction';
import VideoConsultation from '../components/VideoConsultation';
import DoctorTeam from '../components/DoctorTeam';
import WhyChooseUs from '../components/WhyChooseUs';
import DoctorVideo from '../components/DoctorVideo';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen font-[Poppins]">
      <HeroSection />
      <ClinicIntroduction />
      <VideoConsultation />
      <DoctorTeam />
      <WhyChooseUs />
      <DoctorVideo />
      <CallToAction />
    </div>
  );
};

export default Index;
