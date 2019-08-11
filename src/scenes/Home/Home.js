import React from "react";
import { Navbar } from "../../components";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div>
        <Navbar activeLink="Home" />
        <h1>Home page</h1>
      </div>
    );
  }
}
