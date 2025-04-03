import React, { useRef, useEffect } from 'react';
import { useMathJaxContext } from './MathJaxContext';
import type { MathDisplayProps } from '../types';

/**
 * Component to render content that may contain multiple math expressions
 * @param props MathDisplayProps
 * @returns React component
 */
export const MathDisplay: React.FC<MathDisplayProps> = ({ 
  content, 
  className = '' 
}) => {
  const { isReady, typeset } = useMathJaxContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReady && containerRef.current) {
      typeset([containerRef.current]).catch(error => {
        console.error('Error typesetting math content:', error);
      });
    }
  }, [isReady, content, typeset]);

  return (
    <div 
      ref={containerRef}
      className={`react-mathjax-content ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};