import React from "react";
import "./finalCard.css"
import { Sizes } from "../../atomic/profilePic/Profile";
import { themes } from "../../atomic/tiles/Tile";
import UpperLayer from  "../UpperLayer/Upper"


type card = {
    Psize:Sizes,
    Isize:Sizes,
    size:string,
    theme:themes
}
const Upper = ({Psize,Isize,theme,size}:card)=>{

    return(
        <div className={`final-card-${size}`}>
            <div className="card-upper-layer">
                < UpperLayer Psize={Psize} Isize={Isize} theme={theme} />
            </div>
             <div className={`back-${size}  ${theme}`} ></div>
            
           
        </div>
    )
}

export default Upper;