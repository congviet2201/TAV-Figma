import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DarkModeContextProvider } from "@components/DarkModeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);
