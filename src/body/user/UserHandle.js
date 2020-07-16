import React from "react";
import codeforcesIcon from "../../images/codeforces.png";
import "./user.css";

const UserHandle = ({userHandle}) => {

    return (
        <div className="userhandleBlock">
            <ul className="userhandle">
                <li>
                    <img className="codeforcesIcon" src={codeforcesIcon} alt="The Codeforces icon"/>
                </li>
                <li>
                    <span>{userHandle.userHandle}</span>
                </li>
            </ul>
        </div>
    );
};

export default UserHandle;