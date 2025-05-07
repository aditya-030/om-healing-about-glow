
import React from 'react';
import { Button } from '../components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-cta-pattern text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-white">Om Healing Portal</span> 
            <span className="text-omgreen"> Is A Top-Rated,</span> 
            <span className="text-white"> Globally Recognized Homeopathy Clinic.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-omgreen hover:bg-omgreen/90 text-white px-8 py-6 rounded-full">
              Make an Appointment
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
