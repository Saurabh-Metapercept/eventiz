import React from 'react';
import { FaUsers, FaCog, FaFlag } from 'react-icons/fa';

const JoinEvent = () => {
  return (
    <section className="join-event-section">
      <div className="join-event-container">
        
        {/* Left Side: All cards inside a wrapper */}
        <div className="cards-wrapper">
          <div className="column">
            <div className="info-card">
              <FaUsers className="icon" />
              <h3>Event Conferences</h3>
              <p>Duis aute irure dolor in reprehenderit</p>
              <a href="#">Learn More <span>→</span></a>
            </div>
            <div className="info-card">
              <FaFlag className="icon" />
              <h3>Culture Leadership</h3>
              <p>Duis aute irure dolor in reprehenderit</p>
              <a href="#">Learn More <span>→</span></a>
            </div>
          </div>
          <div className="centered-card">
            <div className="info-card">
              <FaCog className="icon" />
              <h3>Digital Marketing</h3>
              <p>Duis aute irure dolor in reprehenderit</p>
              <a href="#">Learn More <span>→</span></a>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="join-text">
          <h2>
            Why You Should <br />
            <span className="highlight">Join The EVENTS?</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
          </p>
          <button className="join-btn">Join Event</button>
        </div>
      </div>
    </section>
  );
};

export default JoinEvent;
