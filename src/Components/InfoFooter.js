import React from "react";
import "../Assets/css/info-footer.css";
import facebook_logo from "../Assets/img/facebook_sad.png";
import instagram_logo from "../Assets/img/instagram_sad.png";

export default function Footer() {
  return (
    <div className="row">
      <div className="col">
        <div className="info-footer">
          <div className="info-footer-div">
            <p className="adress">המלך יהוא 2 ,אשדוד</p>
            <img src={facebook_logo} alt=""></img>
            <img src={instagram_logo} alt=""></img>
            <ul>
              <li>
                <a href="/getintouch ">צור קשר</a>
              </li>
              <li>
                <a href="/companyprofile">פרופיל חברה</a>
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
