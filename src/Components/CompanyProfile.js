import React, { useEffect } from "react";
import "../Assets/css/company-profile.css";
import headerBackgroundImg from "../Assets/img/page-header-background.jpg";
import Footer from "../Components/InfoFooter";
// import Header from "../Components/Header";
function closeSlideMenu() {
  document.getElementById("home-small-nav-item").style.opacity = "0";
  document.getElementById("profile-small-nav-item").style.opacity = "0";
  document.getElementById("contact-small-nav-item").style.opacity = "0";

  document.getElementById("side-menu").style.width = "0";
  // document.getElementById("topNavbarItems").style.opacity = "100%";
  // document.getElementById("navBarLogo").style.opacity = "100%";
  document.getElementById("home-small-nav-item").style.transition = "200ms";
  document.getElementById("profile-small-nav-item").style.transition = "150ms";
  document.getElementById("contact-small-nav-item").style.transition = "100ms";
}
export default function CompanyProfile() {
  function hideSpinner() {
    document.getElementById("main-spinner").style.opacity = "0";
    document.getElementById("main-spinner").style.display = "none";
  }
  useEffect(() => {
    closeSlideMenu();
    window.scrollTo(0, 0);
    hideSpinner();
  }, []);
  return (
    <div class="Page-layout-div" onClick={closeSlideMenu}>
      {/* <div className="page-header">
        <img className="header-image" src={headerBackgroundImg} alt=""></img>
      </div> */}
      <div className="row">
        <div className="col">
          <div className="col-content-third-row-company-profile"></div>
          <img
            className="third-back-img-company-profile"
            src={headerBackgroundImg}
            alt=""
          />
        </div>
      </div>
      <div className="company-profile-content">
        <div className="access-navbar">
          <a href="/">דף הבית</a> » <a href="/companyprofile">פרופיל החברה</a>
        </div>
        <h2>פרופיל חברה</h2>
        <p>
          קבוצת ס.א.ד בע"מ, הינה חברת בנייה אשר מתמחה בבנייה רוויה (בתי דירות),
          בניה על גגות (כולל תמ"א 38), שיקום מבנים ובניית בתים צמודיי קרקע.
          קבוצת ס.א.ד בע"מ – הינה חברת בנייה אשר חרטה על דגלה מתן שרות אמין,
          זמין ומקצועי ללקוחותיה, תוך הבנת העיקרון כי לקוח מרוצה הינו נכס וערובה
          להצלחתה בתחום בו החברה מתמחה
        </p>

        <p>
          קבוצת ס.א.ד בע"מ מבצעת את כל עבודות הבנייה משלב השלד, דרך עבודות הגמר
          וכלה בעבודות הפיתוח. החברה מעסיקה עובדים מקצועיים ומנוסים אשר מלווים
          את החברה שנים רבות ואשר מוצאים בקבוצת ס.א.ד בע"מ בית פתוח. עובדים
          ותיקים ומנוסים אלו יודעים לתת את הנשמה בעבודה ומהווים חלק מרכזי בהצלחת
          החברה
        </p>
        <p>
          קבוצת ס.א.ד בע"מ מצוייה בפריסה ארצית רחבה, החברה בונה בין חדרה לגדרה
          כאשר משרדיה המרכזיים נמצאים באשדוד. בין לקוחותיה מצויים לקוחות מהמגזר
          הפרטי ומהמגזר הציבורי. החברה פועלת תוך שימת דגש על עבודה בצוותא עם
          הלקוח ולשביעות רצונו
        </p>
        <p>
          בקבוצת ס.א.ד בע"מ מאמינים כי השתדלות ומקצוענות ללא פשרות הינה נר לרגלי
          פעילות החברה. אם אתם מצויים בשלב של תכנון הבנייה, או לפני תחילת בנייה
          נשמח להעמיד לרשותכם את מיטב נסיוננו במתן ייעוץ, הכוונה והצעת מחיר ללא
          כל התחייבות מצידכם
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}
