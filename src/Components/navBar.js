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
  }

  function closeSlideMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("topNavbarItems").style.opacity = "100%";
    document.getElementById("navBarLogo").style.opacity = "100%";
  }

  return (
    // <div style={{ zIndex: 1000, position: "absolute", margin: 100 }}>
    <div>
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
        <nav style={{ height: "100vh", zIndex: 1000 }}></nav>

        <ul id="topNavbarItems" className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/companyprofile" className="nav-link text-white">
              Company Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/getintouch" className="nav-link text-white">
              צור קשר
            </NavLink>
          </li>
        </ul>
        <img id="navBarLogo" className="navBarLogo" src={logo} alt="logo" />
      </nav>

      <div id="side-menu" className="side-nav">
        {/* <button className="btn-close" onclick={closeSlideWindow}> */}
        <button className="btn-close" onClick={closeSlideMenu}>
          &times;
        </button>

        <a id="smaller-display-side-navbar-items" href="/">
          עמוד הבית
        </a>
        <a id="smaller-display-side-navbar-items" href="/companyprofile">
          פרופיל חברה
        </a>
        <a id="smaller-display-side-navbar-items" href="/getintouch">
          צור קשר
        </a>
      </div>
    </div>
  );
}
