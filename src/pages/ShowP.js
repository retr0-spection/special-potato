import ProductDetails from "./ProductDetails";
import ShowProduct from "./ShowProduct";
import ProductDetails from "./ProductDetails";
import React from "react";
import { useParams } from "react-router-dom";

function ShowP() {
  return (
    <>
    <ShowProduct/>
    <ProductDetails/>
    <ProductDetails/>
    </>
    
  );
}

export default ShowP;
