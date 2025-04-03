import React, { useRef, useEffect } from 'react';
import { useMathJaxContext } from './MathJaxContext';
import type { MathJaxProps } from '../types';

/**
 * Component to render a single math expression
 * @param props MathJaxProps
 * @returns React component
 */
export const MathJax: React.FC<MathJaxProps> = ({ 
  math, 
  inline = false,
  className = '' 
}) => {
  const { isReady, typeset } = useMathJaxContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReady && containerRef.current) {
      // Wrap in try/catch to prevent unhandled promise rejections
      typeset([containerRef.current]).catch(error => {
        console.error('Error typesetting math:', error);
      });
    }
  }, [isReady, math, inline, typeset]);

  // Format math with appropriate delimiters based on display mode
  const formattedMath = inline 
    ? `\\(${math}\\)` 
    : `\\[${math}\\]`;

  return (
    <div 
      ref={containerRef}
      className={`react-mathjax ${inline ? 'inline' : 'display'} ${className}`}
      dangerouslySetInnerHTML={{ __html: formattedMath }}
    />
  );
};