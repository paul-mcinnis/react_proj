import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About, Contact, Home, PageNotFound, Projects } from "./scenes";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contactUs" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
