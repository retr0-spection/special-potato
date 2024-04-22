import React from "react";
import Homepage from "./Homepage";
import Navigator from '../Access/Navigator';
import Features from '../pages/Features';
import Footer from "./Footer";
import Locations from "../pages/Location";
import Products from "./Products";
import '../App.css';


function Home() {
    return (
        <>
            <div >
             <Navigator/>
             <Homepage/>
             {/* <Features/> */}
             <Products/>
             <Locations/>
             <Footer/>
            </div>
        </>
    );
}

export default Home;
