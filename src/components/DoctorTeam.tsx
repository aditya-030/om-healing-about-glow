
import React from 'react';
import DoctorCard from './DoctorCard';
import { Users } from 'lucide-react';

const DoctorTeam = () => {
  const doctors = [
    {
      name: 'Dr. Rahul Sharma',
      specialty: 'Expert in Chronic Illness & Family Homeopathy',
      image: '/placeholder.svg',
    },
    {
      name: 'Dr. Priya Singh',
      specialty: 'Specialist in Pediatric Homeopathy',
      image: '/placeholder.svg',
    },
    {
      name: 'Dr. Amit Patel',
      specialty: 'Expert in Allergies & Respiratory Conditions',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-omlightbg p-3 rounded-full">
            <Users className="h-6 w-6 text-omgreen" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-omblue mb-12">
          Our Team of Doctors to Take Care of You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorTeam;
