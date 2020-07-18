import React from "react";
import const_image1 from "../Assets/img/con3.jpg";
import const_image4 from "../Assets/img/con.jpg";
import const_image6 from "../Assets/img/con6.jpg";
import "../Assets/css/aos.css";
import "../Assets/css/services.css";

export default function Services() {
  return (
    <div className="row">
      <div className="col">
        <div className="col-content-grid">
          <h1
            style={{
              margin: "auto",
              width: "100%",
              textAlign: "center",
              fontWeight: 900,
              padding: 20,
            }}
          >
            השירותים שלנו
          </h1>
          <br></br>
          <div
            data-aos="fade-up"
            data-aos-offset="350"
            className="col-content-partition"
          >
            <img
              class="col-content-partition-img"
              src={const_image1}
              alt=""
            ></img>
            <h3> קבלן שלד</h3>

            <p>
              בית החלומות שלכם, בבניית מבנה מסחרי, ציבורי וכל פרויקט בנייה, אתם
              יכולים להיות רגועים ובטוחים כי המבנה יהיה חזק, אמין ואיתן לאורך
              שנים רבות
            </p>
          </div>{" "}
          <div
            data-aos="fade-up"
            data-aos-offset="350"
            className="col-content-partition"
          >
            <img
              class="col-content-partition-img"
              src={const_image6}
              alt=""
            ></img>
            <h3> קבלן גמר</h3>
            <p>
              {" "}
              חברת קבוצת ס.א.ד בע"מ, קבלן בניין רשום ומורשה, מצעה שירותי גמר
              איכותיים וקפדניים וניסיון רב שנים בתעשייה
            </p>
          </div>{" "}
          <div
            data-aos="fade-up"
            data-aos-offset="350"
            className="col-content-partition"
          >
            <img
              class="col-content-partition-img"
              src={const_image4}
              alt=""
            ></img>
            <h3> קבלן שיפוצים</h3>
            <p>
              {" "}
              נמאס לכם מאיך שביתכם נראה? העיצוב בו מיושן ואתם מרגישים שאתם רוצים
              שינוי?קבוצת ס.א.ד בע"מ מבצעת את כל סוגי השיפוצים
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
