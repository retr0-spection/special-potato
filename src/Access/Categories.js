import React, { useState } from "react";
import "../Styles/Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  const [hoveredMenu, setHoveredMenu] = useState(""); // Initialize hoveredMenu state with an empty string

  return (
    <section className="categories">
      <section className="choose">
      <Link
          to="/"
          onMouseEnter={() => {
            setHoveredMenu("All");
          }}
          onMouseLeave={() => {
            setHoveredMenu("");
          }}
        >
          All{hoveredMenu === "All" && <hr />}
        </Link>
        <Link
          to="/category/male"
          onMouseEnter={() => {
            setHoveredMenu("Men");
          }}
          onMouseLeave={() => {
            setHoveredMenu("");
          }}
        >
          Men{hoveredMenu === "Men" && <hr />}
        </Link>
        <Link
          to="/category/female"
          onMouseEnter={() => {
            setHoveredMenu("Woman");
          }}
          onMouseLeave={() => {
            setHoveredMenu("");
          }}
        >
          Women{hoveredMenu === "Woman" && <hr />}
        </Link>
       
      </section>
    </section>
  );
}

export default Categories;
