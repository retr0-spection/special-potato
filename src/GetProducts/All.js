import React from "react";
import Navigator2 from '../Access/Navigator2';
import Footer from "../pages/Footer";
import '../App.css';
import '../Styles/Homepage.css';
import Categories from "../Access/Categories";
import GetEverything from "./GetEverything";
import { useLocation } from "react-router-dom";


function  All() {
    const location = useLocation();
    const searchTerm = location.pathname.split("/search/")[1];
    return (
            <div >
                <Navigator2/>
                <Categories/>
             <GetEverything searchTerm={searchTerm}/>
             <Footer/>
            </div>
        
    );
}

export default All;
