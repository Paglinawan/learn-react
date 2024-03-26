import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/pages/top.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <section className="intro">
      <div className="l-inner">
        <h1 className="intro-heading">My Apps</h1>
        <ul className="intro-list">
          <li className="intro-item">
            <a href="#" className="intro-link">
              TEST
            </a>
          </li>
        </ul>
      </div>
    </section>
  </React.StrictMode>
);
