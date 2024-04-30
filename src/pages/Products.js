import React from "react";
import Homepage from "./Homepage";
import Navigator2 from '../Access/Navigator2';
import Features from '../pages/Features';
import Footer from "./Footer";
import Locations from "../pages/Location";
import '../App.css';
import useStore from "../zustand/store";
import Things_to_find from "./Things_to_find";
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
