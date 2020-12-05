import axios from "axios";

const TRENDING_PROBLEMS_URL = "http://localhost:8080/problem/popular-problems";

const SOLVED_PROBLEMS_URL = "http://localhost:8080/problem/solved-problems";

const ADD_RATING_URL = "http://localhost:8080/problem/add-problem-rating";

const PROBLEM_TAGS_URL = "http://localhost:8080/problem/all-problem-tags";

const getProblemTags = () => {
    return axios.get(PROBLEM_TAGS_URL);
}

const getProblems = (page) => {
    let username = localStorage.getItem("username");
    return axios.get(TRENDING_PROBLEMS_URL, {
        params: {page, size: 15, username}
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

export {
    getProblems,
    getSolvedProblems,
    getProblemTags,
    submitUserRating
};