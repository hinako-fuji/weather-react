import React from "react";
import Footer from "./Footer";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app-body">
          <Weather />
        </div>
        <Footer />
      </div>
    </div>
  );
}
