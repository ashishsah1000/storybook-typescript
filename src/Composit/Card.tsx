import React from "react";
import { EnumType } from "typescript";

enum color {
    green = "darkgreen",
    blue = "dodgerblue"
}
type data = {
    title?:string,
    backgroundColor : string,
    theme: color
}


const Card = ({title,backgroundColor,...other}:data)=>{
return(
    <div>{}</div>
)
}

export default Card;