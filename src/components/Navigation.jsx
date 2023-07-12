import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Logo from "../images/meet logo.png"
const Navigation = () => {
  return (
    <>
      <h2>Meet application...!</h2>
      <nav>
        <img src={Logo} className="" alt="logo" width="150px" height="50px"/>
        <div className="link-parent">
        <Link to="/home" className="link">Home</Link>
        <Link to="/addMeeting" className="link">Add Meetings</Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
