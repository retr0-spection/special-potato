import React from "react";
import "../frontend/stock.css";

function Stock() {
  const [shirts, setShirts] = React.useState(20);
  const [jackets, setJackets] = React.useState(13);
  const [pants, setPants] = React.useState(53);
  const [hoodies, setHoodies] = React.useState(10);

  return (
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
              <td>
                <input
                  value={shirts}
                  onChange={(e) => setShirts(e.target.value)}
                  type="number"
                />
              </td>
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
              <td>
                <input
                  value={jackets}
                  onChange={(e) => setJackets(e.target.value)}
                  type="number"
                />
              </td>
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
              <td>
                <input
                  value={pants}
                  onChange={(e) => setPants(e.target.value)}
                  type="number"
                />
              </td>
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
              <td>
                <input
                  value={hoodies}
                  onChange={(e) => setHoodies(e.target.value)}
                  type="number"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn">Save Changes</button>
      </div>
    </body>
  );
}

export default Stock;
