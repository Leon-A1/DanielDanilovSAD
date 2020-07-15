import React from "react";
import Services from "./Services";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";
import InfoFooter from "./InfoFooter";
import SplitScreenRowImgFirst from "./SplitScreenRowImgFirst";
// import SplitScreenRowContentFirst from "./SplitScreenRowContentFirst";
import "../Assets/css/landing.css";
import "../Assets/css/layout.css";

import "../Assets/css/split-row.css";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Projects />

      <Services />
      <SplitScreenRowImgFirst />
      {/* <SplitScreenRowContentFirst /> */}
      <InfoFooter />
      <Footer />
    </div>
  );
}
