import React from "react";
import "../frontend/checkout.css";
import "../frontend/stock.css";



function Checkout(){
    return(
        
<body>
    <div class="container">
        <h1>Checkout</h1>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>T-shirt</td>
                    <td>Medium</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
        <form class="checkout-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="phone_number">Phone Number:</label>
            <input type="number" id="phone_number" name="Phone number" required />

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required />

            <label for="city">City:</label>
            <input type="text" id="city" name="city" required />

            <label for="zip">ZIP Code:</label>
            <input type="text" id="zip" name="zip" required />

            <input type="submit" class="btn" value="Place Order" />
        </form>
    </div>
</body>


    );
}

export default Checkout;