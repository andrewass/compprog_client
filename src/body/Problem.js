import React from "react";
import codeforcesIcon from "../images/codeforces.png"
import styled from "styled-components";

const ProblemRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Problem = ({problem}) => {
    return(
        <ProblemRow>
            <img src={codeforcesIcon} />
            <p>{problem.problemName} </p>
        </ProblemRow>)
}

export default Problem;