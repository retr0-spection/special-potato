import React from "react";
import Navigator2 from '../Access/Navigator2';
import Footer from "../pages/Footer";
import '../App.css';
import '../Styles/Homepage.css';
import Categories from "../Access/Categories";
import GetProducts from "./GetProducts";
import GetProducts2 from "./GetProducts2";
import GetProducts3 from "./GetProducts3";
import { useLocation } from "react-router-dom";


function  Products() {
    const location = useLocation();
    const searchTerm = location.pathname.split("/search/")[1];
    return (
        <>
            <div >
             <Navigator2/>
             <Categories/>
             <GetProducts searchTerm={searchTerm}/>
             <GetProducts2 searchTerm={searchTerm}/>
             <GetProducts3 searchTerm={searchTerm}/>
             <Footer/>
            </div>
        </>
    );
}

export default Products;
