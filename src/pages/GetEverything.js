import React from "react";
import Return from "../Arrange/Return";
import Everything from "../pages/Everything";


function GetEverything() {
  return (
    <div>
      <h1> All</h1>
      {Return(Everything)}
    </div>
  );
}

export default GetEverything;
