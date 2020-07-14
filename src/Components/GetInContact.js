import React from "react";
import "../Assets/css/company-profile.css";
import Amap from "../Assets/img/ashdod-map.png";

export default function GetInContact() {
  return (
    <div class="Page-layout-div">
      <div className="company-profile-content">
        <h2>צרו קשר</h2>
        <p>קבוצת ס.א.ד בע"מ - 515861862</p>

        <p>קבלן רשום בסיווג 100 ג1 – מס' קבלן (רישיון): 33404</p>
        <p>טלפון- 053-8268640</p>
        <p>מייל – danieldvxl@gmail.com</p>
        <p>אשדוד</p>
        <img
          src={Amap}
          style={{
            width: "80%",
            maxWidth: 500,
            marginBottom: 40,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
          }}
          alt=""
        ></img>
      </div>
    </div>
  );
}
