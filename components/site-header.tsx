'use client';

import { useView } from '@/hooks/use-view';
import { useHeaderVariant } from './site-header-variants';

export function SiteHeader() {
  const { currentView } = useView();
  const HeaderComponent = useHeaderVariant(currentView);

  return <HeaderComponent />;
}
