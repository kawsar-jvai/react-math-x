import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MathJaxProvider } from "react-math-x";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MathJaxProvider>
      <App />
    </MathJaxProvider>
  </StrictMode>
);
