import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";
import Prove from "./Prove";
import FooterEa from "./components/core/FooterEa";
import NavBarEA from "./components/core/NavBarEA";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
     {/*  <NavBarEA /> */}
      <Prove />
      <Routing />
     {/*  <FooterEa /> */}
    </BrowserRouter>
  </React.StrictMode>
);
