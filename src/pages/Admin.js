import React from "react";
import "../frontend/admin.css";

function Admin() {
  return (
    <body>
      <header>
        <h1>E-spaza Admin Page </h1>
      </header>
      <nav>
        <a href="/admin">Dashboard</a>
        <a href="/admin">Orders</a>
        <a href="/admin/stock">Stock</a>
        <a href="/admin">Customers</a>
        <a href="/admin">Employees</a>
        <a href="/admin/management">Management</a>
      </nav>
      <section>
        <h2>Welcome to the Admin Page</h2>
        <p>This is where you can manage orders, stock, customers, and more!</p>
      </section>
    </body>
  );
}

export default Admin;
