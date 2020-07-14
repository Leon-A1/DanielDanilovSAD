import React from "react";
import const_image3 from "../Assets/img/con4.jpg";

export default function SplitScreenRow() {
  return (
    <div className="row">
      <div className="col">
        <div className="split-row-container">
          <div
            data-aos-offset="200"
            data-aos="fade-right"
            data-aos-delay="500"
            className="split-row-col-image-container"
          >
            <img className="split-row-col-image" src={const_image3} alt="" />
          </div>

          <div
            data-aos-offset="200"
            data-aos="fade-left"
            data-aos-delay="500"
            className="split-row-col-content"
          >
            קבלני בניין בדרום ובמרכז לאורך השנים, חברת פרג בנייה פעלה במסגרת
            פרויקטים רבים, ברמות מורכבות שונות ועבור המגזר הפרטי והציבורי. אזורי
            הפעילות של החברה נרחבים במיוחד, מעניקים שירותי קבלני בניין בדרום כמו
            גם קבלני בניין במרכז. אנו מקיימים קשרים מקצועיים ושיתופי פעולה עם
            אדריכלים, חברות ייזום, חברות בנייה מסחריות וכן הלאה כך שאנשי המקצוע
            המיומנים שלנו מספקי מענה לכל לקוח ולכל פרויקט, במרכז ובדרום. החברה
            פועלת מבאר שבע, אך ביצעה פרויקטים בכלל אזור הדרום וכן פעילויות בנייה
            רבות, מכל הסוגים, באזורי המרכז עם התרחבות החברה בשנים האחרונות. קבלן
            בניין שדואג לכל – מתאמים בין כל אנשי המקצוע וקבלני המשנה בתור חברה
            מקצועית וותיקה לקבלנות בניין, פרג בנייה מבצעת פרויקטים רבים בתור
            הגורם האחראי לשלב הביצוע, הפתרון האידאלי לתהליך בנייה יעיל ומסודר
            ולראש שקט עבור הלקוחות.
          </div>
        </div>
      </div>
    </div>
  );
}
