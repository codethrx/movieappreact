import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//setting up the router.
import { BrowserRouter } from "react-router-dom";
//importing context
import { MovieContextProvider } from "./context/MoviesContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieContextProvider>
  </React.StrictMode>
);
