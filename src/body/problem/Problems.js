import React, {useEffect, useState} from "react";
import ProblemList from "./ProblemList";
import {getSolvedProblems} from "../../service/problemService";

const Problems = () => {

    const [solvedProblems, setSolvedProblems] = useState(new Set());

    const fetchSolvedProblems = (username) => {
        getSolvedProblems(username)
            .then(response => setSolvedProblems(new Set(response.data)))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        let username = localStorage.getItem("username");
        if (username) {
            fetchSolvedProblems(username);
        }
    }, []);

    return (
        <div className="problems">
            <ProblemList solvedProblems={solvedProblems}/>
        </div>
    );
};

export default Problems;