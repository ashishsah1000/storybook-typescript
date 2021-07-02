import React from "react";
import "./tile.css"

export enum themes {
    primary = "light",
    secondary = "dark"
}
type data = {
    theme : themes,
    size : string,
    rest : {}
}
const Tile = ({theme,size,...rest}:data)=>{

    return(
        <div className={`card ${theme} ${size}`}>
        </div>
    )
}

export default Tile;