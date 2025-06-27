import React from "react";
import logo from "../css/images/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <img src={logo} alt="Eventiz Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
