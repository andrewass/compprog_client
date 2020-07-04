import React from "react";
import Contest from "./Contest";


const ContestList = ({contests}) => {

    return (
        <div>
            {contests.map((contest) =>
                <Contest key={contest.id} contest={contest}/>)}
        </div>
    );
}

export default ContestList;