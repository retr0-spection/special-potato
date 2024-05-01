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
  const { cart, removeFromCart } = useStore(); 

  // Create a new array containing only unique items
  const uniqueItems = Array.from(new Set(cart.map(item => item.id))).map(id => {
    return cart.find(item => item.id === id);
  });

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
        
        {uniqueItems.map((item) => (
          <div className="Cart-item-format" key={item.id}>
            <div style={{
              position: "relative",
              width: "30vw",
              height: "45vh",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding:"0 20px",
              gap:"140px",
            }}>
              <img className="product-icn" style={{
                width: "60%",
                height: "70%",
                objectFit: "cover",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }} src={item.image} alt={item.name} />
              <p>{item.name}</p> 
              <p>R{item.new_price}</p>
              {/* Calculate the quantity based on occurrences in the cart */}
              <button className="check_item">{cart.filter(cartItem => cartItem.id === item.id).length}</button>
              {/* Display the total price of unique items */}
              <p>R{item.new_price * cart.filter(cartItem => cartItem.id === item.id).length}</p>
              <img className="remove-icn" src={remove_icon} onClick={() => removeFromCart(item.id)} alt=""/>
            </div>
            <hr/>
          </div>
        ))}
        
        <div className="cart-down">
          <div className="cart-tot">
            <h5>Total</h5>
            <div>
              <div style={{display:" flex", flexDirection: "column"}} className="total-itm">
                <p2>Subtotal</p2>
                {/* Calculate the total price based on unique items */}
                <p2>R{uniqueItems.reduce((total, item) => total + item.new_price * cart.filter(cartItem => cartItem.id === item.id).length, 0)}</p2>
              </div>
              <hr/>
              <div className="total-itm">
                <p2>Delivery</p2>
                <p2>Free</p2>
              </div>
              <hr/>
              <div style={{display:" flex", flexDirection: "column"}} className="total-itm">
                <h8>Total</h8>
                {/* Calculate the total price based on unique items */}
                <p2>R{uniqueItems.reduce((total, item) => total + item.new_price * cart.filter(cartItem => cartItem.id === item.id).length, 0)}</p2>
              </div>
            </div>
            <Link to="/cart/checkout">
              <button>CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Carting;
