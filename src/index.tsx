import { createRoot } from "react-dom/client";
import { App } from "./App/App";
import React from "react";

const renderApp = () =>
  createRoot(document.getElementById("root") as HTMLElement).render(<App />);

  renderApp();
