import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    document.title = "Page Not Found";
  }

  render() {
    return (
      <div id="notfoundcontainer" className="container">
        <div className="row">
          <div id="notfoundtxt" className="col-md">
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
