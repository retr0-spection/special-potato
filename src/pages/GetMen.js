import React from "react";
import Return from "../Arrange/Return";
import AssignMen from "../pages/AssignMen";


function GetMen() {
  return (
    <div>
      <h1> MEN</h1>
      {Return(AssignMen)}
    </div>
  );
}

export default GetMen;
