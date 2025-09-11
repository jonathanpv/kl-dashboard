'use client';

import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import { LibraryHeader } from './LibraryHeader';
import { LibraryHeaderMobile } from './LibraryHeader.mobile';
import { AnalyticsHeader } from './AnalyticsHeader';
import { AnalyticsHeaderMobile } from './AnalyticsHeader.mobile';
import { CreatorsHeader } from './CreatorsHeader';
import { CreatorsHeaderMobile } from './CreatorsHeader.mobile';
import { ExperimentsHeader } from './ExperimentsHeader';
import { ExperimentsHeaderMobile } from './ExperimentsHeader.mobile';
import { DefaultHeader } from './DefaultHeader';
import { DefaultHeaderMobile } from './DefaultHeader.mobile';

type HeaderComponent = () => React.ReactNode;

interface HeaderVariant {
  desktop: HeaderComponent;
  mobile: HeaderComponent;
}

const headerVariants: Record<string, HeaderVariant> = {
  Library: {
    desktop: LibraryHeader,
    mobile: LibraryHeaderMobile,
  },
  Analytics: {
    desktop: AnalyticsHeader,
    mobile: AnalyticsHeaderMobile,
  },
  Creators: {
    desktop: CreatorsHeader,
    mobile: CreatorsHeaderMobile,
  },
  Experiments: {
    desktop: ExperimentsHeader,
    mobile: ExperimentsHeaderMobile,
  },
};

export function useHeaderVariant(view: string): HeaderComponent {
  const isMobile = useIsMobile();
  const variant = headerVariants[view] || { desktop: DefaultHeader, mobile: DefaultHeaderMobile };

  return isMobile ? variant.mobile : variant.desktop;
}