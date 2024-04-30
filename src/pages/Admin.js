import React from "react";
import "../frontend/admin.css";


function Admin(){
    return(
    <body>
    <header>
        <h1>E-spaza Admin Page </h1>
    </header>
    <nav>
        <a href="#">Dashboard</a>
        <a href="#">Orders</a>
        <a href="stock.html">Stock</a>
        <a href="#">Customers</a>
        <a href="#">Employees</a>
        <a href="permissions.html">Management</a>





    </nav>
    <section>
        <h2>Welcome to the Admin Page</h2>
        <p>This is where you can manage orders, stock, customers, and more!</p>
    </section>
    </body>

 
    );
}

export default Admin;