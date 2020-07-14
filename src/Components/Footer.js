import React, { useState } from "react";

export default function Footer() {
  const [showForm, setShowForm] = useState("none");
  function showFormToggle() {
    if (showForm === "none") {
      setShowForm("inline-block");
    } else {
      setShowForm("none");
    }
  }
  return (
    <div className="row">
      <div className="col">
        <div className="footer">
          <div className="hidden-footer-form" style={{ display: showForm }}>
            <form className="leave-contact-form">
              <input typpe="text" placeholder="שם מלא"></input>
              <input typpe="text" placeholder="דואל"></input>
              <input typpe="text" placeholder="טלפון"></input>
              <button
                onClick={showFormToggle}
                className="leave-contact-button-send"
              >
                שלח
              </button>
            </form>
            <button
              onClick={showFormToggle}
              className="close-hidden-footer-form-button"
            >
              סגור
            </button>
          </div>
          <div className="col-content">
            <button onClick={showFormToggle} className="leave-contact-button">
              תנו לי הצעת מחיר בחינם!
            </button>
            {/* <button >Get In Touch</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
