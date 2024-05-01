import React from "react";
import Return from "../Arrange/Return";
import AssignKids from "../pages/AssignKids";


function GetKids() {
  return (
    <div>
      <h1> KIDS</h1>

      {Return(AssignKids)}
    </div>
  );
}

export default GetKids;
