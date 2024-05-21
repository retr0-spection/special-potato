import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navigator.css";
import useStore from "../zustand/store";
import { Avatar, Button, Dialog, Popover, Typography } from "@mui/material";
import SearchBar from "../pages/SearchBar";
import icon1 from "../icons/cart_icon.png";
import Uni from "../images/Unisex.jpg";
import Everything from "../pages/Everything";

function Navigator2() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { profile, setProfile } = useStore();
  const anchorEl = React.useRef();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleClick = () => setOpen(true);

  const cartSize = useStore((state) => state.cart?.length);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const logout = () => {
    setProfile(null);
  };

  return (
    <div className="Navigator">
      <Link to="/" style={{textDecorationLine:'none'}}>
      <div>
        <h1 className="logo-text" style={{ color: "white" }}>
        IconicThreads
        </h1>
      </div>
      </Link>
      <div className="right">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className={`menu ${menuVisible ? "menu-visible" : "menu-hidden"}`}
        >
          <SearchBar />
          {!profile ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link onClick={logout} to="/">
              Log out
            </Link>
          )}
          {/* {profile ? (
            <Link to="/" aria-describedby={"profile"} onClick={handleClick}>
              <Avatar />
            </Link>
          ) : null} */}
         {cartSize ? <div className="Arr">
            <Link to="/cart">
              <div className="cart-count">{cartSize}</div>
              <img src={icon1} alt="Bjj" />
            </Link>
          </div> : null}
        </div>

        <Popover
          id={"profile"}
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

export default Navigator2;
