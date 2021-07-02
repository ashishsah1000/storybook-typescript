import React from 'react';
import "./Button.css"
import { useState } from "react";

type data = {
    title: string,
    background : string,
    children :string
}


const Button = ({title,background,children,...rest}:data)=>{
    var [bcolor,setColor] = useState("")
    const changeColor = ()=>{
        setColor("clicked");
    }
    return(
        <button className={`button ${background} ${bcolor}`} {...rest} onClick={changeColor}>{title}</button>
    )
}
export default Button