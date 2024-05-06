import React from "react";
import Return from "../Arrange/Return";
import AssignProducts3 from "./AssignProducts3";


function GetProducts3({ searchTerm }) {
  const filteredProducts3 = searchTerm
    ? AssignProducts3.filter(product =>
        product.Search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : AssignProducts3;
  return (
    <div>
      <h1> BRAND NEW STOCK FOR KIDS</h1>
      {Return(filteredProducts3)}
    </div>
  );
}

export default GetProducts3;
