import React from "react";
import Navigator2 from '../Access/Navigator2';
import Footer from "./Footer";
import '../App.css';
import '../Styles/Homepage.css';
import Categories from "../Access/Categories";
import GetProducts from "./GetProducts";
import GetProducts2 from "./GetProducts2";
import GetProducts3 from "./GetProducts3";


function  Products() {
    return (
        <>
            <div >
             <Navigator2/>
             <Categories/>
             <GetProducts/>
             <GetProducts2/>
             <GetProducts3/>
             <Footer/>
            </div>
        </>
    );
}

export default Products;
