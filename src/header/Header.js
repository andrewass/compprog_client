import React from "react";
import LowerBar from "./LowerBar";
import UpperBar from "./UpperBar";

const Header = (props) => {
    return (
        <div>
            <UpperBar setUserInfo={props.setUserInfo} isSignedIn={props.isSignedIn}/>
            <LowerBar/>
        </div>
    );
}

export default Header;
