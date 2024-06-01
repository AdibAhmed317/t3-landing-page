import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travel Trust Tourism',
  description:
    'Travel Trust Tourism is the leading travel agency in Bangladesh, offering hassle-free visa processing services for destinations worldwide. Book your plane tickets from Dhaka to Chittagong and vice versa with ease. Explore our services now!',
  robots: 'index, follow',
  keywords:
    'travel agency, Bangladesh, visa processing, plane tickets, Dhaka, Chittagong',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
