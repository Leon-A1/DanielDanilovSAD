import React from "react";
import const_image3 from "../Assets/img/con.jpg";

export default function SplitScreenRow() {
  return (
    <div className="row">
      <div className="col">
        {/* <div className="split-row-container"> */}
        <div
          className="split-row-container-content-first"
          data-aos="fade-left"
          data-aos-offset="175"
        >
          {/* <div className="split-row-col-content-content-first"> */}
          <div className="split-row-col-content">
            <h3> קבלן שלד</h3>

            <p>
              בית החלומות שלכם, בבניית מבנה מסחרי, ציבורי וכל פרויקט בנייה, אתם
              יכולים להיות רגועים ובטוחים כי המבנה יהיה חזק, אמין ואיתן לאורך
              שנים רבות
            </p>
          </div>
          <div className="split-row-col-image-container">
            <img className="split-row-col-image" src={const_image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
