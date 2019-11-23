import ReactGA from "react-ga";
import React from "react";
import "./App.css";
import Router from "./Router";

// Initialize google analytics
ReactGA.initialize("UA-153149185-1");
ReactGA.pageview("/homepage");

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
