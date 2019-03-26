import React, { Component } from "react";
import "./App.scss";
import "./index.css";
import LoginPage from "./components/LoginComponent";
import Header from "./components/HeaderComponent/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <LoginPage />
        </div>
      </div>
    );
  }
}

export default App;
