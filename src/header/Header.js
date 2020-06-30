import React from "react";
import Authentication from "./Authentication";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="logo">CompProg Client</div>
            <nav>
                <NavLink to="/submissions" className="link">Submissions</NavLink>
                <NavLink to="/problems" className="link">Problems</NavLink>
                <NavLink to="/algorithms" className="link">Algorithms</NavLink>
                <Authentication/>
            </nav>
        </div>
    );
}

export default Header;
