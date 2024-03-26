import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.tsx";
import "./assets/css/pages/common.css";
import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
