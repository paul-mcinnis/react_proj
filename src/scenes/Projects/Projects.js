import React from "react";
import { Navbar } from "../../components";
import "./styles.css";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div id="projectscontainer" className="container">
        <Navbar activeLink="Projects" />
        <h1>Projects page</h1>
      </div>
    );
  }
}
