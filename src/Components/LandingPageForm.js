import React from "react";
import "../Assets/css/landing-page-form.css";

export default function LandingPageForm() {
  return (
    <div className="landing-page-form">
      <h4>
        ! נשמח לדבר ולעזור<br></br> השאירו את פרטיכם ונחזור אליכם בהקדם
      </h4>
      <form>
        <span>שם</span>
        <input type="text" placeholder="*שם"></input>
        <span>אימייל</span>
        <input type="email" placeholder="*מייל"></input>
        <span>נייד</span>
        <input type="text" placeholder="*טלפון"></input>
        <input id="checkbox-id-desktop" type="checkbox"></input>
        <p>
          {" "}
          אני מסכים/מסכימה לקבל חומר פרסומי{" "}
          <input id="checkbox-id-mobile" type="checkbox"></input>
        </p>
        <button>שלח</button>
      </form>
    </div>
  );
}
