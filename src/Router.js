import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { About, Contact, Home, PageNotFound, Projects } from "./scenes";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contactUs" component={Contact} />
        <Route path="*" component={PageNotFound} />
      </div>
    </BrowserRouter>
  );
}
