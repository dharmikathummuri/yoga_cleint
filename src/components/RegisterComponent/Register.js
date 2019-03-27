import React, { Component } from "react";
import "./Register.scss";
import { Form, ButtonGroup, Button } from "react-bootstrap";
class Register extends Component {
  register = () => {
    console.log("in hereeeeee");
  };
  registerButton = () => {
    return (
      <div className="login-button">
        <Button variant="success" type="submit">
          Register
        </Button>
      </div>
    );
  };
  renderRadioButtons = () => {
    return (
      <ButtonGroup className="button-flex">
        <div className="instructor-radio">
          Trainee
          <input
            ref="input1"
            type="radio"
            name="radioButtonSet"
            value="input1"
            standalone="true"
            defaultChecked
          />
        </div>
        <div className="trainee-radio">
          Instructor
          <input
            ref="input2"
            type="radio"
            name="radioButtonSet"
            value="input2"
            standalone="true"
          />
        </div>
      </ButtonGroup>
    );
  };
  render() {
    return (
      <div className="register-class">
        <Form onSubmit={this.register}>
          <div className="first-name-input">
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="first-name-text"
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
              />
            </Form.Group>
          </div>

          <div className="last-name-input">
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="last-name-text"
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
              />
            </Form.Group>
          </div>
          <div className="email-input">
            <Form.Group controlId="emailId">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="email-id"
                type="email"
                name="emailId"
                placeholder="Enter Your Email Id"
              />
            </Form.Group>
          </div>
          <div className="ph-no-input">
            <Form.Group controlId="PhNo">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="last-name-text"
                type="text"
                name="PhNo"
                placeholder="Enter Your Phone Number"
              />
            </Form.Group>
          </div>
          <div className="password-input">
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="last-name-text"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </Form.Group>
          </div>
          {this.renderRadioButtons()}
          {this.registerButton()}
        </Form>
      </div>
    );
  }
}

export default Register;
