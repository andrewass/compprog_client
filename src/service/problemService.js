import axios from "axios";

const TRENDING_PROBLEMS_URL = "http://localhost:8080/problem/popular-problems";

const SOLVED_PROBLEMS_URL = "http://localhost:8080/problem/solved-problems";

const ADD_RATING_URL = "http://localhost:8080/problem/add-problem-rating";

const getProblems = (page) => {
    return axios.get(TRENDING_PROBLEMS_URL, {
        params: {page, size: 15}
    });
};

const getSolvedProblems = (username) => {
    return axios.get(SOLVED_PROBLEMS_URL, {
        params: {username}
    });
};

const submitUserRating = (problemId, rating) => {
    let username = localStorage.getItem("username");
    let token = localStorage.getItem("jwt");

    return axios({
        method: "post",
        url: ADD_RATING_URL,
        data: {username, problemId, rating},
        headers: {Authorization: "Bearer " + token}
    });
}

export {getProblems, getSolvedProblems, submitUserRating};