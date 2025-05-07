
import React from 'react';
import { Stethoscope } from 'lucide-react';

const DoctorVideo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-omlightbg p-3 rounded-full mb-4">
            <Stethoscope className="h-6 w-6 text-omgreen" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-omblue">
            Meet Our Doctors
          </h2>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/placeholder.svg" 
            alt="Doctor introduction video" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full hover:bg-white/50 transition-colors cursor-pointer">
              <svg className="w-16 h-16 text-omgreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorVideo;
