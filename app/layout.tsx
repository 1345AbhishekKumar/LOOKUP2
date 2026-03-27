import './globals.css';
import type { Metadata } from 'next';
import { outfit, merriweather } from './fonts';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'LOOKUP - AI-Powered Document Intelligence',
  description: 'Upload PDFs, discover books, and extract insights instantly with LOOKUP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${merriweather.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}