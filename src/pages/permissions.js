import React, { useEffect } from "react";
import "../frontend/permissions.css";
import useStore from "../zustand/store";
import UserItem from "../components/admin/user/userItem";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Permissions() {
  const [users, setUsers] = React.useState([])
  const {profile} = useStore()
  const navigate = useNavigate()

  const getAllUsers = async () => {
    const config = {
      headers : {
        Authorization:'Bearer ' + profile.token
      }
    }

    const res = await API.USER.getAll(config)

    if (res.data){
      setUsers(res.data)
    }

  }

  useEffect(() => {
    getAllUsers()
  },[])

  


  return (
    <div class="container">
      <nav>
        <a href="/admin">Dashboard</a>
        <a href="/admin/order">Orders</a>
        <a href="/admin/stock">Stock</a>
        {/* <a href="/admin">Customers</a>
        <a href="/admin">Employees</a> */}
        <a href="/admin/management">Management</a>
      </nav>
    <section style={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center', }}>
      
    <h1>User Management</h1>

    {/* <button onClick={() => navigate('/admin/stock/add')} style={{display:'flex', alignItems:'center',padding:0, paddingLeft:'10px', paddingRight:'10px',marginRight:'10px'}}>
      <IoIosAdd style={{fontSize:24}}/>
      <p>Add New</p>
    </button> */}


    </section>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user, i) => <UserItem key={i} user={user} /> )}
      
      </tbody>
    </table>
  </div>
  );
}

export default Permissions;
