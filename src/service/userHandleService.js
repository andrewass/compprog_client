import axios from "axios";

const URL = {
    GET_USER_HANDLES: "http://localhost:8080/userhandle/get-users-userhandles",
    ADD_USER_HANDLE: "http://localhost:8080/userhandle/add-userhandle"
};

function getUserHandles() {
    let username = localStorage.getItem("username");
    let token = localStorage.getItem("jwt");

    return axios({
        method: "post",
        url: URL.GET_USER_HANDLES,
        data: {username: username},
        headers: {Authorization: "Bearer " + token}
    });
}

const addUserHandle = (userHandle, platform) => {
    let username = localStorage.getItem("username");
    let token = localStorage.getItem("jwt");

    return axios({
        method: "post",
        url: URL.ADD_USER_HANDLE,
        data: {username, userHandle, platform},
        headers: {Authorization: "Bearer " + token}
    });
};

export default {
    getUserHandles, addUserHandle
};