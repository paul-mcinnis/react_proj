import React from "react";
import { Navbar } from "../../components";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div>
        <Navbar activeLink="Projects" />
        <h1>Projects page</h1>
      </div>
    );
  }
}
