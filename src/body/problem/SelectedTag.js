import React from "react";
import "./problem.css";

const SelectedTag = ({removeTag, tag}) => {

    return (
        <span onClick={() => removeTag(tag)}>{tag}</span>
    );
};

export default SelectedTag;