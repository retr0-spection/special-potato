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
import GetKids from "./GetKids";



function  Kids() {
    return (
            <div >
                <Navigator2/>
                <Categories/>
             <GetKids/>
             <Footer/>
            </div>
        
    );
}

export default Kids;