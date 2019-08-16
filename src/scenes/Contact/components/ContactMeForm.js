import React from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

export default class ConContactMeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  isFormDisabled(event) {
    return this.state.submitted;
  }

  render() {
    const maxNameLength = 50;
    const maxEmailLength = 50;
    const maxMessageLength = 500;

    return (
      <div className="contactformcontainer">
        <h2> Contact Us </h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              maxLength={maxNameLength}
              disabled={this.isFormDisabled()}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
              maxLength={maxEmailLength}
              disabled={this.isFormDisabled()}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <textarea
              name="message"
              className="form-control"
              type="textarea"
              placeholder="Type your mesage here"
              value={this.state.message}
              onChange={this.handleInputChange}
              rows="4"
              maxLength={maxMessageLength}
              disabled={this.isFormDisabled()}
              required
            />
          </Form.Group>
          <Form.Text className="text-muted">
            remaining characters: {maxMessageLength - this.state.message.length}{" "}
            / {maxMessageLength}
          </Form.Text>

          <Button id="contactusSubmitbuttom" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {this.state.submitted && (
          <h2> form Successfully submitted submitted </h2>
        )}
      </div>
    );
  }
}
