import React from "react";
import img1 from "../css/images/1.jpg";
import img2 from "../css/images/2.jpg";
import img3 from "../css/images/3.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

const scheduleData = [
  {
    time: "8:00 AM – 9:00 AM",
    title: "Opening Ceremony",
    subtitle: "Introduce The Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    location: "Exploration Hall",
    hall: "Hall 01",
    speaker: {
      name: "Jesus Holland",
      title: "Host & Speaker",
      image: img1,
    },
    bgColor: "#f94797",
  },
  {
    time: "9:00 AM – 10:00 AM",
    title: "Greetings Event",
    subtitle: "Greetings And Opening Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    location: "Exploration Hall",
    hall: "Hall 01",
    speaker: {
      name: "Ricky Malone",
      title: "Host & Speaker",
      image: img2,
    },
    bgColor: "#c43783",
  },
  {
    time: "10:00 AM – 10:30 AM",
    title: "Break And Coffee",
    subtitle: "Tea And Coffee Break",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    location: "Exploration Hall",
    hall: "Hall 01",
    speaker: {
      name: "Jesus Holland",
      title: "Host & Speaker",
      image: img3,
    },
    bgColor: "#f94797",
  },
];

const ScheduleSection = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        {/* Heading is outside the white box */}
        <div className="section-title">
          <h4>Event Conference Organisation</h4>
          <h2>
            List Of Planned Events <br />
            Thay Are <span className="highlight">EXPECTED</span>
          </h2>
        </div>

        {/* White box starts here */}
        <div className="schedule-wrapper">
          {scheduleData.map((event, index) => (
            <div className="schedule-card" key={index}>
              <div
                className="schedule-time"
                style={{ backgroundColor: event.bgColor }}
              >
                <p>{event.time}</p>
                <h4>{event.title}</h4>
              </div>

              <div className="schedule-info">
                <h3>{event.subtitle}</h3>
                <p>{event.description}</p>
                <div className="location">
                  <span>
                    <FaMapMarkerAlt /> {event.location}
                  </span>
                  <span>
                    <FaMapMarkerAlt /> {event.hall}
                  </span>
                </div>
              </div>

              <div className="speaker-info">
                <img src={event.speaker.image} alt={event.speaker.name} />
                <div>
                  <h4>{event.speaker.name}</h4>
                  <p>{event.speaker.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
