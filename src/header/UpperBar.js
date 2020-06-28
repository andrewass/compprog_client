import React from "react";
import Authentication from "./Authentication";


const UpperBar = () => {
    return (
        <nav>
            <div className="logo">CompProg Client</div>
            <Authentication/>
        </nav>
    );
};

export default UpperBar;
