import React from "react";
import { Navbar } from "../../components";

export class About extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>About page</h1>
      </div>
    );
  }
}

export default About;
