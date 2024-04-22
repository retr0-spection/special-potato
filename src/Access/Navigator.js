import React, { useState } from "react";
import Logo from "../images/Things.jpg";
import { Link } from "react-router-dom";
import "../Styles/Navigator.css";
import useStore from "../zustand/store";

function Navigator() {
  const [menuVisible, setMenuVisible] = useState(false);
  const {profile, setProfile} = useStore()


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const logout = () => {
    setProfile(null)
  }

  return (
    <div className="Navigator">
      <div className="left">
        <h1 class="logo-text" style={{color:'white'}}>Espaza</h1>
      </div>
      <div className="right">
        <div className={`menu ${menuVisible ? "menu-visible" : "menu-hidden"}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contacts</Link>
         {profile ? <Link to="/login">Login</Link> :  <Link onClick={logout} to="/">Log out</Link>}
        </div>
        {/* <div className="menu-icon" onClick={toggleMenu}>
          {menuVisible ? <>&times;</> : <>&#9776;</>}
        </div> */}
      </div>
    </div>
  );
}

export default Navigator;
