import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import API from "../../../api";
import useStore from "../../../zustand/store";

function OrderComponent() {
  const [orders, setOrders] = React.useState([])
  const {profile} = useStore()
  const navigate = useNavigate()

  const getAllOrders = async () => {
    const config = {
      headers : {
        Authorization:'Bearer ' + profile.token
      }
    }

    const res = await API.ORDER.getAll(config)

    if (res.data){
      setOrders(res.data)
      console.log(res.data)
    }

  }

  useEffect(() => {
    getAllOrders()
  },[])

  


  return (
    <div class="container">
    <section style={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center', }}>
    <h1>Order Management</h1>

    {/* <button onClick={() => navigate('/admin/stock/add')} style={{display:'flex', alignItems:'center',padding:0, paddingLeft:'10px', paddingRight:'10px',marginRight:'10px'}}>
      <IoIosAdd style={{fontSize:24}}/>
      <p>Add New</p>
    </button> */}


    </section>
    <table>
      <thead>
        <tr>
          <th>OrderID</th>
          <th>Products</th>
          <th>Customer</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => {
          return (<tr>
            <th>{order.id}</th>
            <th>{order.products.map((product) => {
              return <p>{product.name}</p>
            })}</th>
            <th>{order.customer.email}</th>
          </tr>)
        })}
      
      </tbody>
    </table>
  </div>
  );
}

export default OrderComponent;
