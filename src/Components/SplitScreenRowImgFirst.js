import React from "react";
import const_image3 from "../Assets/img/con4.jpg";

export default function SplitScreenRow() {
  return (
    <div className="row">
      <div className="col">
        <div className="split-row-container">
          <div className="split-row-col-image-container">
            <img className="split-row-col-image" src={const_image3} alt="" />
          </div>

          <div className="split-row-col-content">
            אנו מתחייבים ליישם בכל הפרויקטים שלנו את עקרונות הבנייה והפיתוח
            באמצעות הטכנולוגיות המתקדמות ביותר, ועל פי תקן ISO 9002 אשר בבעלותה
            של החברה. בנוסף, לרשות לקוחותינו עומד צוות מקצועי של אדריכלים,
            מהנדסים ומנהלי פרויקטים במטרה להעניק את השירות הטוב ביותר
          </div>
        </div>
      </div>
    </div>
  );
}
