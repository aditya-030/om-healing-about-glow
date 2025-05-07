
import React from 'react';

const VideoConsultation = () => {
  return (
    <section className="py-16 bg-omlightbg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Column */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Doctor Consultation" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full hover:bg-white/50 transition-colors cursor-pointer">
                  <svg className="w-12 h-12 text-omgreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-omblue mb-5">Online and Offline Consultations</h3>
            <p className="text-gray-600 mb-8">
              Om Healing Portal provides both online and offline consultations to our patients, allowing for more flexible and convenient care. We're committed to making quality homeopathic treatment accessible to everyone, regardless of your location.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-gray-500 mb-1">Support Line 24/7</p>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-omgreen mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="font-semibold">+91 92 300 7O287</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Email Us</p>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-omgreen mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="font-semibold">info@omhealingportal.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoConsultation;
