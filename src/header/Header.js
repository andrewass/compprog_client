import React from "react";
import Authentication from "./Authentication";
import {NavLink} from "react-router-dom";
import "../header/style/header.css";
import menuIcon from "../images/menu.svg"

const Header = ({signedIn, setSignedIn}) => {
    return (
        <header>
            <div className="logo">CompProg Client</div>
            <nav className="navigation">
                <NavLink to="/contests" className="link">Contests</NavLink>
                <NavLink to="/problems" className="link">Problems</NavLink>
                <NavLink to="/algorithms" className="link">Algorithms</NavLink>
                <Authentication signedIn={signedIn} setSignedIn={setSignedIn}/>
            </nav>
        </header>
    );
}

export default Header;
