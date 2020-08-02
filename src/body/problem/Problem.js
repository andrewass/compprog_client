import React from "react";
import codeforcesIcon from "../../images/codeforces.png";
import greenCheckMark from "../../images/green-check-mark.png";
import starIcon from "../../images/star.svg";
import "./problem.css";


const Problem = ({problem, solvedProblems}) => {

    const hasSolvedProblem = (id) => {
        return solvedProblems.has(id);
    };

    const starBar = () => {
        return (
            <div>
                {Array(6).fill(1).map((item,index) =>
                    <img key={index} className="starIcon" src={starIcon} alt="A star icon"/>)}
            </div>
        );
    }

    return (
        <div className="problemRow">
            <img src={codeforcesIcon} className="codeforcesIcon" alt="The Codeforces icon"/>
            <a href={problem.problemUrl} target="_blank" rel="noopener noreferrer">{problem.problemName}</a>
            <img src={greenCheckMark} alt="A green checkmark" className="greenCheckMark"
                 style={{display: hasSolvedProblem(problem.id) ? "row" : "none"}}/>
            {starBar()}
        </div>
    );
};

export default Problem;