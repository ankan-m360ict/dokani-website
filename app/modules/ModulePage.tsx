'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { modules } from '@/lib/modules';
import { CTASection } from '@/components/site/CTASection';
import { useT } from '@/lib/i18n';

// export const Route = createFileRoute('/modules')({
//   head: () => ({
//     meta: [
//       { title: 'Modules — Dokani' },
//       {
//         name: 'description',
//         content:
//           'Explore all 20+ Dokani modules: Sales, Purchase, Inventory, Accounts, Payroll, Reports and more.',
//       },
//       { property: 'og:title', content: 'Modules — Dokani' },
//       {
//         property: 'og:description',
//         content: '20+ powerful modules covering every part of your business.',
//       },
//     ],
//   }),
//   component: ModulesPage,
// });

export default function ModulesPage() {
  const { t } = useT();
  return (
    <>
      <section className='mx-auto max-w-4xl px-5 pb-12 pt-20 text-center md:px-8 md:pt-28'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('modulePage.eyebrow')}
        </p>
        <h1 className='mt-3 font-display text-4xl font-bold text-ink md:text-6xl'>
          {t('modulePage.titleA')}{' '}
          <span className='text-gradient-brand'>{t('modulePage.titleB')}</span>
        </h1>
        <p className='mx-auto mt-5 max-w-xl text-muted-foreground'>{t('modulePage.sub')}</p>
      </section>

      <section className='mx-auto max-w-7xl px-5 pb-8 md:px-8'>
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {modules.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              className='group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft'
            >
              <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground'>
                  <m.icon className='h-5 w-5' />
                </div>
                <h3 className='font-display text-lg font-semibold text-ink'>
                  {t(`modules.${m.slug}.name`)}
                </h3>
              </div>
              <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                {t(`modules.${m.slug}.description`)}
              </p>
              <ul className='mt-5 space-y-2 border-t border-border pt-4'>
                {(['f1', 'f2', 'f3'] as const).map((k) => (
                  <li key={k} className='flex items-center gap-2 text-xs text-foreground'>
                    <Check className='h-3.5 w-3.5 text-primary' />
                    {t(`modules.${m.slug}.${k}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
