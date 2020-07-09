import React from "react";
import codeforcesIcon from "../../images/codeforces.png";

const UserHandle = ({userHandle}) => {

    return (
        <div>
            <img src={codeforcesIcon} alt="The Codeforces icon"/>
            <span>{userHandle.userHandle}</span>
        </div>
    );
}

export default UserHandle;