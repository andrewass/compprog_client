import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const EMPTY_USERNAME = "";
const EMPTY_JWT = "";

const Authentication = () => {

    const [signedIn,setSignedIn] = useState("false");

    const signOutUser = () => {
        console.log("Signing out user");
        localStorage.setItem("isSignedIn", "false");
        localStorage.setItem("username", EMPTY_USERNAME);
        localStorage.setItem("jwt", EMPTY_JWT);
        setSignedIn(localStorage.getItem("isSignedIn"));
    }

    if (localStorage.getItem("isSignedIn") === "true") {
        return (
            <NavLink to="/problems">
                <span onClick={signOutUser}>Sign Out</span>
            </NavLink>
        );
    } else {
        return (
            <React.Fragment>
                <NavLink to="/sign-in">Sign In</NavLink>
                <NavLink to="/sign-up">Sign Up</NavLink>
            </React.Fragment>
        );
    }
}

export default Authentication;