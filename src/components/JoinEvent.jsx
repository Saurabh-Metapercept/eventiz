import React from 'react';
import { FaUsers, FaCog, FaFlag } from 'react-icons/fa';

const JoinEvent = () => {
  return (
    <section className="join-event-wrapper">
      <div className="join-event-container">
        <div className="left-cards">
          <div className="event-card">
            <FaUsers className="event-icon" />
            <h3>Event Conferences</h3>
            <p>Duis aute irure dolor in reprehenderit</p>
            <a href="#">Learn More <span>→</span></a>
          </div>
          <div className="event-card">
            <FaFlag className="event-icon" />
            <h3>Culture Leadership</h3>
            <p>Duis aute irure dolor in reprehenderit</p>
            <a href="#">Learn More <span>→</span></a>
          </div>
        </div>

        <div className="center-card">
          <div className="event-card">
            <FaCog className="event-icon" />
            <h3>Digital Marketing</h3>
            <p>Duis aute irure dolor in reprehenderit</p>
            <a href="#">Learn More <span>→</span></a>
          </div>
        </div>

        <div className="join-text-content">
          <h2>Why You Should <br></br> <span>Join The EVENTS ?</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
          </p>
          <button>Join Event</button>
        </div>
      </div>
    </section>
  );
};

export default JoinEvent;
