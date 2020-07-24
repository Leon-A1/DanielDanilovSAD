import React from "react";
import const_image2 from "../Assets/img/con2.jpg";
import "../Assets/css/header.css";

export default function Header() {
  return (
    <div className="row">
      <div className="col">
        <div className="col-content-third-row">
          <h1>קבוצת ס.א.ד בע"מ</h1>
        </div>
        <img className="third-back-img" src={const_image2} alt="" />
      </div>
    </div>
  );
}
