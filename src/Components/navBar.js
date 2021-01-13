import React from "react";
import { NavLink } from "react-router-dom";
import "../Assets/css/SlidingResponsiveNavbar.css";
import logo from "../Assets/img/logo.png";
import access_icon from "../Assets/img/navbar_access.png";
import "../Assets/css/aos.css";

export default function SlidingResponsiveNavbar() {
  function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    // document.getElementById("navBarLogo").style.opacity = "30%";
    // document.getElementById("topNavbarItems").style.opacity = "30%";
    document.getElementById("home-small-nav-item").style.opacity = "1";
    document.getElementById("profile-small-nav-item").style.opacity = "1";
    document.getElementById("contact-small-nav-item").style.opacity = "1";
    document.getElementById("phone_icon").style.opacity = "1";
    document.getElementById("home-small-nav-item").style.transition =
      "300ms ease-in 300ms";
    document.getElementById("profile-small-nav-item").style.transition =
      "300ms ease-in 500ms";
    document.getElementById("contact-small-nav-item").style.transition =
      "300ms ease-in 700ms";
    document.getElementById("phone_icon").style.transition =
      "300ms ease-in 900ms";
  }

  function closeSlideMenu() {
    document.getElementById("home-small-nav-item").style.opacity = "0";
    document.getElementById("profile-small-nav-item").style.opacity = "0";
    document.getElementById("contact-small-nav-item").style.opacity = "0";
    document.getElementById("phone_icon").style.opacity = "0";

    document.getElementById("side-menu").style.width = "0";
    // document.getElementById("topNavbarItems").style.opacity = "100%";
    // document.getElementById("navBarLogo").style.opacity = "100%";
    document.getElementById("home-small-nav-item").style.transition = "200ms";
    document.getElementById("profile-small-nav-item").style.transition =
      "150ms";
    document.getElementById("contact-small-nav-item").style.transition =
      "100ms";
    document.getElementById("phone_icon").style.transition = "50ms";
  }

  return (
    <div style={{ zIndex: 100, position: "fixed" }}>
      <img className="access" src={access_icon} alt=""></img>

      <div className="desktop-navbar-logo-wrapper">
        <img id="navBarLogo" className="navBarLogo" src={logo} alt="logo" />
      </div>
      <nav className="navbar">
        <span id="hamburger-button-id">
          <button className="open-slide" onClick={openSlideMenu}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#01458a" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#01458a" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#01458a" strokeWidth="5" />
            </svg>
          </button>
        </span>

        <ul id="topNavbarItems">
          <li>
            <NavLink to="/getintouch">
              <i
                class="fab fa-facebook-square"
                style={{ fontSize: "150%" }}
              ></i>
            </NavLink>
            <NavLink to="/getintouch">
              <i class="fab fa-instagram" style={{ fontSize: "150%" }}></i>
            </NavLink>
          </li>
          <li style={{ marginLeft: 40 }}>
            <NavLink to="/getintouch">עב</NavLink>
          </li>
          <li>
            <NavLink to="/getintouch">FR</NavLink>
          </li>
          <li style={{ marginRight: 20 }}>
            <NavLink to="/getintouch">EN</NavLink>
          </li>

          <li>
            <NavLink to="/getintouch">צור קשר</NavLink>
          </li>
          <li>
            <NavLink to="/companyprofile">פרופיל חברה</NavLink>
          </li>

          <li>
            <NavLink to="/" exact>
              עמוד הבית
            </NavLink>
          </li>

          <li>
            <a target="_blank" href="tel:+972538268640">
              <i class="fas fa-phone" style={{ fontSize: "150%" }}></i>
            </a>
          </li>
        </ul>
      </nav>
      <div id="side-menu" className="side-nav">
        <ul>
          <li id="home-small-nav-item">
            <NavLink to="/" exact>
              עמוד הבית
            </NavLink>
          </li>
          <li id="profile-small-nav-item">
            <NavLink to="/companyprofile">פרופיל חברה</NavLink>
          </li>
          <li id="contact-small-nav-item">
            <NavLink to="/getintouch">צור קשר</NavLink>
          </li>
          <li id="phone_icon" style={{ opacity: 0 }}>
            <a target="_blank" href="tel:+972538268640">
              <i class="fas fa-phone" style={{ fontSize: "150%" }}></i>
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
