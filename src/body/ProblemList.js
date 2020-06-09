import React from "react";
import Problem from "./Problem";


const ProblemList = ({problems}) => {

    return (
        <div>
            {problems.map((problem) =>
                <Problem problem={problem}/>)}
        </div>
    );
}

export default ProblemList;