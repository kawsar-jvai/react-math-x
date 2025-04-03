import { MathJaxConfig } from '../types';

declare global {
  interface Window {
    MathJax: any;
  }
}

/**
 * Loads MathJax script from CDN
 * @param version MathJax version to load
 * @param config MathJax configuration
 * @returns Promise that resolves when MathJax is loaded
 */
export const loadMathJax = (version: string = '3.2.2', config: MathJaxConfig = {}): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('MathJax can only be loaded in browser environment'));
      return;
    }

    // If MathJax is already loaded
    if (window.MathJax) {
      resolve();
      return;
    }

    // Set MathJax config
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
        ...(config.tex || {})
      },
      svg: {
        fontCache: 'global',
        ...(config.svg || {})
      },
      startup: {
        typeset: false, // We'll trigger typesetting manually
        ...(config.startup || {})
      },
      ...config
    };

    // Create and append script
    const script = document.createElement('script');
    script.src = `https://cdn.jsdelivr.net/npm/mathjax@${version}/es5/tex-svg.js`;
    script.async = true;
    script.id = 'mathjax-script';

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load MathJax'));

    document.head.appendChild(script);
  });
};

/**
 * Typeset MathJax in specific elements or the entire document
 * @param elements Elements to typeset, or undefined for the entire document
 * @returns Promise that resolves when typesetting is complete
 */
export const typesetMathJax = async (elements?: HTMLElement[]): Promise<void> => {
  if (typeof window === 'undefined' || !window.MathJax || !window.MathJax.typesetPromise) {
    throw new Error('MathJax is not loaded');
  }

  try {
    await window.MathJax.typesetPromise(elements);
  } catch (error) {
    console.error('MathJax typesetting failed:', error);
    throw error;
  }
};
