import React from "react";
import { Navbar } from "../../components";
import "./styles.css";

export default class Journal extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div id="jounralcontainer" className="container">
        <Navbar activeLink="Journal" />
        <h1>My Journal page</h1>
      </div>
    );
  }
}
