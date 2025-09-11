import React from 'react';
import { cn } from '@/lib/utils';

interface MasonryLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MasonryLayout = React.forwardRef<HTMLDivElement, MasonryLayoutProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'gap-2.5 columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-5',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="mb-2.5 break-inside-avoid">
            {child}
          </div>
        ))}
      </div>
    );
  }
);

MasonryLayout.displayName = 'MasonryLayout';

export { MasonryLayout };