import React from "react";
import "./Info.css"

type user = {
    text : string,
    username:string,
    background:string
}
const More = ({username,text,background}:user)=>{

    return(
        <div className={`infor font-white ${background}`}>
            <h4>{username}</h4>
            <span>{text}</span> 
        </div>
    )
}

export default More;