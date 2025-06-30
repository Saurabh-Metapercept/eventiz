import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-12-31T00:00:00"); // update as needed
    const difference = eventDate - new Date();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-section">
      <div className="countdown-wrapper">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className="countdown-box" key={unit}>
            <h2>{value}</h2>
            <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
