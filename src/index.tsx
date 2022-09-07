import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";
import Prove from "./Prove";
import FooterEa from "./global-components/FooterEa";
import NavBarEA from "./global-components/navbar/NavBarEA";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBarEA />
      <Prove />
      <Routing /> 
      <FooterEa />
    </BrowserRouter>
  </React.StrictMode>
);
