import React from 'react';
import { cn } from '@/lib/utils';

interface MasonryLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: number;
}

const MasonryLayout = React.forwardRef<HTMLDivElement, MasonryLayoutProps>(
  ({ className, children, columns = 5, ...props }, ref) => {
    const columnWrapper: React.ReactNode[][] = Array.from(
      { length: columns },
      () => []
    );

    React.Children.forEach(children, (child, index) => {
      if (child) {
        columnWrapper[index % columns].push(child);
      }
    });

    return (
      <div
        ref={ref}
        className={cn('grid gap-4', className)}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
        {...props}
      >
        {columnWrapper.map((column, i) => (
          <div key={i} className="flex flex-col gap-4">
            {column.map((item, j) => (
              <div key={j}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
);

MasonryLayout.displayName = 'MasonryLayout';

export { MasonryLayout };
