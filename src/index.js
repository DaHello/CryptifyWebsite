import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; // this is new path after putting CSS files into "styles" folder
import App from "./App"; // component from App.js, function called App()
import reportWebVitals from "./reportWebVitals";

// have html, where all pages start.
// so we should not have any html files
// index.html is just the sample code
// load the css into pages when program runs

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//in the hmtl, the div with the id "root" is the containter that will be used
//to render html contents
///I'm assuming that you can also do that with entire files, like in the code above, but as
//we learn react we will figure things out.

/*
This code brings all the pieces together and injects the final product 
into index.html in the public folder
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//change the code aboce if you want to try it out and get an idea of how it works

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
