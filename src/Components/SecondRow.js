import React from "react";
import const_image2 from "../Assets/img/con4.jpeg";

export default function SecondRow() {
  return (
    <div className="row">
      <div className="col">
        <div
          style={{ textAlign: "right", padding: 60 }}
          className="col-content-third-row"
        >
          <h1 style={{ margin: 10 }}>קבוצת ס.א.ד</h1>
          <p style={{ margin: 10 }}>
            רשום ובעלת ותק רב בתחום, החברה עוסקת בתחום הבנייה, הפיתוח, שלד+גמר,
            קבלנות למרכיבים שונים בבניין, שיפוצים, הריסה, תשתיות ועוד
          </p>
          <p style={{ margin: 10 }}></p>
          <p style={{ margin: 10 }}>
            צוותי העבודה המנוסים והמקצועיים של קבוצת סעד בנייה כוללים בראש
            המערכת קבלני בניין מוסמכים ולצידם מכלול אנשי המקצוע הדרושים לתחום
            הבנייה.
          </p>
        </div>
        <img className="third-back-img" src={const_image2} alt="" />
      </div>
    </div>
  );
}
