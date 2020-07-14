import React from "react";
import const_image3 from "../Assets/img/con.jpg";

export default function SplitScreenRow() {
  return (
    <div className="row">
      <div className="col">
        <div className="split-row-container">
          <div
            data-aos-offset="200"
            data-aos="fade-right"
            data-aos-delay="500"
            className="split-row-col-content"
          >
            קבלני בניין בדרום ובמרכז לאורך השנים, חברת פרג בנייה פעלה במסגרת
            פרויקטים רבים, ברמות מורכבות שונות ועבור המגזר הפרטי והציבורי.
            השירות בפרויקטי בנייה מלאים מתבסס על קבלן בניין שדואג לכל, אנו
            מביאים לרוב צוותים מקצועיים הכוללים את כל אנשי המקצוע המרכזיים
            לעבודות הבנייה וכאשר יש צורך להכניס לאתר קבלני משנה למיניהם אנו
            מתאמים ודואגים שהכול מתנהל כשורה. כך לקוחותינו מקבלים ראש שקט
            שהבנייה מתנהלת על פי התכנון, אנו מתפקדים למשל גם בתור קבלן שלד וגמר
            אך גם בתור קבלן חשמל ואינסטלציה, קבלן עבודות גבס, מספקים שירותי
            ריצוף וכן הלאה. או קבלני בניין בנשמה, אוהבים את התחום ובאים אליו
            מתוך תשוקה אמיתית לאספקת פרויקטים באופן האיכותי ביותר ותוך הקשבה
            תמידית לצרכי הלקוח, אנו עוסקים בבנייה בפועל כבר שנים רבות ולא בייזום
            ושאר היבטים – כך שמוקד העניין שלנו הוא תמיד האינטרס של הלקוח.
          </div>
          <div
            className="split-row-col-image-container"
            data-aos-offset="200"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img className="split-row-col-image" src={const_image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
