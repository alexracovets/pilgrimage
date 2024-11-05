import { Oswald, IBM_Plex_Sans } from 'next/font/google';
import type { Metadata } from "next";
import { Suspense } from 'react';

import { FacebookPixelEvents } from '@/components/shared/pixel-events';
import { CheckIsMobile } from '@/tools/checkIsMobile';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const oswald = Oswald({
  weight: ['500'],
  variable: '--font-oswald',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})
const imb = IBM_Plex_Sans({
  weight: ['400', '600', '700'],
  variable: '--font-imb',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

import "./globals.css";
import { FormModal } from '@/components/modal/formModal';
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ua">
      <body className={`${oswald.variable} ${imb.variable}`}>
        <Header />
        <main className='relative'>
          {children}
          <FormModal />
        </main>
        <Footer />
        <CheckIsMobile />
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  );
}