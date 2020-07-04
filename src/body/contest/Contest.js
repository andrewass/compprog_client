import React from "react";
import codeforcesIcon from "../../images/codeforces.png";

const Contest = ({contest}) => {
    return (
        <div>
            <img src={codeforcesIcon} alt="The Codeforces icon"/>
            <p>{contest.contestName}</p>
            <p>Starting {contest.startTime}</p>
        </div>);
}

export default Contest;