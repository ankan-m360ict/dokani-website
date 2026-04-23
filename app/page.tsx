import HomePage from './home/HomePage';
import { homeMetadata } from '@/lib/pageMetadata';

export const metadata = homeMetadata;
export default function Home() {
  return <HomePage />;
}
