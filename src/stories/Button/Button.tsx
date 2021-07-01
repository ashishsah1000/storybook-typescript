import React from 'react';
import "./Button.css"
import { useState } from "react";




const Button = ({title,background,children,...rest})=>{
    var [bcolor,setColor] = useState("")
    const changeColor = ()=>{
        setColor("clicked");
    }
    return(
        <button className={`button ${background} ${bcolor}`} {...rest} onClick={changeColor}>{title}</button>
    )
}
export default Button