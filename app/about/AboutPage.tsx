'use client';
import { motion } from 'framer-motion';
import { Heart, Target, Eye } from 'lucide-react';
import { CTASection } from '@/components/site/CTASection';
import { useT } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useT();
  const cards = [
    { icon: Heart, t: t('about.storyT'), d: t('about.storyD') },
    { icon: Target, t: t('about.missionT'), d: t('about.missionD') },
    { icon: Eye, t: t('about.visionT'), d: t('about.visionD') },
  ];
  const stats = [
    { v: '40+', l: t('about.statBusinesses') },
    { v: '৳12B+', l: t('about.statTx') },
    { v: '20+', l: t('about.statModules') },
    { v: '99.98%', l: t('about.statUptime') },
  ];
  return (
    <>
      <section className='mx-auto max-w-4xl px-5 pb-12 pt-20 text-center md:px-8 md:pt-28'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          {t('about.eyebrow')}
        </p>
        <h1 className='mt-3 font-display text-4xl font-bold text-ink md:text-6xl'>
          {t('about.titleA')} <span className='text-gradient-brand'>{t('about.titleB')}</span>
        </h1>
        <p className='mx-auto mt-5 max-w-2xl text-muted-foreground'>{t('about.sub')}</p>
      </section>

      <section className='mx-auto grid max-w-7xl gap-5 px-5 pb-12 md:grid-cols-3 md:px-8'>
        {cards.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className='rounded-2xl border border-border bg-card p-7'
          >
            <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary'>
              <c.icon className='h-5 w-5' />
            </div>
            <h3 className='mt-5 font-display text-xl font-semibold text-ink'>{c.t}</h3>
            <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{c.d}</p>
          </motion.div>
        ))}
      </section>

      <section className='mx-auto max-w-7xl px-5 py-16 md:px-8'>
        <div className='grid gap-5 rounded-3xl border border-border bg-surface p-8 md:grid-cols-4 md:p-12'>
          {stats.map((s) => (
            <div key={s.l} className='text-center'>
              <p className='font-display text-3xl font-bold text-gradient-brand md:text-5xl'>
                {s.v}
              </p>
              <p className='mt-1 text-sm text-muted-foreground'>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
