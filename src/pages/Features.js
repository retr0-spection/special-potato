import React from "react";
import FeatureItem from "./FeatureItem";
import '../Styles/Features.css'

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
                        path = '/Meal'/>
                        <FeatureItem src ="food2.jpg"
                        text="Veggies from all over"
                        label='Veggies'
                        path = '/Meal'/>
                        <FeatureItem src ="food3.jpg"
                        text="Burgers to die for"
                        label='Burgurs & Chips'
                        path = '/Meal'/>
                        <FeatureItem src ="food4.jpg"
                        text="Finest pasta"
                        label='Pasta'
                        path = '/Meal'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features;