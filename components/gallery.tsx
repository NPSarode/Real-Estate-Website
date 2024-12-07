"use client"

import Image from 'next/image';
import Pic1 from '../assets/Gallary/1.jpeg';
import Pic2 from '../assets/Gallary/2.jpeg';
import Pic3 from '../assets/Gallary/3.jpeg';
import Pic4 from '../assets/Gallary/4.jpeg';
import Pic5 from '../assets/Gallary/5.jpeg';

const images = [
  {
    src: Pic1,
    alt: 'Luxury apartment exterior',
  },
  {
    src: Pic2,
    alt: 'Modern living room',
  },
  {
    src: Pic3,
    alt: 'Spacious bedroom',
  },
  {
    src: Pic4,
    alt: 'Designer kitchen',
  },
  {
    src: Pic5,
    alt: 'Designer kitchen',
  }
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