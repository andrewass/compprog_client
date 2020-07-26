import React from "react";
import codeforcesIcon from "../../images/codeforces.png";
import greenCheckMark from "../../images/green-check-mark.png";

const Problem = ({problem, solvedProblems}) => {

    const hasSolvedProblem = (id) => {
        return solvedProblems.has(id);
    };

    return (
        <div>
            <img src={codeforcesIcon} className="codeforcesIcon" alt="The Codeforces icon"/>
            <a href={problem.problemUrl} target="_blank" rel="noopener noreferrer">{problem.problemName}</a>
            <img src={greenCheckMark} alt="A green checkmark"
                 style={{display: hasSolvedProblem(problem.id) ? "row" : "none"}}/>
        </div>
    );
};

export default Problem;