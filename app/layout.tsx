import { Oswald, IBM_Plex_Sans } from 'next/font/google';
import type { Metadata } from "next";

import { CheckIsMobile } from '@/tools/checkIsMobile';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Scroll } from '@/components/shared/scroll';

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
  weight: ['400', '700'],
  variable: '--font-imb',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

import "./globals.css";
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ua">
      <body className={`${oswald.variable} ${imb.variable}`}>
        <Scroll>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <CheckIsMobile />
        </Scroll>
      </body>
    </html>
  );
}