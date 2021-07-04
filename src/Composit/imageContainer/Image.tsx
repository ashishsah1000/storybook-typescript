import React from "react";
import "./Image.css"
import AtomicImage from "../../atomic/imageContainer/Image";
import Social from "../../atomic/social/Social";
import { Sizes } from "../../atomic/profilePic/Profile";
import Info from "../../atomic/info/Info"
import Profile from "../../atomic/profilePic/Profile"

type card = {
    size:Sizes
}
const Image = ({size}:card)=>{

    return(
        <div className={`image-icons ${size}`}>
               
               <AtomicImage url="https://i.picsum.photos/id/523/536/354.jpg?hmac=OaAEhfqLAFNi0-3hVrDaBqXIqz4JvfbXa38gNi6EN7c" size={size} />
            <div className="image-social">
                <Social />
            </div>
        </div>
    )
}

export default Image;