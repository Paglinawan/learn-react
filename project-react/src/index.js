import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Reducer from "./Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reducer />
  </React.StrictMode>
);
