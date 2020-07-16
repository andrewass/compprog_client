import {Context, Node} from "react-mathjax2";
import React from "react";

const firstPart = (
    <div>
        <p>Placeholder for text on segment tree</p>
    </div>
);

const SegmentTreeText = () => {
    return (
        <div className="textContent">
            <Context input="tex">
                <div>
                    {firstPart}
                </div>
            </Context>
        </div>
    );
};

export default SegmentTreeText;