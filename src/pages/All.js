import React from "react";
import Navigator2 from '../Access/Navigator2';
import Footer from "./Footer";
import '../App.css';
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
