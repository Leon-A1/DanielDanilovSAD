import React from "react";
// import "../Assets/css/aos.css";
import Home from "./Home";
import CompanyProfile from "./CompanyProfile";
import NavBar from "./navBar";
import GetInContact from "./GetInContact";
import { Switch, Route } from "react-router-dom";
// import AOS from "aos";
// AOS.init();

function Landing() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/companyprofile" component={CompanyProfile} />
        <Route path="/getintouch" component={GetInContact} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default Landing;
