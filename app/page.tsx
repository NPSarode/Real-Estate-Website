"use client"

import { Suspense } from 'react';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Amenities } from '@/components/amenities';
import { Gallery } from '@/components/gallery';
import { Location } from '@/components/location';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Amenities />
      <Suspense fallback={<div>Loading gallery...</div>}>
        <Gallery />
      </Suspense>
      <Location />
      <ContactForm />
    </>
  );
}