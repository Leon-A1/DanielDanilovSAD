import React from "react";
import "../Assets/css/company-profile.css";
import Amap from "../Assets/img/ashdod-map.png";
import headerBackgroundImg from "../Assets/img/page-header-background.jpg";
import Footer from "../Components/InfoFooter";

export default function GetInContact() {
  return (
    <div class="Page-layout-div">
      <div className="page-header">
        <img className="header-image" src={headerBackgroundImg} alt=""></img>
      </div>
      <div className="company-profile-content">
        <div className="access-navbar">
          {" "}
          <a href="/">דף הבית</a> » <a href="/getintouch">צרו קשר</a>
        </div>
        <h2>צרו קשר</h2>
        <h3 style={{ padding: 10 }}>קבוצת ס.א.ד בע"מ</h3>
        <p>515861862</p>
        <p>קבלן רשום בסיווג 100 ג1 </p>
        <p> מס' קבלן (רישיון): 33404</p>
        <p>טלפון- 053-8268640</p>
        <p>danieldvxl@gmail.com</p>
        <p>אשדוד</p>
        <img
          src={Amap}
          style={{
            width: "80%",
            maxWidth: 500,
            marginTop: 30,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
          }}
          alt=""
        ></img>
      </div>
      <Footer></Footer>
    </div>
  );
}
