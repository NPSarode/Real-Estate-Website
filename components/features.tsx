"use client"

import { Check } from 'lucide-react';

const features = [
  {
    title: 'Premium Location',
    description: 'Strategically located with easy access to major business hubs and entertainment centers',
  },
  {
    title: 'Sustainable Design',
    description: 'Eco-friendly architecture with focus on natural lighting and ventilation',
  },
  {
    title: 'Modern Amenities',
    description: 'State-of-the-art facilities including gym, pool, and community spaces',
  },
  {
    title: 'Smart Homes',
    description: 'Advanced home automation systems for enhanced comfort and security',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Propitious Properties?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For trusting guidance, transparent deals, and the best property opportunities in Pune.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}