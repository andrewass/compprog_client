import React from "react";
import Authentication from "./Authentication";
import {NavLink} from "react-router-dom";


const Header = ({signedIn, setSignedIn}) => {
    return (
        <div>
            <div className="logo">CompProg Client</div>
            <nav>
                <NavLink to="/contests" className="link">Contests</NavLink>
                <NavLink to="/problems" className="link">Problems</NavLink>
                <NavLink to="/algorithms" className="link">Algorithms</NavLink>
            </nav>
            <Authentication signedIn={signedIn} setSignedIn={setSignedIn}/>
        </div>
    );
}

export default Header;
