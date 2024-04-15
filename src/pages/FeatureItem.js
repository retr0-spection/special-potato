import React from "react";
import { Link } from "react-router-dom";

function FeatureItem(props){
    return(
        <>
        <li className='items'>
            <Link className= 'item1' to={props.path}>
                <figure className='item_pic' data-category={props.label}>
                    <img src={props.src} alt="Foodie" className="item_pic_1"/>
                </figure>
                <div className="item1_info">
                    <h2 className='item_text'>{props.text}</h2>
                </div>
            </Link>
        </li>
        </>

    );
}

export default FeatureItem;