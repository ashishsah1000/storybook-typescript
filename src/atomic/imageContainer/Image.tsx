import React from "react";
import "./image.css"
import { EnumType } from "typescript";

type image = {
    url :string,
    size:string,
    other : {}
}



const Image = ({url,...other}:image)=>{
return(
    <div className="card-image"></div>
)
}

export default Image;