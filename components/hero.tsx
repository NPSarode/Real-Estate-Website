"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download,  } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <Image
        src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Propitious Properties - Premium Residences"
        fill
        className="object-cover object-left-top"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Propitious Properties Pvt. ltd. 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Because you deserve the best!
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
              Contact us
              
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}