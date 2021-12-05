import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <p className="small">👩‍💻 This project was coded by <span class="name">Karen Jamieson</span> and is open-sourced on <a href="https://github.com/k-jamie/vanilla-weather-app" class="project-links">GitHub</a> and hosted on <a href="https://nervous-keller-4ac341.netlify.app/" class="project-links">Netlify</a>.</p>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,

  rootElement
);
