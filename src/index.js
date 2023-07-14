import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import Mediator from "./js/Mediator.js";
import { RecoilRoot } from "recoil";




var mediator = new Mediator();





ReactDOM.render(
  <RecoilRoot>

      <App mediator={mediator} />

  </RecoilRoot>,
=======
import "./tailwind.css"
import "rsuite/dist/rsuite.min.css";

import { CustomProvider } from "rsuite";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
        

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";  

ReactDOM.render(
  <React.StrictMode>
    {/* <CustomProvider theme="dark"> */}
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>

    {/* </CustomProvider> */}
  </React.StrictMode>,
>>>>>>> main
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
