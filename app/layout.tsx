import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mohammedhasen.vercel.app'),
  title: {
    default: 'Mohammed Hasen | Full-Stack Developer',
    template: '%s | Mohammed Hasen',
  },
  description:
    'Full-Stack Developer specializing in responsive web applications and practical digital solutions using React, Next.js, Node.js, and Laravel.',
  keywords: [
    'Mohammed Hasen',
    'Full-Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'Node.js',
    'Laravel',
    'Ethiopia',
    'Bule Hora University',
    'Portfolio',
  ],
  authors: [{ name: 'Mohammed Hasen' }],
  creator: 'Mohammed Hasen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammedhasen.vercel.app',
    title: 'Mohammed Hasen | Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in responsive web applications and practical digital solutions.',
    siteName: 'Mohammed Hasen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Hasen | Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in responsive web applications and practical digital solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/images/profile.png',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0E15' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geist.variable, 'font-sans antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
