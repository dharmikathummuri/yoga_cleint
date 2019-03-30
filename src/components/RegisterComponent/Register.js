import React, { Component } from "react";
import "./Register.scss";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../../actions/Register/RegisterActions.js";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailName: "",
      phno: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  register = () => {
    const { firstName, lastName, emailName, phno, password } = this.state;
    let build_params = {
      fname: firstName,
      lname: lastName,
      phno: phno,
      email: emailName,
      password: password
    };
    this.props.registerUser(build_params);
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

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

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
                value={this.state.firstName}
                onChange={this.handleChange}
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
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div className="email-input">
            <Form.Group controlId="emailId">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="email-id"
                type="email"
                name="emailName"
                placeholder="Enter Your Email Id"
                required
                value={this.state.emailName}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div className="ph-no-input">
            <Form.Group controlId="PhNo">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="last-name-text"
                type="number"
                name="phno"
                placeholder="Enter Your Phone Number"
                required
                value={this.state.phno}
                onChange={this.handleChange}
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
                value={this.state.password}
                onChange={this.handleChange}
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
