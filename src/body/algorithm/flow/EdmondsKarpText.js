import {Context, Node} from "react-mathjax2";
import React from "react";

const firstPart = (
    <div>
        <p>
            We can use the Edmonds-Karp algorithm for finding the maximum flow from a source to a sink node in a given
            graph G.
            To be able to perform this calculation, each edge E of G is assigned a capacity value. This capacity
            indicates how much
            flow we can pass through the edge.</p>
        <p>
            Placeholder-text
        </p>
    </div>);

const EdmondsKarpsText = () => {
    return (
        <div>
            <Context input="tex">
                <div>
                    {firstPart}
                </div>
            </Context>
        </div>
    );
};

export default EdmondsKarpsText;