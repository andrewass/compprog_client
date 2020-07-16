import React from "react";
import Authentication from "./Authentication";
import {NavLink} from "react-router-dom";
import "./header.css";
import logoIcon from "../images/algo.svg";

const Header = ({signedIn, setSignedIn}) => {
    return (
        <header>
            <div className="logo">
                <img className="logoIcon" src={logoIcon} alt="The Logo icon"/>
                <span className="logoTitle">Algos</span>
            </div>

            <div className="navigationBlock">
                <nav className="navigationBar">
                    <div className="dropdown-menu">
                        <button className="dropdown-button">Algorithms</button>
                        <div className="dropdown-items">
                            <NavLink to="/tree" className="link">Tree</NavLink>
                            <NavLink to="/network-flow" className="link">Network Flow</NavLink>
                        </div>
                    </div>
                    <NavLink to="/contests" className="link">Contests</NavLink>
                    <NavLink to="/problems" className="link">Problems</NavLink>
                    <Authentication signedIn={signedIn} setSignedIn={setSignedIn}/>
                </nav>
            </div>
        </header>
    );
};

export default Header;
