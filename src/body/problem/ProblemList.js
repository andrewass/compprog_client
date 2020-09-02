import React, {useEffect, useState} from "react";
import Problem from "./Problem";
import {getProblems} from "../../service/problemService";


const ProblemList = ({solvedProblems}) => {

    const [problems, setProblems] = useState([]);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(1);

    const getPreviousPage = () => {
        setPage(Math.max(page - 1, 0));
    };

    const getNextPage = () => {
        setPage(Math.min(page + 1, pages - 1));
    };

    const fetchProblems = () => {
        getProblems(page)
            .then(response => {
                setProblems(response.data.problems);
                setPages(response.data.totalPages);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchProblems();
    }, [page]);

    return (
        <div>
            {problems.map((problem) =>
                <Problem key={problem.id} problem={problem} solvedProblems={solvedProblems}/>)}
            <button onClick={getPreviousPage}>Prev</button>
            <button onClick={getNextPage}>Next</button>
        </div>
    );
};

export default ProblemList;