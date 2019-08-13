import React from "react";
import { Navbar } from "../../components";
import "./styles.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div id="homecontainer" className="container">
        <Navbar activeLink="Home" />
        <h1>Home page</h1>
      </div>
    );
  }
}
