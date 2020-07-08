import axios from "axios";

const URL = {
    GET_USER_HANDLES: "http://localhost:8080/userhandle/get-userhandles",
    ADD_USER_HANDLE: "http://localhost:8080/userhandle/add-userhandle"
};

async function getUserHandles() {
    return await axios.post(URL.GET_USER_HANDLES, {
        token: localStorage.getItem("jwt")
    });
}

const addUserHandle = (userHandle, platform) => {
    let token = localStorage.getItem("jwt");
    axios.post(URL.ADD_USER_HANDLE, {
        userHandle, platform, token
    }).catch((error) => console.log(error));
}


export default {
    getUserHandles, addUserHandle
};