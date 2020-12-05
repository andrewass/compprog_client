import React, {useEffect, useState} from "react";
import ProblemList from "./ProblemList";
import {getProblemTags, getSolvedProblems} from "../../service/problemService";
import FilterBar from "./FilterBar";

const Problems = () => {

    const [solvedProblems, setSolvedProblems] = useState(new Set());
    const [problemTags, setProblemTags] = useState([]);

    const fetchSolvedProblems = (username) => {
        getSolvedProblems(username)
            .then(response => setSolvedProblems(new Set(response.data.problems)))
            .catch(error => console.log(error))
    };

    const fetchProblemTags = () => {
        getProblemTags()
            .then(response => setProblemTags(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        let username = localStorage.getItem("username");
        if (username) {
            fetchSolvedProblems(username);
        }
        fetchProblemTags();
    }, []);

    return (
        <div className="problems">
            <FilterBar problemTags={problemTags}/>
            <ProblemList className="problemList" solvedProblems={solvedProblems}/>
        </div>
    );
};


export default Problems;