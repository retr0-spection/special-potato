import React from "react";
import "./Pics.css";
import { Link } from "react-router-dom";

function Item({product}) {
  return (
    <div className="Pics">
      <Link to={`/product/${product.itemId}`}>
        <img src={product.image} alt="" />
      </Link>
      <p>{product.name}</p>
      <div className="P_Price">
        <div className="P_Pricen">R{product.price}</div>
      </div>
    </div>
  );
}

export default Item;
