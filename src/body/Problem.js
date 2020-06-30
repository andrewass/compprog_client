import React from "react";
import codeforcesIcon from "../images/codeforces.png";
import greenCheckMark from "../images/green-check-mark.png";

const Problem = ({problem}) => {
    return (
        <div>
            <img src={codeforcesIcon} alt="The Codeforces icon"/>
            <a href={problem.problemUrl} target="_blank" rel="noopener noreferrer">{problem.problemName}</a>
            <img src={greenCheckMark} alt="A green checkmark"/>
        </div>)
}

export default Problem;