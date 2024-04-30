import React from "react";
import "../frontend/stock.css";



function Stock(){
    
<body>
    <div class="container">
        <h1>Stock Management</h1>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Quantity Available</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>T-shirt</td>
                    <td>
                        <select>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                        </select>
                    </td>
                    <td>20</td>
                </tr>

                <tr>
                    <td>Jackets</td>
                    <td>
                        <select>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                        </select>
                    </td>
                    <td>20</td>
                </tr>

                <tr>
                    <td>Pants</td>
                    <td>
                        <select>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                        </select>
                    </td>
                    <td>20</td>
                </tr>

                <tr>
                    <td>Hoodies</td>
                    <td>
                        <select>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                        </select>
                    </td>
                    <td>20</td>
                </tr>
            </tbody>
        </table>
        <button class="btn">Save Changes</button>
    </div>
</body>


}

export default Stock;