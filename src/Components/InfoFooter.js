import React from "react";
import "../Assets/css/info-footer.css";
// import facebook_logo from "../Assets/img/facebook_sad.png";
// import instagram_logo from "../Assets/img/instagram_sad.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="row">
      <div className="col">
        <div className="info-footer">
          <div className="info-footer-div">
            <p className="adress">אשדוד</p>

            <i
              class="fab fa-facebook-square"
              style={{ fontSize: "150%", padding: 10 }}
            ></i>
            <i
              class="fab fa-instagram"
              style={{ fontSize: "150%", padding: 10 }}
            ></i>

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
