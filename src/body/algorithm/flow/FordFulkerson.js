import FordFulkersonText from "./FordFulkersonText";
import React from "react";
import FordFulkersonGraph from "./FordFulkersonGraph";

const FordFulkerson = () => {
    return (
        <React.Fragment>
            <FordFulkersonGraph/>
            <FordFulkersonText/>
        </React.Fragment>
    );
};

export default FordFulkerson;