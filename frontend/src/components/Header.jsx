import React from "react";
import "./Header.css";
import logo from "./FCA.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const homeButtonClickHandler = () => {
    window.location.href = '/';
  } 

  return (
    <div className="nav">

      <div className="nav-btn">Enter Data</div>
      <div className="nav-btn">Get Info</div>
      <img className="home-btn" src={logo} alt="FCA" onClick={homeButtonClickHandler}/>
      <div className="nav-btn">Utilities</div>
      <div className="nav-btn">Source Code</div>
    </div>
  );
};

export default Header;
