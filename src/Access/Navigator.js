import React, { useState } from "react";
import Logo from "../images/Things.jpg";
import { Link } from "react-router-dom";
import "../Styles/Navigator.css";
import useStore from "../zustand/store";
import { Avatar, Button, Dialog, Popover, Typography } from "@mui/material";

function Navigator() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { profile, setProfile } = useStore();
  const anchorEl = React.useRef()
  const [open, setOpen] = React.useState(false)

  console.log(profile)

  const handleClose = () => setOpen(false)


  const handleClick = () => setOpen(true)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const logout = () => {
    setProfile(null);
  };

  return (
    <div className="Navigator">
      <div className="left">
        <h1 class="logo-text" style={{ color: "white" }}>
          espaza
        </h1>
      </div>
      <div className="right">
        <div style={{display:'flex', alignItems:'center'}} className={`menu ${menuVisible ? "menu-visible" : "menu-hidden"}`}>
       
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contacts</Link>
          {!profile ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link onClick={logout} to="/">
              Log out
            </Link>
          )}
        {profile ? <Link to='/' aria-describedby={'profile'} onClick={handleClick}>
          <Avatar />
        </Link> : null}
        
        </div>
        <Popover
          id={'profile'}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Typography sx={{ p: 2 }}>Hi {profile?.name}</Typography>
        </Popover>
        {/* <div className="menu-icon" onClick={toggleMenu}>
          {menuVisible ? <>&times;</> : <>&#9776;</>}
        </div> */}
      </div>
    </div>
  );
}

export default Navigator;
