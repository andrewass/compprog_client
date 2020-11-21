import axios from "axios";

const FETCH_REMOTE_SUBMISSIONS_URL = "http://localhost:8080/submission/fetch-remote-submissions";

const getRemoteSubmissions = (userHandle, platform) => {
    let username = localStorage.getItem("username");
    let token = localStorage.getItem("jwt");

    return axios({
        method: "post",
        url: FETCH_REMOTE_SUBMISSIONS_URL,
        data: {username, userHandle, platform},
        headers: {Authorization: "Bearer " + token}
    });
};

export {getRemoteSubmissions};