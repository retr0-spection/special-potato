import React from "react";
import arrow from "../images/breadcrum_arrow.png"

function Breadcrum(props){
    const {product} = props;
    return(
        <div className="breadcrum">
            Home <img src={arrow} alt =""/> Shop <img src={arrow} alt=""/>{product.category} <img src={arrow} alt=""/> {product.name}
        </div>
    );
}