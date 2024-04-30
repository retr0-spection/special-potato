import React from "react";
import Return from "../Arrange/Return";
import AssignWoman from "../pages/AssignWoman";


function GetWoman() {
  return (
    <div>
      <h1>Women</h1>
      {Return(AssignWoman)}
    </div>
  );
}

export default GetWoman;
