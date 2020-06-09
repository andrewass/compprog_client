import React from "react";
import LowerBar from "./LowerBar";
import UpperBar from "./UpperBar";

class Header extends React.Component {

    render() {
        return (
            <div>
                <UpperBar/>
                <LowerBar/>
            </div>
        );
    }

}

export default Header;
