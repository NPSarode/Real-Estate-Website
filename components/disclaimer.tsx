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
          <p>Channel Partner RERA Number: A52100040012</p>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Disclaimer:</h3>
            <p className="mb-4">
              The information on this website is provided by Propitious Properties Pvt. Ltd. (RERA No. A52100040012) for general guidance only. All project details, images, and prices are indicative and subject to change without prior notice.
            </p>
            <p className="mb-4">
              Users are advised to verify all information independently before making any purchase or investment decision. Propitious Properties Pvt. Ltd. is not liable for any loss or damage resulting from reliance on website content.
            </p>
            <p className="mb-4">
              Use of this website implies acceptance of our Terms & Conditions.
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