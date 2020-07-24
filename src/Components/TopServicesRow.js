import React from "react";
import "../Assets/css/aos.css";
import "../Assets/css/top-services.css";
import happy from "../Assets/img/happy people.jpg";

export default function TopServicesRow() {
  return (
    <div className="top-services-component">
      <h2>בונים את ישראל ביחד</h2>
      <div className="top-services-grid">
        <div className="top-service-col">
          <h3>ניסיון עשיר וחתירה למצוינות</h3>
          <p data-aos="slide-right" data-aos-offset="75">
            אנו נהנים ממוניטין של יותר מ-30שנה, המבוסס על יסודות כלכליים איתנים
            וחוסן פיננסי. כיום בונה ומתכננת החברה פרויקטים חדשים בכ-14 ערים
            בפריסה ארצית, בהם עשרות פרויקטים למגורים, מסחר, תעשייה ומלונאות.
            החברה פעילה גם בחו"ל, במדינות רומניה וצ'כיה. מניותיה של החברה נסחרות
            בבורסה לניירות ערך בת"א מאז שנת 2004.
          </p>
        </div>
        <div className="top-service-col">
          <h3>הטכנולוגיה המובילה בעולם הבנייה</h3>

          <p data-aos="slide-right" data-aos-offset="75">
            אנו מתחייבים ליישם בכל הפרויקטים שלנו את עקרונות הבנייה והפיתוח
            באמצעות הטכנולוגיות המתקדמות ביותר, ועל פי תקן ISO 9002 אשר בבעלותה
            של החברה. בנוסף, לרשות לקוחותינו עומד צוות מקצועי של אדריכלים,
            מהנדסים ומנהלי פרויקטים במטרה להעניק את השירות הטוב ביותר.
          </p>
        </div>
        <div className="top-service-col">
          <h3>שירותיות ואנושיות כערך מוביל</h3>
          <p data-aos="slide-left" data-aos-offset="75">
            אנו יודעים שרכישת הבית שלכם היא אחת ההחלטות המשמעותיות בחייכם. לאורך
            כל הדרך נלווה אתכם החל מייעוץ מקיף והכוונה בתהליך הרכישה, דרך שלבי
            הבנייה השונים, מסירת מפתח הדירה, וגם אחרי הכניסה אל הבית החדש שלכם.
            כל זאת על מנת שתהיו שקטים ובטוחים בהחלטה שקיבלתם.
          </p>
        </div>
        <div className="top-service-content-row">
          <img src={happy} alt=""></img>

          <div className="top-service-content-row-text">
            <h3>הידע והמומחיות לבנות את מה שאתם צריכים</h3>
            <p data-aos="slide-up" data-aos-offset="75" style={{ zIndex: -1 }}>
              אנחנו במשפחת י.ח דמרי מבינים שרכישת דירה היא אחת ההחלטות המשמעותית
              בחייכם. לאורך כל הדרך נלווה אתכם החל מייעוץ מקיף והכוונה בתהליך
              הרכישה, דרך שלבי הבנייה השונים, מסירת מפתח הדירה, וגם אחרי הכניסה
              אליה. כל זאת על מנת שתהיו שקטים ובטוחים בהחלטה שקיבלתם.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
