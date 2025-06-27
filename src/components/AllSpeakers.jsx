import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import img1 from "../css/images/img1.jpg";
import img2 from "../css/images/img2.jpg";
import img3 from "../css/images/img3.jpg";
import img4 from "../css/images/img4.jpg";
import img5 from "../css/images/img5.jpg";
import img6 from "../css/images/img6.jpg";

const AllSpeakers = () => {
  const speakers = [
    { img: img1, name: "Girl Student", title: "Analyst" },
    { img: img2, name: "Horke Pels", title: "Head Officer" },
    { img: img3, name: "Business Man", title: "CTO", position: "left" },
    { img: img4, name: "Anna Grey", title: "Data Analyst", featured: true, position: "right" },
    { img: img5, name: "Leo Fox", title: "Developer" },
    { img: img6, name: "Chef Joel", title: "Chef Speaker" },
  ];

  return (
    <section className="circular-speaker-section">
      <div className="circular-header">
        <p className="featured-text">Featured Speaker</p>
       <h2>
  Experience Speaker With<br />
  <span className="highlight">KNOWLEDGE</span>
</h2>

      </div>

      <div className="circular-grid-wrapper">
        <div className="side left">
          {speakers.filter(s => s.position === "left").map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} />
          ))}
        </div>

        <div className="center-grid">
          <div className="row">
            <SpeakerCard speaker={speakers[0]} />
            <SpeakerCard speaker={speakers[1]} />
          </div>
          <div className="row">
            <SpeakerCard speaker={speakers[4]} />
            <SpeakerCard speaker={speakers[5]} />
          </div>
        </div>

        <div className="side right">
          {speakers.filter(s => s.position === "right").map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} />
          ))}
        </div>
      </div>

      <div className="center-button">
        <button className="view-speakers-btn">View All Speakers</button>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }) => (
  <div className={`grid-speaker-card ${speaker.featured ? "featured" : ""}`}>
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
);

export default AllSpeakers;
