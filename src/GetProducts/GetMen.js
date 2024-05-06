import React from "react";
import Return from "../Arrange/Return";
import AssignMen from "./AssignMen";


function GetMen({ searchTerm }) {
  const filteredMen = searchTerm
    ? AssignMen.filter(product =>
        product.Search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : AssignMen;
  return (
    <div>
      <h1> MEN</h1>
      {Return(filteredMen)}
    </div>
  );
}

export default GetMen;
