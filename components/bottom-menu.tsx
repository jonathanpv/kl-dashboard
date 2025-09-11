'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface BottomMenuItem {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  label: string;
  href: string;
}

export function BottomMenu({ items }: { items: BottomMenuItem[] }) {
  const pathname = usePathname();

  const activeItem = React.useMemo(() => {
    const sortedItems = [...items].sort((a, b) => b.href.length - a.href.length);
    return sortedItems.find(item => pathname.startsWith(item.href));
  }, [items, pathname]);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 h-16 bg-background/80 backdrop-blur-xl border rounded-full flex items-center justify-center gap-1 p-2 z-50 shadow-lg">
      {items.map((item) => {
        const isActive = activeItem?.href === item.href;
        return (
          <Link href={item.href} key={item.label} className={cn(
            "flex flex-col items-center justify-center w-16 h-full rounded-full text-muted-foreground transition-all duration-300 ease-in-out",
            isActive ? "text-primary bg-primary/10" : "hover:text-foreground"
          )}>
            <item.icon className="w-6 h-6" />
            <span className="text-xs font-medium mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
