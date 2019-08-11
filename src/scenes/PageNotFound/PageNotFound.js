import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div id="notfoundtxt" class="col-md">
            <h1>Sorry</h1>
            <h2>We can't find that page</h2>
            <h3>
              Would you like to go the the &nbsp;
              <Link to="/">home page</Link>?
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
