import React from "react";
import {NavLink} from "react-router-dom";

const LowerBar = () => {
    return (
        <nav>
            <NavLink to="/submissions" className="link">Submissions</NavLink>
            <NavLink to="/problems" className="link">Problems</NavLink>
            <NavLink to="/algorithms" className="link">Algorithms</NavLink>
        </nav>
    );
};

export default LowerBar;