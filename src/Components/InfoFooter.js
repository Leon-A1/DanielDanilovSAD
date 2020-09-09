import React from "react";
import "../Assets/css/info-footer.css";
import facebook_logo from "../Assets/img/facebook_sad.png";
import instagram_logo from "../Assets/img/instagram_sad.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="row">
      <div className="col">
        <div className="info-footer">
          <div className="info-footer-div">
            <p className="adress">אשדוד</p>

            <img src={facebook_logo} alt=""></img>
            <img src={instagram_logo} alt=""></img>
            <ul>
              <li>
                <NavLink to="/getintouch">צור קשר</NavLink>
              </li>
              <li>
                <NavLink to="/companyprofile">פרופיל חברה</NavLink>
              </li>
              <li>
                <a href="/" exact>
                  עמוד הבית
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
