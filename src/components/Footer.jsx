import React from 'react';
import logoWhite from '../css/images/logo-white.png'; // adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__column">
          <div className="footer__logo">
            <img src={logoWhite} alt="Eventiz Logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque iaculis molestie sagittis
            maecenas aenean eget.
          </p>
          <div className="footer__socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer__column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Ticket Pricing</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Get In Touch</h4>
          <p>1616 Broadway NY, New York United States</p>
          <p><i className="fas fa-phone"></i> 955 444 1245 <br /><span>For Information</span></p>
          <p><i className="fas fa-envelope"></i> info@eventiz.com <br /><span>Email Address</span></p>
        </div>

        <div className="footer__column">
          <h4>Subscribe To Our Newsletter</h4>
          <p>New subscribers get 10% off your next order</p>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Copyright ©2023 Eventiz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
