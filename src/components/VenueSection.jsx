import React from 'react';

const VenueSection = () => {
  return (
    <section className="venue-section">
      <div className="venue-section__content">
        <div className="venue-section__text">
          <span className="venue-subtitle">Reach Us</span>
          <h2 className="venue-title">
            Get Direction To The Event <span>LOCATION</span>
          </h2>

          <div className="venue-info-box">
            <div className="icon-box">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-text">
              <h4>Galleria Mall Conference Center</h4>
              <p>19 By Pass NR, Bali, Indonesia, BC 22196</p>
            </div>
          </div>

          <div className="venue-info-box">
            <div className="icon-box">
              <i className="fas fa-microphone-alt"></i>
            </div>
            <div className="info-text">
              <h4>Reception Info</h4>
              <p>Phone Number: (+62) 1919-2022, (+62) 1919-2023</p>
            </div>
          </div>
        </div>

        <div className="venue-section__map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1580790507954!2d73.18790917505474!3d21.227728681107404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0212a3ff674c1%3A0xb2a602cf755c2a84!2sMangal%20Bazar!5e0!3m2!1sen!2sin!4v1656000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
