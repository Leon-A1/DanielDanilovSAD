import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import Footer from "./Footer";
import InfoFooter from "./InfoFooter";
import SplitScreenRowImgFirst from "./SplitScreenRowImgFirst";
import SplitScreenRowContentFirst from "./SplitScreenRowContentFirst";
import "../Assets/css/landing.css";
import "../Assets/css/split-row.css";

export default function Home() {
  return (
    <div className="main">
      <SecondRow />
      <FirstRow />
      <SplitScreenRowImgFirst />
      <SplitScreenRowContentFirst />
      <InfoFooter />
      <Footer />
    </div>
  );
}
