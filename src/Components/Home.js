import React, { useEffect } from "react";
import Services from "./Services";
import Projects from "./Projects";
import Header from "./Header";
import InfoFooter from "./InfoFooter";
import SplitScreenRowImgFirst from "./SplitScreenRowImgFirst";
import LandingPageForm from "./LandingPageForm";
import "../Assets/css/landing.css";
import "../Assets/css/layout.css";
import "../Assets/css/aos.css";

import "../Assets/css/split-row.css";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="main">
      <Header />
      <Projects />
      <Services />
      <SplitScreenRowImgFirst />
      <LandingPageForm />
      <InfoFooter />
    </div>
  );
}
