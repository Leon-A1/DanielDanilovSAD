import React from "react";
// import const_image1 from "../Assets/img/con3.jpg";
import const_image4 from "../Assets/img/project.jpg";
// import const_image6 from "../Assets/img/con6.jpg";
// import project_1 from "../Assets/img/project_1.jpg";

import "../Assets/css/aos.css";
import "../Assets/css/projects.css";

export default function Projects() {
  return (
    <div className="row">
      <div className="col">
        <div className="projects-grid">
          <h1
            style={{
              margin: "auto",
              width: "100%",
              textAlign: "center",
              fontWeight: 900,
              padding: 20,
            }}
          >
            פרויקטים
          </h1>
          <br></br>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4> בניית וילה , הכלנית 1 </h4>
              <h3>רמת השרון</h3>
              <h5> אלי לוסטיגמן </h5>
              <h6>05086736371</h6>
            </div>
          </div>{" "}
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4> 2 עבודות גמרים כצנלסון</h4>
              <h3>גבעתיים</h3>

              <h5> עבד </h5>
              <h6>0543263318</h6>
            </div>
          </div>{" "}
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>וילה אבא אחימאיר 25</h4>
              <h3>פתח תקווה</h3>
              <h5> אלי לוסטיגמן </h5>
              <h6>0508673637</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>בניית וילה מיכאל וולך 2 </h4>
              <h3>קרית אונו</h3>
              <h5>שוקי יחזקאל </h5>
              <h6> 0522503586</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>בניין 28 יח"ד רחוב שוהם </h4>
              <h3>באר יעקב</h3>
              <h5> רפאל </h5>
              <h6>0525965522</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>בניית וילה סטרומה 13 ב</h4>
              <h3>נס ציונה</h3>
              <h5> אלי לוסטיגמן </h5>
              <h6>0508673637</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>תמ"א 38 </h4>
              <h3>פתח תקווה</h3>
              <h5> דורון </h5>
              <h6>0556678088</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>בניית וילות</h4>
              <h3>גבעת ברנר</h3>
              <h5>דן הנגבי </h5>
              <h6>0545962808</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>בניין 7 יח"ד </h4>
              <h3>יפו</h3>
              <h5>מיקי ביילי</h5>
              <h6>0526660969</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>בניית שלד 6 קומות 12 יח"ד </h4>
              <h3>בת-ים</h3>
              <h5>גאון חברה לבנין והשקעות</h5>
              {/* <h6>0526660969</h6> */}
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>שיחזור בית עתיק</h4>
              <h3>יפו</h3>
              <h5>ראובן גבעתי</h5>
              <h6>0523747474</h6>
            </div>
          </div>
          <div className="project-partition">
            <img src={const_image4} alt=""></img>
            <div className="text-area">
              <h4>תמ"א 38 </h4>
              <h3>רמת גן</h3>
              <h5>יואב קוטלר</h5>
              <h6>0547938452</h6>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
