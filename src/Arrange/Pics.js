import React from "react";
import "./Pics.css"
import { Link } from "react-router-dom";

function Pics(props){
    return(
        <div className="Pics">
            <Link to={`/${props.id}`}>
                <img  src={props.image} alt=""/>
                </Link>
                <p>{props.name}</p>
                <div className="P_Price">
                    <div className="P_Pricen">
                        R{props.new}
                    </div>
                    <div className="P_Priceo">
                        R{props.old}
                    </div>
                </div>
            
        </div>
    );
}

export default Pics;
