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
            <NavLink to="/problems">
                <span onClick={signOutUser}>Sign Out</span>
            </NavLink>);
    } else {
        return (
            <div>
                <nav>
                    <NavLink to="/sign-in" className="link">Sign In</NavLink>
                    <NavLink to="/sign-up" className="link">Sign Up</NavLink>
                </nav>
            </div>
        );
    }
}

export default Authentication;