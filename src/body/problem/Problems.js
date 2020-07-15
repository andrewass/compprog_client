import React, {useEffect, useState} from "react";
import axios from "axios";
import ProblemList from "./ProblemList";

const TRENDING_PROBLEMS_URL = "http://localhost:8080/problem/trending-problems";

const Problems = () => {

    const [problems, setProblems] = useState([]);

    useEffect(() => {
        axios.get(TRENDING_PROBLEMS_URL)
            .then((response) => setProblems(response.data)
                , (error) => console.log(error));
    }, []);

    return (
        <div className="problems">
            <ProblemList problems={problems}/>
        </div>
    );
};

export default Problems;