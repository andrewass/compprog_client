import React from "react";
import Submission from "./Submission";


const SubmissionList = ({submissions}) => {

    return (
        <div>
            {submissions.map((submission) =>
            <Submission submission={submission} />)}
        </div>
    );
}

export default SubmissionList;