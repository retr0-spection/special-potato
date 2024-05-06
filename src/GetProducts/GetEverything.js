import React from "react";
import Return from "../Arrange/Return";
import Everything from "../pages/Everything";


function GetEverything({searchTerm}) {
  const filteredEverything = searchTerm
    ? Everything.filter(product =>
        product.Search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : Everything;
  return (
    <div>
      <h1> All</h1>
      {Return(filteredEverything)}
    </div>
  );
}

export default GetEverything;
