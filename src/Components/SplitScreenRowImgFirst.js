import React from "react";
import const_image3 from "../Assets/img/con4.jpg";

export default function SplitScreenRow() {
  return (
    <div className="row">
      <div className="col">
        <div
          className="split-row-container "
          data-aos="fade-right"
          data-aos-offset="175"
        >
          <div className="split-row-col-image-container">
            <img className="split-row-col-image" src={const_image3} alt="" />
          </div>

          <div className="split-row-col-content">
            <h3> קבלן גמר</h3>
            <p>
              {" "}
              חברת קבוצת ס.א.ד בע"מ, קבלן בניין רשום ומורשה, מצעה שירותי גמר
              איכותיים וקפדניים וניסיון רב שנים בתעשייה
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
