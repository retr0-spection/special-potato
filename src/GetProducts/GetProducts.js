import React from "react";
import Return from "../Arrange/Return";
import AssignProducts from "./AssignProducts";


function GetProducts({ searchTerm }) {
  const filteredProducts = searchTerm
    ? AssignProducts.filter(product =>
        product.Search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : AssignProducts;
  return (
    <div>
      <h1> TRENDING FOR MEN</h1>
      {Return(filteredProducts)} 
    </div>
  );
}

export default GetProducts;
