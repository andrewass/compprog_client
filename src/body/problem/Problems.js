import React, {useEffect, useState} from "react";
import ProblemList from "./ProblemList";
import {getProblemTags} from "../../service/problemService";
import FilterBar from "./FilterBar";
import ProblemProvider from "./ProblemContext";

const Problems = () => {

    const [problemTags, setProblemTags] = useState([]);

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
                <FilterBar problemTags={problemTags}/>
                <ProblemList className="problemList"/>
            </ProblemProvider>
        </div>
    );
};


export default Problems;