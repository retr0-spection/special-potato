import React from "react";
import '../App.css';
import '../Styles/Homepage.css';
import GetWoman from "./GetWoman";
import Categories from "../Access/Categories";
import Navigator2 from "../Access/Navigator2";
import Footer from "../pages/Footer";
import { useLocation } from "react-router-dom";


function  Woman() {
    const location = useLocation();
    const searchTerm = location.pathname.split("/search/")[1];
    return (
        <>
            <div >
             <Navigator2/>
             <Categories/>
             <GetWoman searchTerm={searchTerm}/>
             <Footer/>
            
            </div>
        </>
    );
}

export default Woman;
