import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "highlight.js/styles/atom-one-dark.css";
import "./index.css";

// HashRouter keeps deep links (e.g. /#/blog/my-post) working on GitHub Pages
// without needing a custom 404 redirect.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
