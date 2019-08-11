import React from "react";
import { Navbar } from "../../components";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div>
        <Navbar activeLink="Contact" />
        <h1>Contact page</h1>
      </div>
    );
  }
}
