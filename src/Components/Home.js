import React, { useEffect } from "react";
// import Services from "./Services";
import Projects from "./Projects";
import Header from "./Header";
import InfoFooter from "./InfoFooter";
import SplitScreenRowImgFirst from "./SplitScreenRowImgFirst";
import SplitScreenRowContentFirst from "./SplitScreenRowContentFirst";
import LandingPageForm from "./LandingPageForm";
import TopServicesRow from "./TopServicesRow";
import "../Assets/css/landing.css";
import "../Assets/css/layout.css";
import "../Assets/css/aos.css";

import "../Assets/css/split-row.css";
import Aos from "aos";
function closeSlideMenu() {
  document.getElementById("home-small-nav-item").style.opacity = "0";
  document.getElementById("profile-small-nav-item").style.opacity = "0";
  document.getElementById("contact-small-nav-item").style.opacity = "0";

  document.getElementById("side-menu").style.width = "0";
  document.getElementById("home-small-nav-item").style.transition = "200ms";
  document.getElementById("profile-small-nav-item").style.transition = "150ms";
  document.getElementById("contact-small-nav-item").style.transition = "100ms";
}

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
    closeSlideMenu();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main" onClick={closeSlideMenu}>
      <Header />
      <TopServicesRow />

      <Projects />
      {/* <Services /> */}
      <SplitScreenRowContentFirst />
      <SplitScreenRowImgFirst />
      <LandingPageForm />
      <InfoFooter />
    </div>
  );
}
