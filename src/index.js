/*React*/
import React from "react";
import ReactDOM from "react-dom/client";

/*Components*/
//import App from "./App";
import ScrollApp from "./ScrollApp";

/*CSS*/
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ScrollApp />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
import reportWebVitals from './reportWebVitals';
reportWebVitals();
*/
