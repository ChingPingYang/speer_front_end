import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Global is from style-component, for setting up global css.
import Global from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>,
  document.getElementById("root")
);
