import axios from "axios";

const TRENDING_PROBLEMS_URL = "http://localhost:8080/problem/popular-problems";

const TRENDING_PROBLEMS_BY_TAG_URL = "http://localhost:8080/problem/popular-problems-by-tag";

const ADD_RATING_URL = "http://localhost:8080/problem/add-problem-rating";

const PROBLEM_TAGS_URL = "http://localhost:8080/problem/all-problem-tags";

const getProblemTags = () => {
    return axios.get(PROBLEM_TAGS_URL);
};

const getProblems = (page) => {
    let username = localStorage.getItem("username");

    return axios.get(TRENDING_PROBLEMS_URL, {
        params: {page, size: 15, username}
    });
};

const getProblemsByTags = (page, categoryTags) => {
    let username = localStorage.getItem("username");

    return axios({
        method: "post",
        url: TRENDING_PROBLEMS_BY_TAG_URL,
        data: {username, page, categoryTags}
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
};

export {
    getProblems,
    getProblemsByTags,
    getProblemTags,
    submitUserRating
};