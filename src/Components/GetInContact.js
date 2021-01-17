import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Aos from "aos";
import Amap from "../Assets/img/ashdod-map.png";
import headerBackgroundImg from "../Assets/img/page-header-background.jpg";
import Footer from "../Components/InfoFooter";
import "../Assets/css/aos.css";
import "../Assets/css/company-profile.css";
import "../Assets/css/leave-contact.css";
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
export default function GetInContact() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
    closeSlideMenu();
  }, []);
  const [Message, setMessage] = useState();

  function SubmitNewEmail() {
    console.log(NewEmailAdress.current.value);
    if (
      NewEmailAdress.current.value &&
      NewPhoneNumber.current.value &&
      NewName.current.value
    )
      axios
        .post("https://s-a-d-group-server.herokuapp.com/save_email", {
          email_adress: NewEmailAdress.current.value,
          phone_number: NewPhoneNumber.current.value,
          name: NewName.current.value,
        })
        .then((res) => {
          console.log(res);
          setMessage(" !פנייתכם התקבלה תודה");
        })
        .catch((e) => setMessage("אופס..משהו קרה, אנא נסו שנית"));
  }
  const NewEmailAdress = useRef();
  const NewName = useRef();
  const NewPhoneNumber = useRef();

  return (
    <div className="Page-layout-div" onClick={closeSlideMenu}>
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
          <h4>השאירו פרטים ונציגנו יחזרו אליכם בהקדם האפשרי</h4>
          <span>שם</span>
          <input ref={NewName} type="text" placeholder="John"></input>
          <span>אימייל</span>

          <input
            ref={NewEmailAdress}
            type="email"
            placeholder="John@gmail.com"
          ></input>
          <span>נייד</span>

          <input
            ref={NewPhoneNumber}
            type="text"
            placeholder="053-548-1212"
          ></input>
          <button action="#" onClick={SubmitNewEmail}>
            שלח
          </button>

          <p id="form-response-message">{Message}</p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
