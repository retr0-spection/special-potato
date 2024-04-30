import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon

function CartIcon({ itemCount, cartItems, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggleModal} style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
        <FaShoppingCart size={30} />
        {itemCount > 0 && <div style={{ position: 'absolute', top: -5, right: -10, background: 'red', borderRadius: '50%', width: 20, height: 20, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{itemCount}</div>}
      </div>
      {isOpen && (
        <div className="cart-modal" style={{ position: 'absolute', top: '50px', right: 0, background: 'white', border: '1px solid black', padding: '10px' }}>
          <h2>Cart</h2>
          <button onClick={handleToggleModal}>Close</button>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CartIcon;
