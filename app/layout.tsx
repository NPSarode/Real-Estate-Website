import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Disclaimer } from '@/components/disclaimer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real Estate Property',
  // title: 'Prakruti - Luxury Residential Project in Bangalore',
  description: 'Discover luxury living at Malpani - Premium residential apartments in Bangalore featuring modern amenities, sustainable design, and prime location.',
  keywords: 'Malpani, luxury apartments, Bangalore real estate, residential projects, premium homes',
  openGraph: {
    title: 'Malpani - Luxury Residential Project in Pashan, Pune',
    description: 'Premium residential apartments featuring modern amenities and sustainable design',
    images: ['/assets/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Disclaimer />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}