import React from "react";
import { NavLink } from "react-router-dom";
import "../Assets/css/SlidingResponsiveNavbar.css";
import logo from "../Assets/img/logo.png";
import "../Assets/css/aos.css";
// import Home from "./Home";
// import CompanyProfile from "./CompanyProfile";
// import GetInContact from "./GetInContact";

export default function SlidingResponsiveNavbar() {
  function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("navBarLogo").style.opacity = "30%";
    document.getElementById("topNavbarItems").style.opacity = "30%";
    document.getElementById("home-small-nav-item").style.opacity = "1";
    document.getElementById("profile-small-nav-item").style.opacity = "1";
    document.getElementById("contact-small-nav-item").style.opacity = "1";
  }

  function closeSlideMenu() {
    document.getElementById("home-small-nav-item").style.opacity = "0";
    document.getElementById("profile-small-nav-item").style.opacity = "0";
    document.getElementById("contact-small-nav-item").style.opacity = "0";

    document.getElementById("side-menu").style.width = "0";
    document.getElementById("topNavbarItems").style.opacity = "100%";
    document.getElementById("navBarLogo").style.opacity = "100%";
  }

  return (
    <div style={{ zIndex: 10000 }}>
      <nav className="navbar">
        <span className="open-slide">
          <button onClick={openSlideMenu}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="black" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="black" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="black" strokeWidth="5" />
            </svg>
          </button>
        </span>
        <nav style={{}}></nav>

        <ul id="topNavbarItems">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/companyprofile">Company Profile</NavLink>
          </li>
          <li>
            <NavLink to="/getintouch">צור קשר</NavLink>
          </li>
        </ul>
        <img id="navBarLogo" className="navBarLogo" src={logo} alt="logo" />
      </nav>
      <div id="side-menu" className="side-nav">
        <ul>
          <li>
            {" "}
            <a id="home-small-nav-item" href="/">
              עמוד הבית
            </a>
          </li>
          <li>
            {" "}
            <a id="profile-small-nav-item" href="/companyprofile">
              פרופיל חברה
            </a>
          </li>
          <li>
            {" "}
            <a id="contact-small-nav-item" href="/getintouch">
              צור קשר
            </a>
          </li>
        </ul>

        <button className="btn-close" onClick={closeSlideMenu}>
          &times;
        </button>
      </div>
    </div>
  );
}
