import React from "react";
import Return from "../Arrange/Return";
import AssignKids from "./AssignKids";


function GetKids({ searchTerm }) {
  const filteredKids = searchTerm
    ? AssignKids.filter(product =>
        product.Search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : AssignKids;
  return (
    <div>
      <h1> KIDS</h1>

      {Return(filteredKids)}
    </div>
  );
}

export default GetKids;
