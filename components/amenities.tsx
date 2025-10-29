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
  Bus,
  Building,
  Camera,
  Flower,
  DoorOpen,
  Dam,
  MessageSquare,
  MapPin,
  PawPrint,
  Medal,
  Flag,
  Theater,
  House,
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
  { icon: Bus, title: 'Bus Pickup/Drop' },
  { icon: Building, title: 'Portal' },
  { icon: DoorOpen, title: 'Entry Court' },
  { icon: Dam, title: 'Water Feature' },
  { icon: Users, title: 'Club House' },
  { icon: Camera, title: 'Selfie Point' },
  { icon: MessageSquare, title: 'Chit-Chat Corner' },
  { icon: MapPin, title: 'Drop Off' },
  { icon: Flower, title: 'All Season Flower Garden' },
  { icon: Flower, title: 'Swing Park' },
  { icon: PawPrint, title: 'Pets Park' },
  { icon: Medal, title: 'Net-Cricket' },
  // { icon: Lawn, title: 'Leisure Lawn' },
  { icon: Flag, title: 'Flag Hoisting' },
  { icon: Theater, title: 'Amphitheater' },
  { icon: House, title: 'Grand Purpose Court' },
  // { icon: Path, title: 'Reflexology Pathway' },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-4">
            Are you searching for projet who have world class amenities?
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