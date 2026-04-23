import type { Metadata, Viewport } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/site/Navbar';
import ClientLayout from '@/components/site/ClientLayout';
import { Footer } from '@/components/site/Footer';

const sora = Sora({
  variable: '--font-display',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const SITE_URL = 'https://dokani360.com';
const SITE_NAME = 'Dokani';
const TWITTER_HANDLE = '@dokaniapp';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dokani — Manage Your Business Smartly',
    template: '%s — Dokani',
  },
  description:
    'Run sales, inventory, accounts and operations from one beautiful dashboard. Built for SMEs, shops and wholesalers across Bangladesh.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: 'Dokani — Manage Your Business Smartly',
    description:
      'The complete inventory & business management system for modern shops, wholesalers and SMEs.',
    images: [
      {
        url: '/assets/dokani-logo.png',
        width: 1200,
        height: 630,
        alt: 'Dokani logo',
      },
    ],
    locale: 'en_BD',
  },

  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: 'Dokani — Manage Your Business Smartly',
    description: 'Inventory, sales, accounts and operations — all in one beautiful platform.',
    images: ['/assets/dokani-logo.png'],
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png', // 180×180 px
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: '',
  },

  applicationName: SITE_NAME,
  keywords: [
    'inventory management',
    'business management software',
    'POS Bangladesh',
    'shop management',
    'dokan software',
    'wholesale management',
    'SME software Bangladesh',
    'sales tracking',
    'stock management',
  ],
  authors: [{ name: 'Dokani', url: SITE_URL }],
  creator: 'Dokani',
  publisher: 'Dokani',
  category: 'Business Software',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <ClientLayout>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
