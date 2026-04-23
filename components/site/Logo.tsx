import logoSrc from '@/assets/dokani-logo.png';
import Image from 'next/image';

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

/**
 * Dokani brand logo — uses the official PNG wordmark.
 * The PNG already contains the "SALES SOFTWARE FOR SHOP" tagline,
 * so we render at a slightly larger size when showTagline is true.
 */
export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className ?? ''}`}>
      <Image
        src={logoSrc}
        alt='Dokani — Sales software for shop'
        className={showTagline ? 'h-12 w-auto md:h-14' : 'h-9 w-auto md:h-10'}
        width={500}
        height={170}
        loading='eager'
        decoding='async'
      />
    </span>
  );
}
