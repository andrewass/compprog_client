import React from "react";
import codeforcesIcon from "../../images/codeforces.png";
import "./contest.css"

const Contest = ({contest}) => {
    return (
        <div className="contestBlock">
            <ul className="contest">
                <li>
                    <img className="codeforcesIcon" src={codeforcesIcon} alt="The Codeforces icon"/>
                </li>
                <li>
                    <p>{contest.contestName}</p>
                    <p>Starting {contest.startTime}</p>
                </li>
            </ul>
        </div>
    );
};

export default Contest;