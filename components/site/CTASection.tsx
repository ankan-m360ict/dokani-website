import { ArrowRight } from 'lucide-react';
import { useT } from '@/lib/i18n';
import Link from 'next/link';

export function CTASection() {
  const { t } = useT();
  return (
    <section className='mx-auto max-w-7xl px-5 py-20 md:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center md:px-16 md:py-24'>
        <div className='absolute inset-0 bg-radial-glow opacity-90' />
        <div className='bg-grid absolute inset-0 opacity-[0.08]' />
        <div className='relative'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow'>
            {t('cta.eyebrow')}
          </p>
          <h2 className='mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-background md:text-5xl'>
            {t('cta.title')}
          </h2>
          <p className='mx-auto mt-4 max-w-xl text-sm text-background/70 md:text-base'>
            {t('cta.sub')}
          </p>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <Link
              href='/pricing'
              className='inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]'
            >
              {t('cta.primary')} <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3 text-sm font-semibold text-background hover:bg-background/10'
            >
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
