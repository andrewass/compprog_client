import React, {useEffect} from "react";
import Problem from "./Problem";
import {getProblemsByTags} from "../../service/problemService";


const ProblemList = ({page, setPage, pages, setPages, setProblemList, tagSet, problemList}) => {

    const getPreviousPage = () => {
        setPage(Math.max(page - 1, 0));
    };

    const getNextPage = () => {
        setPage(Math.min(page + 1, pages - 1));
    };

    const fetchProblems = () => {
        getProblemsByTags(page, Array.from(tagSet))
            .then(response => {
                setProblemList(response.data.problems);
                setPages(response.data.totalPages);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchProblems();
    }, [page]);

    return (
        <React.Fragment>
            {problemList.map((problem) =>
                <Problem key={problem.id} problem={problem}/>)}
            <button onClick={getPreviousPage}>Prev</button>
            <button onClick={getNextPage}>Next</button>
        </React.Fragment>
    );
};

export default ProblemList;
