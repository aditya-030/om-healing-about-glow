
import React from 'react';
import { Award, Clock, Syringe, Pill, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: '12+ Years of Experience',
      description: 'Our doctors have over a decade of experience in homeopathic medicine',
      icon: <Clock className="h-8 w-8 text-omgreen" />,
    },
    {
      title: '300+ Surgeries Avoided',
      description: 'Successfully helped patients avoid surgery through effective homeopathic treatments',
      icon: <Syringe className="h-8 w-8 text-omgreen" />,
    },
    {
      title: 'German & Indo-German Medicines',
      description: 'We use high-quality German and Indo-German homeopathic medicines',
      icon: <Pill className="h-8 w-8 text-omgreen" />,
    },
    {
      title: 'Patients from 20+ Countries',
      description: 'Trusted by patients globally for effective homeopathic care',
      icon: <Globe className="h-8 w-8 text-omgreen" />,
    },
  ];

  return (
    <section className="py-16 bg-omlightbg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white p-3 rounded-full">
            <Award className="h-6 w-6 text-omgreen" />
          </div>
        </div>
        <p className="text-center text-omgreen font-medium uppercase tracking-wider mb-2">
          WHY CHOOSE OM HEALING?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-omblue mb-16">
          We Have The Best Top-Rated<br />Homeopathic Doctors in India
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-omblue mb-2">{benefit.title}</h3>
              <p className="text-center text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
