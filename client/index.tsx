import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

const render = () => {
  const rootNode = document.querySelector("#root");

  if (!rootNode) return;

  const root = createRoot(rootNode);

  root.render(<App />);
};

render();
