import type { Metadata } from 'next';
import { Inter } from '@next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Orange December | Coastal Bliss & Cultural Discovery in Takoradi, Ghana',
  description: 'Experience the best of Takoradi with Orange December’s Coastal Bliss and Cultural Discovery package. From stunning beaches and historic forts to vibrant street carnivals and delicious local cuisine, discover Ghana like never before!',
  keywords: 'Orange December, Takoradi, Ghana travel, coastal bliss, cultural discovery, beaches, Fort Batenstein, Nzulezu Village, Takoradi carnival, Ghana tourism',
  metadataBase: new URL('https://orangedecember.bonvastours.com'),
  openGraph: {
    title: 'Orange December | Explore Coastal Bliss & Cultural Discovery in Takoradi',
    description: 'Join us for a unique adventure in Takoradi, Ghana, featuring pristine beaches, historical forts, and authentic cultural experiences. Perfect for holiday travelers seeking nature, history, and vibrant Ghanaian culture!',
    url: 'https://orangedecember.bonvastours.com',
    images: [
      {
        url: 'hero-bg-1.png',
        width: 1200,
        height: 630,
        alt: 'Orange December Takoradi tour package featuring beaches, forts, and cultural sites',
      },
    ],
    siteName: 'Orange December',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange December | Coastal Bliss & Cultural Discovery in Takoradi',
    description: 'Experience Ghana’s beautiful coast and rich heritage with Orange December. Enjoy guided tours, beachside relaxation, and Takoradi’s famous street carnival!',
    images: ['hero-bg-1.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
