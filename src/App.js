import React, { Component } from "react";
import "./App.scss";
import "./index.css";
import NavBar from "./components/NavBarComponent";
import LoginPage from "./components/LoginComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="body">
          <LoginPage />
        </div>
      </div>
    );
  }
}

export default App;
