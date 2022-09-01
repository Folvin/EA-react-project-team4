import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";
import Prove from "./Prove";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Prove />
      <Routing />
    </BrowserRouter>
  </React.StrictMode>
);
