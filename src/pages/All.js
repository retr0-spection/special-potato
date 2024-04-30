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
import GetEverything from "./GetEverything";



function  All() {
    return (
            <div >
                <Navigator2/>
                <Categories/>
             <GetEverything/>
             <Footer/>
            </div>
        
    );
}

export default All;
