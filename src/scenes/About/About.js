import React from "react";
import { Navbar } from "../../components";
import "./styles.css";

export class About extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div id="aboutcontainer" className="container">
        <Navbar activeLink="About" />
        <h1>About page</h1>
      </div>
    );
  }
}

export default About;
