import React from "react";
import "./layout.scss";
import logo from "../../assets/icons/prescolaire-logo.png";
import facebook from "../../assets/icons/facebook (1).png";
import twitter from "../../assets/icons/twitter (1).png";
import youtube from "../../assets/icons/youtube (1).png";
import googleplus from "../../assets/icons/googleplus.png";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav">
          <div className="nav-logo">
            <img src={logo} />
          </div>
          <div className="nav-links">
            <div className="nav-social">
              <img src={facebook} />
              <img src={twitter} />
              <img src={youtube} />
              <img src={googleplus} />
            </div>
            <div className="nav-buttons">
              <button className="contact-btn">Contact us Now</button>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="nav-container">
        <div className="main">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/About">
            <p>About</p>
          </Link>
          <Link to="/Programs">
            <p>Programs</p>
          </Link>
          <Link to="/Pages">
            <p>Pages</p>
          </Link>
          <Link to="/News">
            <p>News</p>
          </Link>
          <Link to="/Contact">
            <p>Contact</p>
          </Link>
        </div>
      </nav>
    </>
  );
}
