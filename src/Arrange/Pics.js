import React from "react";
import "./Pics.css";
import { Link } from "react-router-dom";

function Item({product}) {
  return (
    <section className="Pics">
      <Link to={`/product/${product.itemId}`}>
        <img src={product.image} alt="" />
      </Link>
      <p>{product.name}</p>
      <section className="P_Price">
        <section className="P_Pricen">R{product.price}</section>
      </section>
    </section>
  );
}

export default Item;
