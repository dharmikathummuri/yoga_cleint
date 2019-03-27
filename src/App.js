import React, { Component } from "react";
import "./App.scss";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginComponent";
import ConnectedHeader from "./components/HeaderComponent/Header";
import Register from "./components/RegisterComponent/Register";

class App extends Component {
  render() {
    return (
      <div>
        <ConnectedHeader />
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
