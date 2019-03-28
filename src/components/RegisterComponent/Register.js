import React, { Component } from "react";
import "./Register.scss";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../../actions/Register/RegisterActions.js";
class Register extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }
  register = async () => {
    await this.props.registerUser("dharmika");
    console.log("this.state", this.props);
  };
  renderRegisterButton = () => {
    return (
      <div className="login-button">
        <Button variant="success" onClick={this.register}>
          REGISTER
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
            value="Trainee"
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
            value="Instructor"
            standalone="true"
          />
        </div>
      </ButtonGroup>
    );
  };
  render() {
    return (
      <div className="register-class">
        <Form>
          <div className="first-name-input">
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="first-name-text"
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                required
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
                required
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
                required
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
                required
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
                required
              />
            </Form.Group>
          </div>
          {this.renderRadioButtons()}
          {this.renderRegisterButton()}
        </Form>
      </div>
    );
  }
}
export default connect(
  state => ({
    registerdUser: state.registerReducer.result
  }),
  { registerUser }
)(Register);
