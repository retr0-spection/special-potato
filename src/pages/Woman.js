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
import GetWoman from "./GetWoman";



function  Woman() {
    return (
        <>
            <div >
             <Navigator2/>
             <Categories/>
             <GetWoman/>
             <Footer/>
            
            </div>
        </>
    );
}

export default Woman;
