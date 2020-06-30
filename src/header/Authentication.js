import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import authService from "../service/authService";


const Authentication = () => {

    const signOutUser = () => {
        authService.signOut();
    }

    if (localStorage.getItem("username")) {
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