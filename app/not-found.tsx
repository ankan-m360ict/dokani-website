'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-[80vh] flex items-center justify-center relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8'>
      {/* Background Effects */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 bg-grid opacity-20 dark:opacity-10' />
        <div className='absolute inset-0 bg-radial-glow opacity-40 dark:opacity-20' />
      </div>

      <div className='text-center max-w-2xl mx-auto flex flex-col items-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='mb-8'
        >
          <div className='relative'>
            <div className='absolute inset-0 bg-primary-glow rounded-full blur-3xl opacity-30'></div>
            <div className='bg-surface p-6 rounded-3xl shadow-glow ring-soft relative z-10'>
              <FileQuestion className='w-16 h-16 text-primary' />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <p className='text-base font-semibold leading-8 text-primary'>Error 404</p>
          <h1 className='mt-4 text-5xl font-bold tracking-tight sm:text-7xl font-display text-gradient-brand pb-2'>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7 text-muted-foreground'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved,
            deleted, or perhaps never existed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          <Link
            href='/'
            className='flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 w-full sm:w-auto'
          >
            <Home className='w-4 h-4' />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className='flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-surface-2 transition-all duration-200 w-full sm:w-auto'
          >
            <ArrowLeft className='w-4 h-4' />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
