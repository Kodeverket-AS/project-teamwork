"use client"
import { createContext, ReactNode, useContext } from 'react';
import { SanityData } from '@/types/sanity.types';
import { useSanity } from '@/hooks/useSanity';

// Initiate a context
const SanityContext = createContext<SanityData>({
  books: [],
  customers: [],
  feedback: [],
  services: [],
  team: []
});

/**
 * Hook for using SanityData, you can destructure return object to use specific fields.
 * While arrays might be empty, they are always defined.
 * @returns {SanityData}
 */
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