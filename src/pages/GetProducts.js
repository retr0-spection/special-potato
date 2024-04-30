import React from "react";
import Return from "../Arrange/Return";
import AssignProducts from "../pages/AssignProducts";


function GetProducts() {
  return (
    <div>
      <h1> TRENDING FOR MEN</h1>
      {Return(AssignProducts)}
    </div>
  );
}

export default GetProducts;
