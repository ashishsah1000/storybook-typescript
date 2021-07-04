import React from "react";
import "./Profile.css"

export  enum Sizes { 
    Small= "small",
    Medium="medium",
    Large="large"
}
type user = {
    Size?:Sizes,
    theme : string,
    url?:string
}


const Profile = ({Size,theme}:user)=>{

    return(
        <div className={`user-image`}>
            <img alt="asdf" className={`user-image-${Size} border-${theme}`} src="https://i.picsum.photos/id/19/536/354.jpg?hmac=wKkOuUxCQXaF5ZuA2VcsGln_mOoVneYNq6ElTGtKRrg" />
        </div>
    )
}

export default Profile;