import React from 'react';

// Import images properly
import img1 from '../css/images/11.jpg';
import img2 from '../css/images/12.jpg';
import img3 from '../css/images/13.jpg';
import img4 from '../css/images/14.jpg';
import img5 from '../css/images/15.jpg';
import img6 from '../css/images/16.jpg';

const GalleryPage = () => {
  return (
    <section className="gallery-sec">
      <div className="gallery-sec__content">
        <span className="gallery-sec__subtitle">Event Gallery</span>
        <h2 className="gallery-sec__title">
          Beautiful Snapshot Of Recent <span>EVENTS</span>
        </h2>
        <div className="gallery-sec__grid">
          <img src={img1} alt="Gallery 1" />
          <img src={img2} alt="Gallery 2" />
          <img src={img3} alt="Gallery 3" />
          <img src={img4} alt="Gallery 4" />
          <img src={img5} alt="Gallery 5" />
          <img src={img6} alt="Gallery 6" />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
