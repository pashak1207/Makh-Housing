import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { stateUa, stateEn, options } from "./state/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App options={options} stateEn={stateEn} stateUa={stateUa} />
    </BrowserRouter>
  </React.StrictMode>
);
