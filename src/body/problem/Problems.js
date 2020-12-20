import React, {useEffect, useState} from "react";
import ProblemList from "./ProblemList";
import {getProblemTags} from "../../service/problemService";
import FilterBar from "./FilterBar";
import ProblemProvider from "./ProblemContext";

const Problems = () => {

    const [problemTags, setProblemTags] = useState([]);
    const [problemList, setProblemList] = useState([]);
    const [tagSet, setTagSet] = useState(new Set());
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(0);

    const fetchProblemTags = () => {
        getProblemTags()
            .then(response => setProblemTags(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchProblemTags();
    }, []);

    return (
        <div className="problems">
            <ProblemProvider>
                <FilterBar problemTags={problemTags} setProblemList={setProblemList} setPages={setPages}
                           tagSet={tagSet} page={page} setPage={setPage}/>
                <ProblemList pages={pages} setPages={setPages} setProblemList={setProblemList} page={page}
                             setPage={setPage} tagSet={tagSet} problemList={problemList} className="problemList"/>
            </ProblemProvider>
        </div>
    );
};


export default Problems;