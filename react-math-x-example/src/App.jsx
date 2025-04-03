import "./App.css";
import { MathDisplay } from "react-math-x";

function App() {
  const html = `<p>A second-degree equation, also known as a quadratic equation, is an equation of the form:</p>\n\n<div>\\[ ax^2 + bx + c = 0 \\]</div>\n\n<p>where:</p>\n<ul>\n    <li>\\( a \\), \\( b \\), and \\( c \\) are constants, with \\( a \\neq 0 \\).</li>\n    <li>\\( x \\) represents the variable or unknown that we want to solve for.</li>\n</ul>\n\n<p>Quadratic equations can have two solutions, one solution, or no real solution depending on the discriminant, which is part of the quadratic formula.</p>\n\n<p>The solutions of a quadratic equation can be found using the quadratic formula:</p>\n\n<div>\\[ x = \\frac{{-b \\pm \\sqrt{{b^2 - 4ac}}}}{2a} \\]</div>\n\n<p>Let's break down the process to solve a quadratic equation using an example:</p>\n\n<p><strong>Example:</strong> Solve \\( 2x^2 + 3x - 5 = 0 \\)</p>\n\n<ol>\n    <li><p><strong>Identify the coefficients:</strong></p>\n        <ul>\n            <li>\\( a = 2 \\)</li>\n            <li>\\( b = 3 \\)</li>\n            <li>\\( c = -5 \\)</li>\n        </ul>\n    </li>\n    <li><p><strong>Calculate the discriminant:</strong></p>\n        <div>\\[ \\Delta = b^2 - 4ac \\]</div>\n        <div>\\[ = (3)^2 - 4 \\cdot 2 \\cdot (-5) \\]</div>\n        <div>\\[ = 9 + 40 \\]</div>\n        <div>\\[ = 49 \\]</div>\n    </li>\n    <li><p><strong>Since the discriminant is positive, there are two real solutions.</strong></p></li>\n    <li><p><strong>Use the quadratic formula to find the solutions:</strong></p>\n        <div>\\[ x = \\frac{{-b \\pm \\sqrt{\\Delta}}}{2a} \\]</div>\n        <div>\\[ = \\frac{{-3 \\pm \\sqrt{49}}}{4} \\]</div>\n        <div>\\[ = \\frac{{-3 \\pm 7}}{4} \\]</div>\n    </li>\n    <li><p><strong>Calculate the two solutions:</strong></p>\n        <ul>\n            <li>First solution: \\( x = \\frac{{-3 + 7}}{4} = \\frac{4}{4} = 1 \\)</li>\n            <li>Second solution: \\( x = \\frac{{-3 - 7}}{4} = \\frac{-10}{4} = -2.5 \\)</li>\n        </ul>\n    </li>\n</ol>\n\n<p>Final answer: \\( \\boxed{x = 1 \\text{ or } x = -2.5} \\)</p>`;
  return <MathDisplay content={html} />;
}

export default App;
