import React from "react";
import { Navbar } from "../../components";
import "./styles.css";

export class About extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
    this.state = {
      testText: "waiting on Star Wars API"
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(Response => Response.json())
      .then(res => {
        console.log(res);
        this.setState({
          testText: res.name
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="aboutcontainer" className="container">
        <Navbar activeLink="About" />
        <h1>About page</h1>
        <h2>{this.state.testText}</h2>
      </div>
    );
  }
}

export default About;
