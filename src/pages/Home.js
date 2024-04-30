import React from "react";
import Homepage from "./Homepage";
import Navigator from '../Access/Navigator';
import Features from '../pages/Features';
import Footer from "./Footer";
import Locations from "../pages/Location";
import '../App.css';
import useStore from "../zustand/store";
import Things_to_find from "./Things_to_find";


function Home() {
    return (
        <>
            <div >
             <Navigator/>
             <Homepage/>
             {/* <Features/> */}
             <Things_to_find/>
             <Locations/>
             <Footer/>
            </div>
        </>
    );
}

export default Home;
