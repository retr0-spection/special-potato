// Locations.js
import React from "react";
import CapeTownImage from "../images/Cape  Town.jpg";
import JoziImage from "../images/Jozi.jpg";
import PretoriaImage from "../images/Pretoria.jpg";
import "../Styles/Location.css";

function Locations() {
  return (

    <div className='Homepage-content'>
                    <h1>Deliveries from all over South Africa </h1>
                    <div className="locations">
    
      <div className="location">
        <img src={JoziImage} alt="Jozi" className="actionImage"/>
      </div>
      <div className="location">
        <img src={CapeTownImage} alt="Cape Town" className="actionImage"/>
      </div>
      <div className="location">
        <img src={PretoriaImage} alt="Pretoria" className="actionImage"/>
      </div>
    </div>
    </div>
  );
}

export default Locations;
