import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Mediator from "./js/Mediator.js";
import { RecoilRoot } from "recoil";




var mediator = new Mediator();





ReactDOM.render(
  <RecoilRoot>

      <App mediator={mediator} />

  </RecoilRoot>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
