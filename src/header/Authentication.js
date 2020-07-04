import React from "react";
import authService from "../service/authService";
import {NavLink} from "react-router-dom";

const Authentication = ({signedIn, setSignedIn}) => {

    const signOutUser = () => {
        authService.signOut();
        setSignedIn(false);
    }

    if (signedIn) {
        return (
            <nav>
                <NavLink to="/user" className="link">User Settings</NavLink>
                <NavLink to="/problems">
                    <span onClick={signOutUser}>Sign Out</span>
                </NavLink>
            </nav>
        );
    } else {
        return (
            <nav>
                <NavLink to="/sign-in" className="link">Sign In</NavLink>
                <NavLink to="/sign-up" className="link">Sign Up</NavLink>
            </nav>
        );
    }
}

export default Authentication;