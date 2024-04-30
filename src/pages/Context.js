import React, { createContext, useState } from "react";
import Everything from "./Everything";

// Create a context
const CartContext = createContext();

// Function to initialize cart with default values
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < Everything.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function Context(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Function to update cartItems state
  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };

  // Function to add item to cart
  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    const updatedCartItems = { ...cartItems };
    if (updatedCartItems[productId] > 0) {
      updatedCartItems[productId] -= 1;
      updateCartItems(updatedCartItems);
    }
  };

  return (
    // Provide cartItems state, updateCartItems, addToCart, and removeFromCart functions to the child components
    <CartContext.Provider
      value={{ cartItems, updateCartItems, addToCart, removeFromCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { Context as CartContextProvider, CartContext };
