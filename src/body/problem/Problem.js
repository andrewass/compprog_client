import React from "react";
import codeforcesIcon from "../../images/codeforces.png";
import greenCheckMark from "../../images/green-check-mark.png";
import starIcon from "../../images/star.svg";
import "./problem.css";

const problemCol = "problemCol";

const Problem = ({problem, solvedProblems}) => {

    const hasSolvedProblem = (id) => {
        return solvedProblems.has(id);
    };

    const starBar = () => {
        return (
            <div>
                {Array(6).fill(1).map((item, index) =>
                    <img key={index} className="starIcon" src={starIcon} alt="A star icon"/>)}
            </div>
        );
    }

    return (
        <div className="problemRow">
            <img src={codeforcesIcon} id="codeforcesIcon"
                 className="problemCol" alt="The Codeforces icon"/>
            <a href={problem.problemUrl} className={problemCol} target="_blank" rel="noopener noreferrer">
                {problem.problemName}
            </a>
            <img src={greenCheckMark} className={problemCol} alt="A green checkmark" id="greenCheckMark"
                 style={{display: hasSolvedProblem(problem.id) ? "row" : "none"}}/>
            {starBar()}
        </div>
    );
};

export default Problem;