import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GymPrime - Transform Your Body with Premium Fitness Training',
  description: 'Join GymPrime for world-class fitness training programs. Transform your body with our expert trainers, state-of-the-art equipment, and personalized workout plans.',
  keywords: 'gym, fitness, training, workout, health, muscle building, weight loss, personal trainer',
  authors: [{ name: 'GymPrime Team' }],
  creator: 'GymPrime',
  openGraph: {
    title: 'GymPrime - Transform Your Body with Premium Fitness Training',
    description: 'Join GymPrime for world-class fitness training programs. Transform your body with our expert trainers and personalized workout plans.',
    type: 'website',
    locale: 'en_US',
    siteName: 'GymPrime',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GymPrime - Transform Your Body',
    description: 'Premium fitness training programs with expert trainers and state-of-the-art equipment.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-deep-purple text-gym-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}