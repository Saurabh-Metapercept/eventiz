import React from 'react';
import { FaCalendarAlt, FaListUl } from 'react-icons/fa';

const JoinExpoSection = () => {
  return (
    <section className="join-expo-section">
      <div className="container">
        <span className="section-subtitle">Join Expo 2023</span>
        <h2 className="section-title">
          Join Us At 20th Hero Nada Expo <span>2023</span>
        </h2>

        <div className="info-boxes">
          <div className="info-box">
            <div className="icon"><FaCalendarAlt /></div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon"><FaListUl /></div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>

       
        </div>

    </section>
  );
};

export default JoinExpoSection;
