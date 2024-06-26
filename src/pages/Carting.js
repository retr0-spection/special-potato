import React from "react";
import "../Styles/Carting.css";
import Cart_cross from "../images/cart_cross_icon.png";
import useStore from "../zustand/store"; 
import remove_icon from "../images/cart_cross_icon.png"
import { Link, useParams } from "react-router-dom";
import Everything from "./Everything";
import Navigator2 from "../Access/Navigator2";
import Footer from "./Footer";
import { FormLabel, OutlinedInput } from "@mui/material";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";

function Carting() {
  const { cart, removeFromCart,  } = useStore(); 
  const [quantity, setQuantity] = React.useState(0);


  // Create a new array containing only unique items
  const uniqueItems = Array.from(new Set(cart.map(item => item)))
  return (
    <section>
      <Navigator2/>
      <section className="Carting">
        <section>
          <p style={{fontWeight:'bold', fontSize:30}}>Shopping Cart</p>
        </section>
        <hr />
        
        {uniqueItems.map((item) => (
          <section className="Cart-item-format" key={item.product.id}>
            <section style={{
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
              }} src={item.product.image} alt={item.product.name} />
               <section>
              <p style={{fontWeight:'bold'}}>Name</p>
              <p>{item.product.name}</p> 
              </section>
              <section>
              <p style={{fontWeight:'bold'}}>Cost</p>
              <p>R{item.product.price}</p>
              </section>

              {/* Calculate the quantity based on occurrences in the cart */}
              {/* <section style={{}}>
              <FormLabel>Quantity</FormLabel>
              <section style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <CiCircleMinus style={{fontSize:30}}  onClick={() => setQuantity(q => q-1 >= 0 ? parseInt(q-1): parseInt(q))} />
              <OutlinedInput style={{marginLeft:'10px',marginRight:'10px', width:'50px', paddingTop:'10px'}} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              <FaCirclePlus style={{fontSize:30}} onClick={() => setQuantity(q => parseInt(q+1))}  />
              </section>
              </section> */}
              {/* Display the total price of unique items */}
              <section>
              <p style={{fontWeight:'bold'}}>Total</p>
              <p>R{item.product.price * item.quantity}</p>
              </section>
              <img className="remove-icn" src={remove_icon} onClick={() => removeFromCart(item.product.id)} alt=""/>
            </section>
            <hr/>
          </section>
        ))}
        
        <section className="cart-down">
          <section className="cart-tot">
            <h5>Total</h5>
            <section>
              <section style={{display:" flex", flexDirection: "column"}} className="total-itm">
                <p2>Subtotal</p2>
                {/* Calculate the total price based on unique items */}
                <p2>R{uniqueItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}</p2>
              </section>
              <hr/>
              <section className="total-itm">
                <p2>Delivery</p2>
                <p2>Free</p2>
              </section>
              <hr/>
              <section style={{display:" flex", flexDirection: "column"}} className="total-itm">
                <h8>Total</h8>
                {/* Calculate the total price based on unique items */}
                <p2>R{uniqueItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}</p2>
              </section>
            </section>
            <Link to="/cart/checkout">
              <button>CHECKOUT</button>
            </Link>
          </section>
        </section>
      </section>
      <Footer/>
    </section>
  );
}

export default Carting;
