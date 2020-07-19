import React from "react";
import const_image from "../Assets/img/project.jpg";
import const_image2 from "../Assets/img/project2.jpg";
import const_image3 from "../Assets/img/project3.jpeg";
import const_image4 from "../Assets/img/project4.jpg";
import "../Assets/css/aos.css";
import "../Assets/css/projects.css";

export default function Projects() {
  return (
    <div className="row">
      <div className="col">
        <div className="projects-row">
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
            <div
              data-aos="fade-right"
              data-aos-offset="175"
              className="project-partition"
            >
              <img src={const_image} alt=""></img>
              <div className="text-area">
                <h4> בניית וילה , הכלנית 1 </h4>
                <h3>רמת השרון</h3>
                <br></br>
                {/* <h5> אלי לוסטיגמן </h5> */}
                {/* <h6>05086736371</h6> */}
              </div>
            </div>{" "}
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              className="project-partition"
            >
              <img src={const_image4} alt=""></img>
              <div className="text-area">
                <h4> 2 עבודות גמרים כצנלסון</h4>
                <h3>גבעתיים</h3>

                <br></br>
                {/* <h5> עבד </h5> */}
                {/* <h6>0543263318</h6> */}
              </div>
            </div>{" "}
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              className="project-partition"
            >
              <img src={const_image2} alt=""></img>
              <div className="text-area">
                <h4>וילה אבא אחימאיר 25</h4>
                <h3>פתח תקווה</h3>
                <br></br>
                {/* <h5> אלי לוסטיגמן </h5> */}
                {/* <h6>0508673637</h6> */}
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              className="project-partition"
            >
              <img src={const_image3} alt=""></img>
              <div className="text-area">
                <h4>בניית וילה מיכאל וולך 2 </h4>
                <h3>קרית אונו</h3>
                <br></br>
                {/* <h5>שוקי יחזקאל </h5> */}
                {/* <h6> 0522503586</h6> */}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
