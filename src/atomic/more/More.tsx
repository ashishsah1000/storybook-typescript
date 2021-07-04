import React from "react";
import "./More.css"

type user = {
    text?:string
}
const More = ({text}:user)=>{

    return(
        <div className="info">
            <h2>{text}</h2>
        </div>
    )
}

export default More;