'use client';
import { motion } from 'framer-motion';
import {
  Boxes,
  ShoppingCart,
  Wallet,
  BarChart3,
  Users,
  ShieldCheck,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { CTASection } from '@/components/site/CTASection';
import { useT } from '@/lib/i18n';
import dashboardImg from '@/assets/dokani-dashboard.png';
import posImg from '@/assets/dokani-pos.png';
import accountsImg from '@/assets/dokani-accounts.png';
import loginImg from '@/assets/dokani-login.png';
import Image, { StaticImageData } from 'next/image';

// export const Route = createFileRoute('/features')({
//   head: () => ({
//     meta: [
//       { title: 'Features — Dokani' },
//       {
//         name: 'description',
//         content:
//           'Inventory tracking, sales & purchase automation, accounting, analytics and granular roles — all built into Dokani.',
//       },
//       { property: 'og:title', content: 'Features — Dokani' },
//       {
//         property: 'og:description',
//         content: 'Everything you need to run a modern business, beautifully.',
//       },
//     ],
//   }),
//   component: FeaturesPage,
// });

type SectionKey = 'dashboard' | 'pos' | 'accounts' | 'security' | 'inventory' | 'teams';

const sections: {
  key: SectionKey;
  icon: LucideIcon;
  image?: string | StaticImageData;
  alt: string;
}[] = [
  { key: 'dashboard', icon: BarChart3, image: dashboardImg, alt: 'Dokani dashboard' },
  { key: 'pos', icon: ShoppingCart, image: posImg, alt: 'Dokani POS' },
  { key: 'accounts', icon: Wallet, image: accountsImg, alt: 'Dokani accounts' },
  { key: 'security', icon: ShieldCheck, image: loginImg, alt: 'Dokani login' },
  { key: 'inventory', icon: Boxes, alt: 'Inventory' },
  { key: 'teams', icon: Users, alt: 'Teams' },
];

export default function FeaturesPage() {
  const { t } = useT();
  return (
    <>
      <section className='mx-auto max-w-4xl px-5 pb-12 pt-20 text-center md:px-8 md:pt-28'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('featuresPage.eyebrow')}
        </p>
        <h1 className='mt-3 font-display text-4xl font-bold text-ink md:text-6xl'>
          {t('featuresPage.titleA')}{' '}
          <span className='text-gradient-brand'>{t('featuresPage.titleB')}</span>{' '}
          {t('featuresPage.titleC')}
        </h1>
        <p className='mx-auto mt-5 max-w-xl text-muted-foreground'>{t('featuresPage.sub')}</p>
      </section>

      <div className='mx-auto max-w-7xl space-y-20 px-5 pb-12 md:px-8'>
        {sections.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div>
              <div className='inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary'>
                <s.icon className='h-3.5 w-3.5' /> {t(`featureSections.${s.key}Tag`)}
              </div>
              <h2 className='mt-4 font-display text-3xl font-bold text-ink md:text-4xl'>
                {t(`featureSections.${s.key}Title`)}
              </h2>
              <p className='mt-4 text-muted-foreground'>{t(`featureSections.${s.key}Desc`)}</p>
              <ul className='mt-6 grid gap-2.5 sm:grid-cols-2'>
                {(['B1', 'B2', 'B3', 'B4'] as const).map((b) => (
                  <li key={b} className='flex items-center gap-2 text-sm text-foreground'>
                    <Check className='h-4 w-4 text-primary' />
                    {t(`featureSections.${s.key}${b}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className='relative'>
              <div className='absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/10 blur-2xl' />
              {s.image ? (
                <div className='overflow-hidden rounded-2xl border border-border bg-card shadow-card'>
                  <Image src={s.image} alt={s.alt} loading='lazy' className='block w-full' />
                </div>
              ) : (
                <div className='aspect-[4/3] rounded-2xl border border-border bg-card p-6 shadow-card'>
                  <div className='flex items-center justify-between'>
                    <p className='font-display text-sm font-semibold text-ink'>
                      {t(`featureSections.${s.key}Tag`)}
                    </p>
                    <s.icon className='h-5 w-5 text-primary' />
                  </div>
                  <div className='mt-5 grid grid-cols-3 gap-2'>
                    {Array.from({ length: 9 }).map((_, k) => (
                      <div
                        key={k}
                        className='h-14 rounded-lg border border-border bg-surface'
                        style={{
                          background: `linear-gradient(135deg, color-mix(in oklab, var(--primary) ${(k + 1) * 6}%, var(--surface)), var(--card))`,
                        }}
                      />
                    ))}
                  </div>
                  <div className='mt-5 h-2 w-full rounded-full bg-surface'>
                    <div className='h-2 w-2/3 rounded-full bg-gradient-to-r from-primary to-primary-glow' />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <CTASection />
    </>
  );
}
