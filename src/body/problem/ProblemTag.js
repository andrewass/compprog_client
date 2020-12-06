import React from "react";
import "./problem.css";

const ProblemTag = ({tag}) => {

    return (
        <div className="problemTag">
            {tag.categoryTag}
        </div>
    );
};

export default ProblemTag;