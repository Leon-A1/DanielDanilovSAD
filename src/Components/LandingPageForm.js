import React, { useRef, useState } from "react";
import axios from "axios";
import "../Assets/css/landing-page-form.css";

export default function LandingPageForm() {
  const [Message, setMessage] = useState();
  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    return false;
  }
  function ValidatePhone(number) {
    if (/^[0-9-]*$/.test(number)) {
      return true;
    }
    return false;
  }

  function SubmitNewEmail() {
    console.log(NewEmailAdress.current.value);
    if (!ValidateEmail(NewEmailAdress.current.value)) {
      setMessage("כתובת אימייל לא תקינה");
      document.getElementById("lds-ring-id").style.display = "none";
    } else if (!ValidatePhone(NewPhoneNumber.current.value)) {
      setMessage("מספר לא תקין");
      document.getElementById("lds-ring-id").style.display = "none";
    } else if (
      NewEmailAdress.current.value &&
      NewPhoneNumber.current.value &&
      NewName.current.value
    ) {
      document.getElementById("lds-ring-id").style.display = "inline-block";
      axios
        .post("https://s-a-d-group-server.herokuapp.com/save_email", {
          email_adress: NewEmailAdress.current.value,
          phone_number: NewPhoneNumber.current.value,
          name: NewName.current.value,
        })
        .then((res) => {
          console.log(res);
          setMessage(" פנייתכם התקבלה תודה");
          document.getElementById("lds-ring-id").style.display = "none";
        })
        .catch((e) => setMessage("אופס..משהו קרה, אנא נסו שנית"));
    }
  }

  const NewEmailAdress = useRef();
  const NewName = useRef();
  const NewPhoneNumber = useRef();

  return (
    <div>
      <h4 className="service-provide-span">
        ! נשמח לדבר ולעזור<br></br> השאירו את פרטיכם ונחזור אליכם בהקדם
      </h4>
      <div className="landing-page-form">
        <span>שם</span>
        <input ref={NewName} type="text" placeholder="*שם"></input>
        <span>אימייל</span>
        <input ref={NewEmailAdress} type="email" placeholder="*מייל"></input>
        <span>נייד</span>
        <input ref={NewPhoneNumber} type="text" placeholder="*טלפון"></input>
        <input id="checkbox-id-desktop" type="checkbox"></input>
        <p>
          {" "}
          אני מסכים/מסכימה לקבל חומר פרסומי{" "}
          <input id="checkbox-id-mobile" type="checkbox"></input>
        </p>
        <button action="#" onClick={SubmitNewEmail}>
          שלח
        </button>
        <div id="lds-ring-id" className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p id="form-response-message">{Message}</p>
      </div>
    </div>
  );
}
