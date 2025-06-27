import React from 'react';
import img1 from '../css/images/busi-3.jpg';
import img2 from '../css/images/busi-1.jpg';
import img3 from '../css/images/busi-2.jpg';

const AboutEvent = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h4>Conference Organisation</h4>
          <h2>
            Conference, <br />
            Seminars & <br />
            <span className="highlight">EVENTS</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Quis ip suspendisse ultrices gravida. Risus commodo
          </p>
          <button className="discover-btn">Discover Now &gt;</button>
        </div>

        <div className="about-images">
          <img src={img1} alt="Main" />
          <div className="column">
            <img src={img2} alt="Top Right" />
            <img src={img3} alt="Bottom Right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
