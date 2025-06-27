import React from "react";
import speakerImg from "../css/images/man4.png";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>
              World Biggest 2023 <br />
              <span>CONFERENCE</span>
            </h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img src={speakerImg} alt="Speaker" className="hero-image" />
          </div>
        </div>
      </section>

    
    </>
  );
};

export default HeroSection;
