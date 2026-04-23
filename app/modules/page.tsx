import { modulesMetadata } from '@/lib/pageMetadata';
import ModulesPage from './ModulePage';

export const metadata = modulesMetadata;
export default function Page() {
  return <ModulesPage />;
}
