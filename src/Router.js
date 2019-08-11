import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Journal,
  PageNotFound,
  Projects
} from "./scenes";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} title="Welcome" />}
          />
          <Route path="/home" render={() => <Redirect to="/" />} />
          <Route
            path="/about"
            render={props => <About {...props} title="About" />}
          />
          <Route
            path="/projects"
            render={props => <Projects {...props} title="Projects" />}
          />
          <Route
            path="/journal"
            render={props => <Journal {...props} title="Journal" />}
          />
          <Route
            path="/contactUs"
            render={props => <Contact {...props} title="Contact Us" />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
