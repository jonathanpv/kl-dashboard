'use client';

import { createContext, useState, useMemo, ReactNode, Dispatch, SetStateAction } from 'react';

interface ViewContextProps {
  currentView: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
}

export const ViewContext = createContext<ViewContextProps | null>(null);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState('Library');

  const value = useMemo(() => ({ currentView, setCurrentView }), [currentView]);

  return (
    <ViewContext.Provider value={value}>
      {children}
    </ViewContext.Provider>
  );
}
