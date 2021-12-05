import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,

  rootElement
);
