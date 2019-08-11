import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { About, Contact, Home, Projects } from "./scenes";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contactUs" component={Contact} />
      </div>
    </BrowserRouter>
  );
}
