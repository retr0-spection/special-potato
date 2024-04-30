import React, { useState } from "react";
import "../Styles/Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  const [hoveredMenu, setHoveredMenu] = useState(""); // Initialize hoveredMenu state with an empty string

  return (
    <div className="categories">
      <div className="choose">
        <Link
          to="/Men"
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
          to="/Woman"
          onMouseEnter={() => {
            setHoveredMenu("Woman");
          }}
          onMouseLeave={() => {
            setHoveredMenu("");
          }}
        >
          Woman{hoveredMenu === "Woman" && <hr />} 
        </Link>
        <Link
          to="/Kids"
          onMouseEnter={() => {
            setHoveredMenu("Kids");
          }}
          onMouseLeave={() => {
            setHoveredMenu("");
          }}
        >
          Kids{hoveredMenu === "Kids" && <hr />} 
        </Link>
      </div>
    </div>
  );
}

export default Categories;
