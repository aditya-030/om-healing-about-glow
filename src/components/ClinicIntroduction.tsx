
import React from 'react';
import { Button } from '../components/ui/button';

const ClinicIntroduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Om Healing Clinic" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-3 m-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-yellow-500">
                      ★★★★★
                    </div>
                    <span className="text-sm text-gray-600 ml-2">5.0 Rating</span>
                  </div>
                  <div className="text-sm font-semibold text-omblue">+91 92 300 7O287</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="lg:w-1/2">
            <p className="text-omgreen font-medium mb-2 uppercase tracking-wider">TOP HOMEOPATHY CLINIC IN NOIDA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-omblue mb-6">Taking Care Of Your Health Is Our Top Priority</h2>
            <p className="text-gray-600 mb-8">
              At Om Healing Portal, our mission is to provide natural, safe, and effective treatments that promote overall health. We believe in homeopathy's ability to heal from within, addressing not just the symptoms but the underlying causes of illness. Our goal is to provide our patients with the attention and care they require to achieve and maintain optimal health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="bg-omlightbg p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-omgreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Allergy Treatments</span>
              </div>
              <div className="flex items-center">
                <div className="bg-omlightbg p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-omgreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Sexual Health Care</span>
              </div>
              <div className="flex items-center">
                <div className="bg-omlightbg p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-omgreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Chronic Disease Management</span>
              </div>
              <div className="flex items-center">
                <div className="bg-omlightbg p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-omgreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Family Homeopathy</span>
              </div>
            </div>
            
            <Button className="bg-omgreen hover:bg-omgreen/90 text-white px-8 py-6 rounded-full">
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicIntroduction;
