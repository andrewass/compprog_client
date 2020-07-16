import React from "react";
import UserHandle from "./UserHandle";


const UserHandleList = ({userHandles}) => {

    return (
        <div>
            {userHandles.map((userHandle) =>
                <UserHandle key={userHandle.id} userHandle={userHandle}/>)}
        </div>
    );
};

export default UserHandleList;