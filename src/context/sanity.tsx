"use client"
import { createContext, ReactNode, useContext } from 'react';
import { SanityData } from '@/types/sanity.types';
import { useSanity } from '@/hooks/useSanity';

// Initiate context
const SanityContext = createContext<SanityData>({
  books: [],
  customers: [],
  feedback: [],
  services: [],
  team: []
});

// export context consumer
export const useSanityContext = () => {
  const sanity: SanityData = useContext(SanityContext);
  return { ...sanity };
};

// Provide wrapper for context
type Children = { children: ReactNode };
export const SanityProvider = ({ children }: Children) => {
  const { data } = useSanity();

  return (
    <SanityContext.Provider value={data}>
      { children }
    </SanityContext.Provider>
  );
};