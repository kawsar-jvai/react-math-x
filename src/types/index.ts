export interface MathJaxConfig {
  tex?: {
    inlineMath?: string[][];
    displayMath?: string[][];
    processEscapes?: boolean;
    processEnvironments?: boolean;
    macros?: Record<string, string>;
    [key: string]: any;
  };
  svg?: {
    fontCache?: string;
    [key: string]: any;
  };
  startup?: {
    typeset?: boolean;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface MathJaxContextValue {
  isReady: boolean;
  typeset: (elements?: HTMLElement[]) => Promise<void>;
}

export interface MathJaxProviderProps {
  children: React.ReactNode;
  config?: MathJaxConfig;
  version?: string;
}

export interface MathJaxProps {
  math: string;
  inline?: boolean;
  className?: string;
}

export interface MathDisplayProps {
  content: string;
  className?: string;
}
