import React from "react";
import { Navbar } from "../../components";
import { ContactMeForm } from "./components";
import "./styles.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div id="contactcontainer" className="container">
        <Navbar activeLink="Contact" />
        <ContactMeForm />
      </div>
    );
  }
}
