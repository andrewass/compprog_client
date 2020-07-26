import axios from "axios";

const TRENDING_PROBLEMS_URL = "http://localhost:8080/problem/popular-problems";

const SOLVED_PROBLEMS_URL = "http://localhost:8080/problem/solved-problems";

const getProblems = (page) => {
    return axios.get(TRENDING_PROBLEMS_URL, {
        params: {page, size: 15}
    });
};

const getSolvedProblems = (username) => {
    return axios.get(SOLVED_PROBLEMS_URL,{
        params: {username}
    });
};

export {getProblems, getSolvedProblems};