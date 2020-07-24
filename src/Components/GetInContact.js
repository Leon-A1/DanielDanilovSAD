import React, { useEffect } from "react";
import Aos from "aos";
import Amap from "../Assets/img/ashdod-map.png";
import headerBackgroundImg from "../Assets/img/page-header-background.jpg";
import Footer from "../Components/InfoFooter";
import "../Assets/css/aos.css";
import "../Assets/css/company-profile.css";
import "../Assets/css/leave-contact.css";

export default function GetInContact() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div class="Page-layout-div">
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
          {" "}
          <a href="/">דף הבית</a> » <a href="/getintouch">צרו קשר</a>
        </div>

        <h2>צרו קשר</h2>

        <h3 style={{ padding: 10 }}>קבוצת ס.א.ד בע"מ</h3>
        <p>515861862 ח.פ</p>
        <p>קבלן רשום בסיווג 100 ג1 </p>
        <p> מס' קבלן (רישיון): 33404</p>
        <a className="email-me" href="mailto:danieldvxl@gmail.com">
          <p>danieldvxl@gmail.com</p>
        </a>
        <p>אשדוד</p>
        <img
          src={Amap}
          style={{
            width: "100%",
            maxWidth: 500,
            maxHeight: 150,
            alignContent: "center",
            marginTop: 30,
            marginBottom: 30,
            borderRadius: 10,
          }}
          alt=""
        ></img>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="contact-form-div"
        >
          <form>
            <h4>השאירו פרטים ונציגנו יחזרו אליכם בהקדם האפשרי</h4>
            <span>שם</span>
            <input type="text" placeholder="John"></input>
            <span>אימייל</span>

            <input type="email" placeholder="John@gmail.com"></input>
            <span>נייד</span>

            <input type="text" placeholder="053-548-1212"></input>
            <button>שלח</button>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
