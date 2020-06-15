import React from "react";
import Problem from "./Problem";


const ProblemList = ({problems}) => {

    return (
        <div>
            {problems.map((problem) =>
                <Problem key={problem.id} problem={problem}/>)}
        </div>
    );
}

export default ProblemList;