import React, { Component } from "react";
import "./loginPage.scss";
import { Form, Button } from "react-bootstrap";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false, emailName: "", passwordName: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  submitForm = () => {
    console.log("in here");
    this.setState({ submitted: true });
  };
  register = () => {
    console.log("object");
    this.props.history.push("/register");
  };
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  renderButtons = () => {
    return (
      <div className="login-button">
        <Button variant="primary" type="submit" onClick={this.submitForm}>
          Login
        </Button>
        <Button variant="success" type="submit" onClick={this.register}>
          Register
        </Button>
      </div>
    );
  };

  render() {
    const { submitted } = this.state;
    return (
      <div className="parent">
        {!submitted && (
          <div className="Login-page">
            <Form>
              <div className="email-input">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="email-text"
                    type="email"
                    name="emailName"
                    placeholder="Enter email"
                    value={this.state.emailName}
                    onChange={this.handleChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </div>

              <div className="password-input">
                <Form.Group controlId="formBasicpassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="password"
                    type="password"
                    name="passwordName"
                    placeholder="Enter Password"
                    value={this.state.passwordName}
                    onChange={this.handleChange}
                  />
                  <Form.Text className="text-muted">
                    Password should contain at least one uppercase
                    <br /> letter and one special character.
                  </Form.Text>
                </Form.Group>
              </div>
              {this.renderButtons()}
            </Form>
          </div>
        )}
        {submitted && <h1> successfully sumbitted</h1>}
      </div>
    );
  }
}

export default LoginPage;
