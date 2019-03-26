import React, { Component } from "react";
import "./loginPage.scss";
import { Form, Button } from "react-bootstrap";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false };
  }
  submitForm = () => {
    this.setState({ submitted: true });
  };
  render() {
    const { submitted } = this.state;
    return (
      <div className="parent">
        {!submitted && (
          <div className="Login-page">
            <Form onSubmit={this.submitForm}>
              <div className="email-input">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="email-text"
                    type="email"
                    placeholder="Enter email"
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
                    placeholder="Enter Password"
                  />
                  <Form.Text className="text-muted">
                    Password should contain at leass one uppercase
                    <br /> letter and one special character.
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="login-button">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        )}
        {submitted && <h1> successfully sumbitted</h1>}
      </div>
    );
  }
}

export default LoginPage;
