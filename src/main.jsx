import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "./components/ui/sonner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
      closeButton
      expand={true}
      richColors
      toastOptions={{
        style: {
          fontSize: "20px"
        },
      }}
    />
  </React.StrictMode>
);
