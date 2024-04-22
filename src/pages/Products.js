// Locations.js
import React from "react";
import Basket from "../images/Basket.jpg";
import Fruits from "../images/Fruits.jpg";
import M_Frits from "../images/M_Fruits.jpg";
import "../Styles/Location.css";

function Products() {
  return (

    <div className='Homepage-content'>
                    <h1>Get a variaty of products </h1>
                    <div className="locations">
      <div className="location" style={{display:'flex', alignItems:'center'}}>
        <img src={Basket} alt="B" className="actionImage" />
        {/* <p>some text</p> */}
      </div>
      <div className="location">
        <img src={Fruits} alt="F" className="actionImage"  />
      </div>
      <div className="location">
        <img src={M_Frits} alt="M_F" className="actionImage" />
      </div>
    </div>
    </div>
  );
}

export default Products;
