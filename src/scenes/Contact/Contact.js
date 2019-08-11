import React from "react";
import { Navbar } from "../../components";
import "./styles.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div id="contactcontainer" class="container">
        <Navbar activeLink="Contact" />
        <h1>Contact page</h1>
      </div>
    );
  }
}
