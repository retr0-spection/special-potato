import React, { useEffect } from "react";
import "../frontend/stock.css";
import API from "../api";
import useStore from "../zustand/store";
import StockItem from "../components/admin/stock/stockItem";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Stock() {
  const { profile, setProfile } = useStore();
  const [stock, setStock] = React.useState([])
  const navigate = useNavigate()

  const getStock = async () => {
    console.log(profile)
    const config = {
      headers : {
        Authorization: 'Bearer ' + profile.token
      }
    }
    const res = await API.STOCK.get(config)
    if (res.data){
      setStock(res.data)
      console.log(res.data)
    }
  }

  useEffect(() => {
   getStock()
  },[])

  const [shirts, setShirts] = React.useState(20);
  const [jackets, setJackets] = React.useState(13);
  const [pants, setPants] = React.useState(53);
  const [hoodies, setHoodies] = React.useState(10);

  return (
    <body>
      <section class="container">
      <nav>
        <a href="/admin">Dashboard</a>
        <a href="/admin/order">Orders</a>
        <a href="/admin/stock">Stock</a>
        {/* <a href="/admin">Customers</a>
        <a href="/admin">Employees</a> */}
        <a href="/admin/management">Management</a>
      </nav>
        <section style={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center', }}>
        <h1>Stock Management</h1>

        <button onClick={() => navigate('/admin/stock/add')} style={{display:'flex', alignItems:'center',padding:0, paddingLeft:'10px', paddingRight:'10px',marginRight:'10px'}}>
          <IoIosAdd style={{fontSize:24}}/>
          <p>Add New</p>
        </button>


        </section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
          {stock.map((item, i) => <StockItem key={i} item={item} /> )}
          
          </tbody>
        </table>
      </section>
    </body>
  );
}

export default Stock;
