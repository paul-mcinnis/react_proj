import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div id="nav" class="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contactUs">Contact Us</Link>
      </div>
    );
  }
}
