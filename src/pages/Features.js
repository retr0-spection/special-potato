import React from "react";
import FeatureItem from "./FeatureItem";
import '../Styles/Features.css'
import Navigator from "../Access/Navigator";


function Features() {
    return(
        <div className="features">
            
            <h1>Get the most delicious  meals</h1>
            <div className="Contain">
                <div className="wrap">
                    <ul className="item">
                        <FeatureItem src ="food1.jpg"
                        text="Finest veggies around"
                        label='Veggies'
                        path = '/login'/>
                        <FeatureItem src ="food2.jpg"
                        text="Veggies from all over"
                        label='Veggies'
                        path = '/login'/>
                        <FeatureItem src ="food3.jpg"
                        text="Burgers to die for"
                        label='Burgurs & Chips'
                        path = '/login'/>
                        <FeatureItem src ="food4.jpg"
                        text="Finest pasta"
                        label='Pasta'
                        path = '/login'/>
                         <FeatureItem src ="bread.jpg"
                        text="The softest bread"
                        label='Bread'
                        path = '/login'/>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features;