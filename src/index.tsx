import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BookContextProvider } from "./context/BooksContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </Router>
  </React.StrictMode>
);
