import React from "react";
import Return from "../Arrange/Return";
import AssignWoman from "./AssignWoman";


function GetWoman({ searchTerm }) {
  const filteredWoman = searchTerm
    ? AssignWoman.filter(product =>
        product.Search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : AssignWoman;
  return (
    <div>
      <h1>Women</h1>
      {Return(filteredWoman)}
    </div>
  );
}

export default GetWoman;
