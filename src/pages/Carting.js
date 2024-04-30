import React from "react";
import "../Styles/Carting.css";
import Cart_cross from "../images/cart_cross_icon.png";
import Everything from "./Everything";
import { useParams } from "react-router-dom";



function Carting() {
    let { id } = useParams();
    const product = Everything.find((item) => item.id == id);
    return (
        <div className="Carting">
            <div className="Carting-format">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
           
        </div>
    );
}

export default Carting;
