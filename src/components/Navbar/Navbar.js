import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div id="nav" class="nav-bar">
        <Link class={this.props.activeLink === "Home" ? "active" : ""} to="/">
          Home
        </Link>
        <Link
          class={this.props.activeLink === "About" ? "active" : ""}
          to="/about"
        >
          About
        </Link>
        <Link
          class={this.props.activeLink === "Projects" ? "active" : ""}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          class={this.props.activeLink === "Journal" ? "active" : ""}
          to="/journal"
        >
          Journal
        </Link>
        <Link
          class={this.props.activeLink === "Contact" ? "active" : ""}
          to="/contactUs"
        >
          Contact Us
        </Link>
      </div>
    );
  }
}
