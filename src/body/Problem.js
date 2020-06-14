import React from "react";
import codeforcesIcon from "../images/codeforces.png";
import greenCheckMark from "../images/green-check-mark.png";
import styled from "styled-components";

const ProblemRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Problem = ({problem}) => {
    return(
        <ProblemRow>
            <img src={codeforcesIcon} alt="The Codeforces icon"/>
            <a href={problem.problemUrl} target="_blank" rel="noopener noreferrer" >{problem.problemName}</a>
            <img src={greenCheckMark} alt="A green checkmark"/>
        </ProblemRow>)
}

export default Problem;