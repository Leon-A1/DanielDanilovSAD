import React, { useRef, useState } from "react";
import axios from "axios";
import "../Assets/css/landing-page-form.css";

export default function LandingPageForm() {
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
    <div className="landing-page-form">
      <h4>
        ! נשמח לדבר ולעזור<br></br> השאירו את פרטיכם ונחזור אליכם בהקדם
      </h4>
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
      <p id="form-response-message">{Message}</p>
    </div>
  );
}
