import React from "react";
import "./Social.css"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"
import facebook from "../../images/facebook.svg"

const Social = ()=>{

    return(
        <div className="social-icons">
            <span> <i ><img src={facebook} alt="" /></i>
                            <i ><img src={instagram} alt="" /></i>
                            <i ><img src={twitter} alt="" /></i></span>
        </div>
    )
}

export default Social;