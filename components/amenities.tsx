"use client";

import {
  Dumbbell,
  Trees,
  Shield,
  Users,
  Car,
  Sun,
  Wifi,
  Waves,
} from 'lucide-react';

const amenities = [
  { icon: Dumbbell, title: 'Modern Gym' },
  { icon: Waves, title: 'Swimming Pool' },
  { icon: Trees, title: 'Garden Area' },
  { icon: Shield, title: '24/7 Security' },
  { icon: Users, title: 'Community Hall' },
  { icon: Car, title: 'Parking Space' },
  { icon: Sun, title: 'Solar Power' },
  { icon: Wifi, title: 'High-Speed Internet' },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy a lifestyle filled with comfort and convenience
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.title}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-500">
                  {amenity.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}