import React from "react";
import "../Styles/Carting.css";
import Cart_cross from "../images/cart_cross_icon.png";
import useStore from "../zustand/store"; 
import remove_icon from "../images/cart_cross_icon.png"
import { Link, useParams } from "react-router-dom";
import Everything from "./Everything";
import Navigator2 from "../Access/Navigator2";
import Footer from "./Footer";

function Carting() {
  const { cart } = useStore(); 
  const { removeFromCart } = useStore();
  const cartSize = useStore((state) => state.cart?.length);
  return (
    <div>
      <Navigator2/>
    <div className="Carting">
      <div className="Carting-format">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {cart.map((item) => (
        <div className="Cart-item-format ">
        <div style={{
            position: "relative",
            width: "15vw",
            height: "40vh",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap:"140px",
          }}key={item.id}>
          <img className="product-icn" style={{
              width: "60%",
              height: "70%",
              objectFit: "cover",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }} src={item.image} alt={item.name} />
          <p>{item.name}</p> 
          <p>R{item.new_price}</p>
          <button className="check_item">{cartSize}</button>
          <p>R{item.new_price*cartSize}</p>
          <img className="remove-icn" src={remove_icon} onClick={()=>{removeFromCart(item.id)}} alt=""/>

        </div>
        <hr/>
        </div>
      ))}
      {cart.map((item) => (
      <div className="cart-down">
        <div className="cart-tot">
          <h5>Total</h5>
        <div>
        <div style={{display:" flex", flexDirection: "column"}} className="total-itm">
          <p2>Subtotal</p2>
          <p2>R{cartSize*item.new_price}</p2>
        </div>
        <hr/>
        <div className="total-itm">
          <p2>Delivery</p2>
          <p2>Free</p2>
        </div>
        <hr/>
        <div style={{display:" flex", flexDirection: "column"}} className="total-itm">
          <h8>Total</h8>
          <p2>R{cartSize*item.new_price}</p2>
        </div>
      </div>
      <Link to="/cart/checkout">
      <button>CHECKOUT</button>
      </Link>
    </div>
    </div>
    ))}
    </div>
    <Footer/>
    </div>
  );
}

export default Carting;
