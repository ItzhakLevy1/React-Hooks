import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> // Uncomment this line to enable StrictMode - will make the useEffect run twice in development mode
  <App />
  // </React.StrictMode>
);
