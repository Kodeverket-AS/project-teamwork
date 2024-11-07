"use client"
import { createContext, ReactNode, useContext } from 'react';
import { SanityData } from '@/types/sanity.types';

// Initiate context
export const SanityContext = createContext<SanityData>(null);
export const useSanityContext = () => useContext(SanityContext)

// Provide wrapper for context
type Children = { children: ReactNode };
export const SanityProvider = ({ children }: Children) => {
  const data: SanityData = null

  return (
    <SanityContext.Provider value={ data }>
      { children }
    </SanityContext.Provider>
  )
}