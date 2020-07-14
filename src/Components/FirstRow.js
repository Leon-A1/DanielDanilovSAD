import React from "react";
import const_image1 from "../Assets/img/con3.jpg";
import const_image4 from "../Assets/img/con5.jpg";
import const_image6 from "../Assets/img/con6.jpg";

export default function FirstRow() {
  return (
    <div className="row">
      <div className="col">
        <div className="col-content-grid">
          <h1
            style={{
              margin: "auto",
              width: "100%",
              textAlign: "center",
            }}
          >
            השירותים שלנו
          </h1>
          <br></br>
          <div className="col-content-partition">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              class="col-content-partition-img"
              src={const_image1}
              alt=""
            ></img>
            <h3> קבלן שלד</h3>

            <p data-aos="fade-up" data-aos-delay="500">
              קבלן שלד כאשר חברת פרג בנייה משמשת קבלן שלד עבורכם בבניית בית
              החלומות שלכם, בבניית מבנה מסחרי, ציבורי וכל פרויקט בנייה, אתם
              יכולים להיות רגועים ובטוחים כי המבנה יהיה חזק, אמין ואיתן לאורך
              שנים רבות.
            </p>
          </div>{" "}
          <div className="col-content-partition">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              class="col-content-partition-img"
              src={const_image6}
              alt=""
            ></img>
            <h3> קבלן גמר</h3>
            <p data-aos="fade-up" data-aos-delay="500">
              {" "}
              חברת פרג בנייה, קבלן בניין רשום ומורשה, מצעה שירותי גמר איכותיים
              וקפדניים וניסיון רב שנים בתעשייה.
            </p>
          </div>{" "}
          <div className="col-content-partition">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              class="col-content-partition-img"
              src={const_image4}
              alt=""
            ></img>
            <h3> קבלן שיפוצים</h3>
            <p data-aos="fade-up" data-aos-delay="500">
              {" "}
              נמאס לכם מאיך שביתכם נראה? העיצוב בו מיושן ואתם מרגישים שאתם רוצים
              שינוי? פרג בנייה מבצעת את כל סוגי השיפוצים לרבות החלפת ריצוף,
              שיפוץ חדרי אמבטיה וכו'
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
