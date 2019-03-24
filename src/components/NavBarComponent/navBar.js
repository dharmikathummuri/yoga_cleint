import React, { Component } from "react";
import "./navBar.scss";
import { Button } from "react-bootstrap";
class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar-grid">
        <div className="item1">
          <Button variant="success">POWER YOGA</Button>
        </div>
        <div className="item2">
          <Button variant="success">INSTRUCTORS</Button>
        </div>
        <div className="item3">
          <Button variant="success">PRICING</Button>
        </div>
        <div className="item4">
          <Button variant="success">REGISTER</Button>
        </div>
        <div className="item5">
          <Button variant="success">CLASSES</Button>
        </div>
        <div className="item6" />
        <div className="item7" />
        <div className="item8" />
        <div className="item9" />
        <div className="item10">
          <Button variant="success">SEARCH BAR</Button>
        </div>
      </div>
    );
  }
}

export default NavBar;
