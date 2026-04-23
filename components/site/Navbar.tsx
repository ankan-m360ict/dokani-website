'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useT } from '@/lib/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useT();
  const pathname = usePathname();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/features', label: t('nav.features') },
    { to: '/modules', label: t('nav.modules') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ] as const;

  const baseClass = 'rounded-full px-3.5 py-2 text-sm font-medium transition';
  const inactiveClass = 'text-muted-foreground hover:bg-primary-soft hover:text-ink';
  const activeClass = 'font-semibold text-ink bg-primary-soft';

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8'>
        <Link href='/' className='flex items-center' aria-label='Dokani — home'>
          <Logo />
        </Link>

        <nav className='hidden items-center gap-1 md:flex'>
          {links.map((l) => {
            const isActive = l.to === '/' ? pathname === '/' : pathname.startsWith(l.to);

            return (
              <Link
                key={l.to}
                href={l.to}
                className={cn(baseClass, isActive ? activeClass : inactiveClass)}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className='hidden items-center gap-2 md:flex'>
          <LanguageSwitcher />
          <Link
            href='/pricing'
            className='rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow'
          >
            {t('nav.startTrial')}
          </Link>
        </div>

        <div className='flex items-center gap-2 md:hidden'>
          <LanguageSwitcher compact />
          <button
            aria-label='Menu'
            onClick={() => setOpen((v) => !v)}
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border'
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open && (
        <div className='border-t border-border bg-background md:hidden'>
          <div className='mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3'>
            {links.map((l) => {
              const isActive = l.to === '/' ? pathname === '/' : pathname.startsWith(l.to);

              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={cn(baseClass, isActive ? activeClass : inactiveClass)}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href='/pricing'
              onClick={() => setOpen(false)}
              className='mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground'
            >
              {t('nav.startTrial')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
