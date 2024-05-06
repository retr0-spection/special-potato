import React from "react";
import '../App.css';
import '../Styles/Homepage.css';
import GetKids from "./GetKids";
import Categories from "../Access/Categories";
import Navigator2 from "../Access/Navigator2";
import Footer from "../pages/Footer";
import { useLocation } from "react-router-dom";



function  Kids() {
    const location = useLocation();
    const searchTerm = location.pathname.split("/search/")[1];
    return (
            <div >
             <Navigator2/>
             <Categories/>
             <GetKids searchTerm={searchTerm}/>
             <Footer/>
            </div>
        
    );
}

export default Kids;
