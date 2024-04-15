import React, { useState } from "react";
import Logo from "../images/Fit.JPG";
import { Link } from "react-router-dom";
import "../Styles/Navigator.css";

function Navigator() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="Navigator">
      <div className="left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="right">
        <div className={`menu ${menuVisible ? 'menu-visible' : 'menu-hidden'}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contacts</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuVisible ? <>&times;</> : <>&#9776;</>}
        </div>
      </div>
    </div>
  );
}

export default Navigator;
