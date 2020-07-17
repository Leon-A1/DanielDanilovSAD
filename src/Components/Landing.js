import React from "react";
import Home from "./Home";
import CompanyProfile from "./CompanyProfile";
import NavBar from "./navBar";
import GetInContact from "./GetInContact";
import { Switch, Route } from "react-router-dom";

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
