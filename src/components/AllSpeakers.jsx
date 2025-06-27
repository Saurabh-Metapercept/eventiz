import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import img1 from "../css/images/img1.jpg";
import img2 from "../css/images/img2.jpg";
import img3 from "../css/images/img3.jpg";
import img4 from "../css/images/img4.jpg";
import img5 from "../css/images/img5.jpg";
import img6 from "../css/images/img6.jpg";

const speakers = [
  { img: img1, name: "Girl Student", title: "Analyst" },
  { img: img2, name: "Horke Pels", title: "Head Officer" },
  { img: img3, name: "Business Man", title: "CTO" },
  { img: img4, name: "Anna Grey", title: "Data Analyst", featured: true },
  { img: img5, name: "Leo Fox", title: "Developer" },
  { img: img6, name: "Chef Joel", title: "Chef Speaker" },
];

const AllSpeakers = () => {
  return (
    <section className="circular-speaker-section">
      <div className="circular-header">
        <p className="featured-text">Featured Speaker</p>
        <h2>
          Experience Speaker With <span className="highlight">KNOWLEDGE</span>
        </h2>
      </div>

      <div className="grid-layout">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className={`grid-speaker-card ${speaker.featured ? "featured" : ""}`}
          >
            <img src={speaker.img} alt={speaker.name} />
            <div className="info">
              <h4>{speaker.name}</h4>
              <p>{speaker.title}</p>
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="center-button">
        <button className="view-speakers-btn">View All Speakers</button>
      </div>
    </section>
  );
};

export default AllSpeakers;
