
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  instagramUrl?: string;
  facebookUrl?: string;
  whatsappUrl?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  image,
  instagramUrl = '#',
  facebookUrl = '#',
  whatsappUrl = '#',
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay with social icons (visible on hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-omblue/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center pb-20">
          <div className="flex space-x-4">
            <a
              href={instagramUrl}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-omgreen transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-white" />
            </a>
            <a
              href={facebookUrl}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-omgreen transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-white" />
            </a>
            <a
              href={whatsappUrl}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-omgreen transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-omblue">{name}</h3>
        <p className="text-gray-600">{specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
