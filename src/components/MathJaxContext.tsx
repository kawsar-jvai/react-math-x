import React, { createContext, useContext, useMemo } from 'react';
import { useMathJax } from '../hooks/useMathJax';
import type { MathJaxContextValue, MathJaxProviderProps } from '../types';

// Create context with default values
const MathJaxContext = createContext<MathJaxContextValue>({
  isReady: false,
  typeset: async () => {
    throw new Error('MathJax context not initialized');
  }
});

/**
 * Hook to use MathJax context
 * @returns MathJaxContextValue
 */
export const useMathJaxContext = () => useContext(MathJaxContext);

/**
 * Provider component for MathJax
 * @param props MathJaxProviderProps
 * @returns Provider component
 */
export const MathJaxProvider: React.FC<MathJaxProviderProps> = ({ 
  children, 
  config = {},
  version = '3.2.2'
}) => {
  const { isReady, typeset } = useMathJax(config, version);
  
  const value = useMemo(() => ({
    isReady,
    typeset
  }), [isReady, typeset]);

  return (
    <MathJaxContext.Provider value={value}>
      {children}
    </MathJaxContext.Provider>
  );
};