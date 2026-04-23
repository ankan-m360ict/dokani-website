import { SITE_URL } from '@/app/layout';
import type { Metadata } from 'next';

// ─────────────────────────────────────────────
// / (Home)
// ─────────────────────────────────────────────
export const homeMetadata: Metadata = {
  alternates: { canonical: '/' },
  title: {
    absolute: 'Dokani — Manage Your Business Smartly',
  },
  description:
    'Run sales, inventory, accounts and operations from one beautiful dashboard. Built for SMEs, shops and wholesalers across Bangladesh.',
  openGraph: {
    url: SITE_URL,
    title: 'Dokani — Manage Your Business Smartly',
    description: 'The complete inventory management system for modern businesses.',
    images: [{ url: '/assets/dokani-logo.png', width: 1200, height: 630, alt: 'Dokani homepage' }],
  },
  twitter: {
    title: 'Dokani — Manage Your Business Smartly',
    description: 'The complete inventory management system for modern businesses.',
    images: ['/assets/dokani-logo.png'],
  },
};

// ─────────────────────────────────────────────
// /about
// ─────────────────────────────────────────────
export const aboutMetadata: Metadata = {
  title: 'About', // renders as "About — Dokani" via template
  alternates: { canonical: '/about' },
  description:
    'Dokani was built to give every shop owner the tools that big retailers take for granted. This is our story.',
  openGraph: {
    url: `${SITE_URL}/about`,
    title: 'About Dokani',
    description: 'Software built for dokandars, by people who understand them.',
    images: [{ url: '/assets/dokani-logo.png', width: 1200, height: 630, alt: 'About Dokani' }],
  },
  twitter: {
    title: 'About Dokani',
    description: 'Software built for dokandars, by people who understand them.',
    images: ['/assets/dokani-logo.png'],
  },
};

// ─────────────────────────────────────────────
// /contact
// ─────────────────────────────────────────────
export const contactMetadata: Metadata = {
  title: 'Contact',
  alternates: { canonical: '/contact' },
  description:
    'Talk to the Dokani team. Book a demo, ask a question or get help migrating your business.',
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: 'Contact Dokani',
    description: 'Book a demo or talk to sales — we usually reply within an hour.',
    images: [{ url: '/assets/dokani-logo.png', width: 1200, height: 630, alt: 'Contact Dokani' }],
  },
  twitter: {
    title: 'Contact Dokani',
    description: 'Book a demo or talk to sales — we usually reply within an hour.',
    images: ['/assets/dokani-logo.png'],
  },
};

// ─────────────────────────────────────────────
// /features
// ─────────────────────────────────────────────
export const featuresMetadata: Metadata = {
  title: 'Features',
  alternates: { canonical: '/features' },
  description:
    'Inventory tracking, sales & purchase automation, accounting, analytics and granular roles — all built into Dokani.',
  openGraph: {
    url: `${SITE_URL}/features`,
    title: 'Features — Dokani',
    description: 'Everything you need to run a modern business, beautifully.',
    images: [{ url: '/assets/dokani-logo.png', width: 1200, height: 630, alt: 'Dokani features' }],
  },
  twitter: {
    title: 'Features — Dokani',
    description: 'Everything you need to run a modern business, beautifully.',
    images: ['/assets/dokani-logo.png'],
  },
};

// ─────────────────────────────────────────────
// /modules
// ─────────────────────────────────────────────
export const modulesMetadata: Metadata = {
  title: 'Modules',
  alternates: { canonical: '/modules' },
  description:
    'Explore all 20+ Dokani modules: Sales, Purchase, Inventory, Accounts, Payroll, Reports and more.',
  openGraph: {
    url: `${SITE_URL}/modules`,
    title: 'Modules — Dokani',
    description: '20+ powerful modules covering every part of your business.',
    images: [{ url: '/assets/dokani-logo.png', width: 1200, height: 630, alt: 'Dokani modules' }],
  },
  twitter: {
    title: 'Modules — Dokani',
    description: '20+ powerful modules covering every part of your business.',
    images: ['/assets/dokani-logo.png'],
  },
};

// ─────────────────────────────────────────────
// /pricing
// ─────────────────────────────────────────────
export const pricingMetadata: Metadata = {
  title: 'Pricing',
  alternates: { canonical: '/pricing' },
  description:
    'One simple plan. ৳1,200/month or ৳12,000/year. All features included. Start your free 14-day trial.',
  openGraph: {
    url: `${SITE_URL}/pricing`,
    title: 'Pricing — Dokani',
    description: 'One plan. Everything included. Monthly or yearly.',
    images: [{ url: '/assets/dokani-logo.png', width: 1200, height: 630, alt: 'Dokani pricing' }],
  },
  twitter: {
    title: 'Pricing — Dokani',
    description: 'One plan. Everything included. Monthly or yearly.',
    images: ['/assets/dokani-logo.png'],
  },
};
