import { useState, useEffect } from 'react';
import { loadMathJax, typesetMathJax } from '../utils/mathJaxLoader';
import type { MathJaxConfig } from '../types';

/**
 * Hook to load and use MathJax
 * @param config MathJax configuration
 * @param version MathJax version to load
 * @returns isReady flag and typeset function
 */
export const useMathJax = (config: MathJaxConfig = {}, version: string = '3.2.2') => {
  const [isReady, setIsReady] = useState(
    typeof window !== 'undefined' && window.MathJax && window.MathJax.typesetPromise
  );

  useEffect(() => {
    if (isReady) return;

    let isMounted = true;

    loadMathJax(version, config)
      .then(() => {
        if (isMounted) {
          setIsReady(true);
        }
      })
      .catch((error) => {
        console.error('Error loading MathJax:', error);
      });

    return () => {
      isMounted = false;
    };
  }, [config, version, isReady]);

  const typeset = async (elements?: HTMLElement[]): Promise<void> => {
    if (!isReady) {
      throw new Error('MathJax is not ready yet');
    }
    
    return typesetMathJax(elements);
  };

  return { isReady, typeset };
};