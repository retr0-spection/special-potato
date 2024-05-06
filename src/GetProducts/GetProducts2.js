import React from "react";
import Return from "../Arrange/Return";
import AssignProducts2 from "./AssignProducts2";


function GetProducts2({ searchTerm }) {
  const filteredProducts2 = searchTerm
    ? AssignProducts2.filter(product =>
        product.Search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : AssignProducts2;
  return (
    <div>
      <h1> SALE FOR WOMEN</h1>
      {Return(filteredProducts2)}
    </div>
  );
}

export default GetProducts2;
