import React from "react";
import "./Upper.css"
import { Sizes } from "../../atomic/profilePic/Profile";
import Info from "../../atomic/info/Info"
import Profile from "../../atomic/profilePic/Profile"
import { themes } from "../../atomic/tiles/Tile";
import More from  "../../atomic/more/More"
import ImageStories from "../imageContainer/Image";


type card = {
    Psize:Sizes,
    Isize:Sizes,
    theme:themes
}
const Upper = ({Psize,Isize,theme}:card)=>{

    return(
        <div className="upper-container">
            <div className="upper-image">
                 <ImageStories size={Isize} />
            </div>
            <div className="upper-details">
                <Profile url="https://i.picsum.photos/id/19/536/354.jpg?hmac=wKkOuUxCQXaF5ZuA2VcsGln_mOoVneYNq6ElTGtKRrg" Size={Psize} theme={theme} />
                <Info username="American" text="Manager" background="transparent" />
                <div className="upper-more">
                    <More />    
                </div>
            </div>

        </div>
    )
}

export default Upper;