'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { CTASection } from '@/components/site/CTASection';
import { useT } from '@/lib/i18n';
import Link from 'next/link';

// export const Route = createFileRoute('/pricing')({
//   head: () => ({
//     meta: [
//       { title: 'Pricing — Dokani' },
//       {
//         name: 'description',
//         content:
//           'One simple plan. ৳1,200/month or ৳12,000/year. All features included. Start your free 14-day trial.',
//       },
//       { property: 'og:title', content: 'Pricing — Dokani' },
//       { property: 'og:description', content: 'One plan. Everything included. Monthly or yearly.' },
//     ],
//   }),
//   component: PricingPage,
// });

type Billing = 'monthly' | 'yearly';

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const { t } = useT();

  const price = billing === 'monthly' ? 1200 : 12000;
  const suffix = billing === 'monthly' ? t('pricing.perMo') : t('pricing.perYr');

  const features = [
    t('pricing.feat1'),
    t('pricing.feat2'),
    t('pricing.feat3'),
    t('pricing.feat4'),
    t('pricing.feat5'),
    t('pricing.feat6'),
  ];

  return (
    <>
      <section className='mx-auto max-w-4xl px-5 pb-10 pt-20 text-center md:px-8 md:pt-28'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('pricing.eyebrow')}
        </p>
        <h1 className='mt-3 font-display text-4xl font-bold text-ink md:text-6xl'>
          {t('pricing.pageTitle')}{' '}
          <span className='text-gradient-brand'>{t('pricing.pageTitleB')}</span>
        </h1>
        <p className='mx-auto mt-5 max-w-xl text-muted-foreground'>{t('pricing.pageSub')}</p>

        <div className='mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft'>
          {(['monthly', 'yearly'] as const).map((b) => (
            <button
              key={b}
              type='button'
              onClick={() => setBilling(b)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === b
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'text-muted-foreground hover:text-ink'
              }`}
            >
              {b === 'monthly' ? t('pricing.monthly') : t('pricing.yearly')}
              {b === 'yearly' && (
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    billing === 'yearly'
                      ? 'bg-primary-foreground/15 text-primary-foreground'
                      : 'bg-primary-soft text-primary'
                  }`}
                >
                  {t('pricing.save')}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-2xl px-5 pb-24 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='relative rounded-3xl border-2 border-primary bg-card p-8 shadow-glow md:p-10'
        >
          <span className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground'>
            {t('pricing.mostPopular')}
          </span>

          <div className='text-center'>
            <p className='font-display text-2xl font-bold text-ink'>{t('pricing.planName')}</p>
            <p className='mt-2 text-sm text-muted-foreground'>{t('pricing.planDesc')}</p>

            <p className='mt-6 font-display text-5xl font-bold text-ink md:text-6xl'>
              ৳{price.toLocaleString('en-IN')}
              <span className='text-lg font-medium text-muted-foreground'>{suffix}</span>
            </p>
            {billing === 'yearly' ? (
              <p className='mt-2 text-sm text-primary'>
                ≈ ৳{Math.round(12000 / 12).toLocaleString('en-IN')}
                {t('pricing.perMo')} · {t('pricing.billedYearly')}
              </p>
            ) : (
              <p className='mt-2 text-sm text-muted-foreground'>
                {t('pricing.billedYearly').replace(/.*/, '\u00A0')}
              </p>
            )}
          </div>

          <div className='mx-auto mt-8 max-w-md'>
            <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
              {t('pricing.includes')}
            </p>
            <ul className='mt-4 space-y-3 text-sm'>
              {features.map((f) => (
                <li key={f} className='flex items-start gap-2.5 text-foreground'>
                  <Check className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href='/contact'
              className='mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-glow hover:scale-[1.02]'
            >
              {t('pricing.choose')}
            </Link>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </>
  );
}
