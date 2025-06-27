import React from "react";
import logo from "../css/images/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <img src={logo} alt="Eventiz Logo" className="logo" />
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>

            {/* PAGES Dropdown */}
            <li className="dropdown">
              <a href="#">PAGES ▾</a>
              <ul className="dropdown-menu">
                <li><a href="#">Event Schedule</a></li>
                <li><a href="#">Event Detail</a></li>
                <li><a href="#">Speaker Lists</a></li>
                <li><a href="#">Speaker Detail</a></li>
                <li><a href="#">Sponsors</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Faq</a></li>
                <li><a href="#">Coming Soon</a></li>
                <li><a href="#">Search Result</a></li>
                <li><a href="#">404 Error</a></li>
              </ul>
            </li>

            {/* SHOP Dropdown */}
            <li className="dropdown">
              <a href="#">SHOP ▾</a>
              <ul className="dropdown-menu">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Product Detail</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Checkout</a></li>
              </ul>
            </li>

            {/* NEWS Dropdown */}
            <li className="dropdown">
              <a href="#">NEWS ▾</a>
              <ul className="dropdown-menu">
                <li><a href="#">News Grid</a></li>
                <li><a href="#">News Detail</a></li>
              </ul>
            </li>

            <li><a href="#">CONTACT US</a></li>
          </ul>
        </nav>
        <button className="buy-ticket">BUY TICKET</button>
      </div>
    </header>
  );
};


export default Header;
