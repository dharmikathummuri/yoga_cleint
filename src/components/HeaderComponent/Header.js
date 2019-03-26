import React, { Component } from "react";
import "./Header.scss";
import { images } from "../../assets/images";
class Header extends Component {
  render() {
    return (
      <div className="header-class">
        <div className="item1">
          <img src={images["logo"]} alt="none" />
        </div>
        <div className="item2">Fitness Mantra</div>
      </div>
    );
  }
}

export default Header;
