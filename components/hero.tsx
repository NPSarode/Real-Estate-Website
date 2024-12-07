"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download,  } from 'lucide-react';
import Link from 'next/link';
import Background from '../assets/M-SOULSTRINGS Sales Presenter_page-0002.jpg';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <Image
        src={Background || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"}
        alt="Malpani - M Soul Strings"
        fill
        className="object-cover object-left-top"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Malpani - M Soul Strings 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Premium residential apartments in Pashan featuring modern amenities,
            sustainable design, and a prime location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Link href={"#contact"}>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" >
              Book a Site Visit
              <ArrowRight className="ml-2" size={16} />
            </Button>
            </Link> */}
            <Link href={"#contact"}>
            <Button size="lg" variant="outline" className="light:text-dark  dark:text-white border-white light:hover:bg-dark/10 dark:hover:bg-white/10">
              Get a Brochure
              <Download className="ml-2" size={16}/>
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}