"use client"

import Image from 'next/image';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    alt: 'Luxury apartment exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    alt: 'Modern living room',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80',
    alt: 'Spacious bedroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
    alt: 'Designer kitchen',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our premium residential spaces
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}