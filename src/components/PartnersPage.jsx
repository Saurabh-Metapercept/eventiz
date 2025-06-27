import React from 'react';

// Import logos from your local folder
import logo1 from '../css/images/a.png';
import logo2 from '../css/images/b.png';
import logo3 from '../css/images/c.png';
import logo4 from '../css/images/d.png';
import logo5 from '../css/images/e.png';
import logo6 from '../css/images/f.png';
import logo7 from '../css/images/g.png';
import logo8 from '../css/images/h.png';

const PartnersPage = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <span className="partners-subtitle">Our Partners</span>
        <h2 className="partners-title">
          Our Perfect Partners & <span>SPONSORS</span>
        </h2>
        <div className="partners-logos">
          <img src={logo1} alt="Audiojungle 1" />
          <img src={logo2} alt="Audiojungle 2" />
          <img src={logo3} alt="Envato" />
          <img src={logo4} alt="Themeforest" />
          <img src={logo5} alt="Envato Market" />
          <img src={logo6} alt="Codecanyon" />
          <img src={logo7} alt="Themeforest 2" />
          <img src={logo8} alt="Envato 2" />
        </div>
      </div>
    </section>
  );
};

export default PartnersPage;
