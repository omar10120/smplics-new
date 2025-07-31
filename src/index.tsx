import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FrameScreen } from "./screens/FrameScreen";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ui/theme-toggle";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <FrameScreen />
      {/* <ThemeToggle /> */}
    </ThemeProvider>
  </StrictMode>,
);
