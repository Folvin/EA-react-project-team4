import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";
import Footer from "./components/core/Footer";
import LoginBar from "./components/core/LoginBar";
import Prove from "./Prove";
import F1 from "./pages/f1/F1Homepage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginBar />
      <div className="h-[96px]"></div>
      {/* <Prove/> */}
      <Routing />
      {/* <F1 /> */}
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);
