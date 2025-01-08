"use client";

import Image from "next/image";
import Link from "next/link";

export function Disclaimer() {
  return (
    <section className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* QR Codes */}
        <div className="grid grid-cols-2 gap-4 lg:gap-0 md:gap-8 mb-8">
          <div className="aspect-square relative w-full max-w-[120px] mx-auto">
            <Image
              src="https://m-soulstrings.in/assets/img/wingb.png"
              alt="Wing B QR"
              fill
              className="object-contain"
            />
          </div>
          <div className="aspect-square relative w-full max-w-[120px] mx-auto">
            <Image
              src="https://m-soulstrings.in/assets/img/wingc.jpeg"
              alt="Wing C QR"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Registration Details */}
        <div className="space-y-4 text-sm md:text-base ">
          <p>MahaRERA Registration Details: Wing B - <span className="font-semibold">P52100076782</span> & Wing C - <span className="font-semibold">P52100055678</span> 
            <Link href="https://maharera.maharashtra.gov.in/" className="hover:text-white text-blue-300 ">
            (View on MahaRERA Website)
            </Link>
            </p>
          <p>Channel Partner RERA Number : – A52100044678</p>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Disclaimer:</h3>
            <p className="mb-4">
              Please note that this website serves as an informational portal managed by a RERA authorized real estate agent and is not an official site. It does not constitute an offer or guarantee of any services. Prices displayed here are subject to change without prior notice, and property availability cannot be guaranteed. The images presented are for representational purposes only and may not accurately reflect the actual properties. Your data may be shared with Real Estate Regulatory Authority (RERA) registered developers for further processing as necessary. Additionally, updates and information may be sent to the mobile number or email address registered with us.
            </p>
            <p className="mb-4">
              All rights are reserved for the content, design, and information on this website, protected by copyright and other intellectual property rights. Unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and other details, it is recommended to directly contact us through the provided contact information. We appreciate your visit to our website.
            </p>
          </div>

          {/* Footer Links */}
          <div className="pt-4 border-t border-gray-700">
            <div className="flex justify-center space-x-4">
              <Link href="https://m-soulstrings.in/privacy.html" className="hover:text-white text-blue-300 ">
                privacy policy
              </Link>
              <span>|</span>
              <Link href="https://m-soulstrings.in/terms.html" className="hover:text-white text-blue-300 ">
                terms & conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}