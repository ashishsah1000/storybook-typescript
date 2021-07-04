import React from "react";
import "./image.css"
import { EnumType } from "typescript";

type image = {
    url :string,
    size?:string,
    other? : {}
}



const Image = ({url,size,...other}:image)=>{
    var background = {background:"url("+url+")",backgroundSize:"cover"}
return(
    <div className={`card card-image ${size}` } style={background}></div>
)
}

export default Image;