import React from "react";
import "../frontend/permissions.css";

function Permissions() {
  function addPermission() {
    var entity = document.getElementById("entity").value;
    var username = document.getElementById("username").value;
    var permissions = document
      .getElementById("permissions")
      .value.split(",")
      .map((item) => item.trim());

    console.log(
      "Adding permissions for " +
        entity +
        ": " +
        permissions +
        " to user: " +
        username,
    );
  }

  function removePermission() {
    var entity = document.getElementById("entity").value;
    var username = document.getElementById("username").value;
    var permissions = document
      .getElementById("permissions")
      .value.split(",")
      .map((item) => item.trim());

    console.log(
      "Removing permissions for " +
        entity +
        ": " +
        permissions +
        " from user: " +
        username,
    );
  }

  function changePermissions() {
    var entity = document.getElementById("entity").value;
    var username = document.getElementById("username").value;
    var permissions = document
      .getElementById("permissions")
      .value.split(",")
      .map((item) => item.trim());

    console.log(
      "Changing permissions for " +
        entity +
        ": " +
        permissions +
        " for user: " +
        username,
    );
  }

  return (
    <div class="container">
      <h2>Permission Management</h2>
      <label for="entity">Select Entity:</label>
      <select id="entity">
        <option value="employee">Employee</option>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      <label for="username">Username:</label>
      <input type="text" id="username" placeholder="Enter username" />
      <label for="permissions">Permissions:</label>
      <input type="text" id="permissions" placeholder="Enter permissions" />
      <button onClick={addPermission}>Add</button>
      <button onClick={removePermission}>Remove</button>
      <button onclick={changePermissions}>Change Permissions</button>
    </div>
  );
}

export default Permissions;
