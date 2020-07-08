import React from "react";
import UserHandle from "./UserHandle";


const UserHandleList = ({userHandles}) => {

    return (
        <div>
            {userHandles.map((userHandle) =>
                <UserHandle key={userHandle.id} userhandle={userHandle}/>)}
        </div>
    );
}

export default UserHandleList;