import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div id="nav" className="nav-bar">
        <Link
          className={this.props.activeLink === "Home" ? "active" : ""}
          to="/"
        >
          Home
        </Link>
        <Link
          className={this.props.activeLink === "About" ? "active" : ""}
          to="/about"
        >
          About
        </Link>
        <Link
          className={this.props.activeLink === "Projects" ? "active" : ""}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={this.props.activeLink === "Journal" ? "active" : ""}
          to="/journal"
        >
          Journal
        </Link>
        <Link
          className={this.props.activeLink === "Contact" ? "active" : ""}
          to="/contactUs"
        >
          Contact Us
        </Link>
      </div>
    );
  }
}
