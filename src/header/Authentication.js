import React from "react";
import {NavLink} from "react-router-dom";

const EMPTY_USERNAME = "";
const EMPTY_JWT = "";

export default class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.signOutUser = this.signOutUser.bind(this)
    }

    signOutUser() {
        console.log("Signing out user")
        this.props.setUserInfo(EMPTY_USERNAME, EMPTY_JWT, false)
    }

    render() {
        if (this.props.isSignedIn) {
            return (
                <NavLink to="/problems">
                    <span onClick={this.signOutUser}>Sign Out</span>
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
}