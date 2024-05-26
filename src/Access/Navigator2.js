import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navigator.css";
import useStore from "../zustand/store";
import { Popover, Typography } from "@mui/material";
import SearchBar from "../pages/SearchBar";
import icon1 from "../icons/cart_icon.png";

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
    <nav className="Navigator">

      <Link   to="/" style={{textDecorationLine:'none', marginLeft:20}}>
        <h1  style={{ color: "white" }}>
        IconicThreads
        </h1>
      </Link>
      <section className="right">
        <section
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
         {cartSize ? <section className="Arr">
            <Link to="/cart">
              <section className="cart-count">{cartSize}</section>
              <img src={icon1} alt="Bjj" />
            </Link>
          </section> : null}
        </section>

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
        {/* <section className="menu-icon" onClick={toggleMenu}>
          {menuVisible ? <>&times;</> : <>&#9776;</>}
        </section> */}
      </section>
    </nav>
  );
}

export default Navigator2;
