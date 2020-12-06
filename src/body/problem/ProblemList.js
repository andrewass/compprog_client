import React, {useContext, useEffect} from "react";
import Problem from "./Problem";
import {getProblems} from "../../service/problemService";
import {ProblemContext} from "./ProblemContext";


const ProblemList = () => {

    const [context, setContext] = useContext(ProblemContext);
    const {page, problemList, pages} = context;

    const getPreviousPage = () => {
        setContext({
            page: Math.max(page - 1, 0),
            problemList: problemList,
            pages: pages
        })
    };

    const getNextPage = () => {
        setContext({
            page: Math.min(page + 1, pages - 1),
            problemList: problemList,
            pages: pages
        });
    };

    const fetchProblems = () => {
        getProblems(page)
            .then(response => {
                setContext({
                    problemList: response.data.problems,
                    page: page,
                    pages: response.data.totalPages
                });
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
