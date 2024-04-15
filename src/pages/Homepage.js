import React from "react";
import '../Styles/Homepage.css';
import Navigator from '../Access/Navigator';
import Features from '../pages/Features';
import '../App.css';


function Homepage() {
    return (
        <>
            <Navigator />
            <div className='Homepage-container'>
                <div className='Homepage-content'>
                    <h1>LOOKING FOR SOME GOODIES</h1>
                    <p>Raties will set you up straight</p>
                    <Features />
                </div>
                <footer>
                    <p>&copy; 2024 e-SPAZA</p>
                </footer>
            </div>
        </>
    );
}

export default Homepage;
