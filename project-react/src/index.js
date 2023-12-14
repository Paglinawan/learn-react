import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Redux from "./redux-toolkit/Redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Redux />
  </React.StrictMode>
);
