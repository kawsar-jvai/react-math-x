# React MathJax Renderer

A modern React 19 component library for rendering LaTeX math expressions using MathJax.

## Features

- 🚀 Built for React 19
- 📦 TypeScript support
- 🧪 Client-side rendering with MathJax
- 🔄 Auto-updates when content changes
- 🎛️ Fully configurable MathJax options
- 🎯 Support for inline and display math modes

## Installation

```bash
npm install react-math-x
```

or

```bash
yarn add react-math-x
```

## Usage

### Basic usage

```jsx
import { MathJaxProvider, MathJax } from "react-math-x";

function App() {
  return (
    <MathJaxProvider>
      <h1>The Quadratic Formula</h1>
      <p>
        The solution to a quadratic equation is given by:
        <MathJax math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
      </p>
    </MathJaxProvider>
  );
}
```

### Inline math

```jsx
<p>
  When we have an equation like <MathJax math="ax^2 + bx + c = 0" inline /> we
  can use the quadratic formula.
</p>
```

### Rendering content with multiple expressions

```jsx
import { MathJaxProvider, MathDisplay } from "react-math-x";

function MathContent() {
  const content = `
    <p>The area of a circle is $A = \pi r^2$.</p>
    <p>The Pythagorean theorem: $a^2 + b^2 = c^2$.</p>
    <p>Maxwell's Equations:</p>
    $$\begin{aligned}
    \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
    \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
    \nabla \cdot \vec{\mathbf{B}} & = 0
    \end{aligned}$$
  `;

  return (
    <MathJaxProvider>
      <MathDisplay content={content} />
    </MathJaxProvider>
  );
}
```

### Custom configuration

```jsx
import { MathJaxProvider, MathJax } from "react-math-x";

const config = {
  tex: {
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
    macros: {
      R: "\\mathbb{R}",
      set: ["\\{#1\\}", 1],
    },
  },
  svg: {
    fontCache: "global",
  },
};

function App() {
  return (
    <MathJaxProvider config={config} version="3.2.2">
      <MathJax math="f: R \to R \quad f(x) = x^2" />
      <MathJax math="A = \set{1, 2, 3}" />
    </MathJaxProvider>
  );
}
```

### Using the hook directly

```jsx
import { useMathJax } from 'react-math-x';
import { useRef, useEffect } from 'react';

function CustomMathComponent() {
  const containerRef = useRef(null);
  const { isReady, typeset } = useMathJax();

  useEffect(() => {
    if (isReady && containerRef.current) {
      typeset([containerRef.current]);
    }
  }, [isReady, typeset]);

  return (
    <div ref={containerRef}>
      <p>Inline math: $E = mc^2$</p>
      <p>Display math: $$F = G\frac{m_1 m_2}{r^2}$$</p>
    </div>
  );
}
```

## API Reference

### `MathJaxProvider`

The context provider that loads MathJax.

Props:

- `config` (optional): MathJax configuration object
- `version` (optional): MathJax version to load from CDN (default: "3.2.2")
- `children`: React children

### `MathJax`

Component to render a single math expression.

Props:

- `math`: LaTeX math string (without delimiters)
- `inline` (optional): Whether to render in inline mode (default: false)
- `className` (optional): Additional CSS class

### `MathDisplay`

Component to render HTML content that may contain multiple math expressions.

Props:

- `content`: HTML string that may contain LaTeX math expressions
- `className` (optional): Additional CSS class

### `useMathJax`

Hook to load and use MathJax directly.

Parameters:

- `config` (optional): MathJax configuration
- `version` (optional): MathJax version

Returns:

- `isReady`: Boolean indicating if MathJax is loaded
- `typeset`: Function to typeset elements

## License

MIT
