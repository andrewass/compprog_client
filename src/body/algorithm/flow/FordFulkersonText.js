import {Context} from "react-mathjax2";
import React from "react";
import "../algorihtm.css"

const firstPart = (
    <React.Fragment>
        <p className="textBlock">
            We can use the Ford-Fulkerson method for finding the maximum flow from a source to a sink node in a given
            flow network, represented as a graph G. You may think of the edges as water pipes, where each node are connecting a set of pipes together.
            The capacity of each pipe could be defined as the amount of water we are able to push through the pipe per
            minute.
            Our goal would then be to calculate how much water we can send from the source node to the sink node per
            minute.

            To be able to perform this calculation, each edge E of G is assigned a capacity value. This capacity
            indicates how much flow we can pass through the edge.
        </p>
    </React.Fragment>
);


const secondPart = (
    <React.Fragment>
        <p className="textBlock">
            The concept of the method can be summed up as follow : As long as there exists a path from source to sink
            where each edge along the path has available capacity remaining, pass flow through this path. The flow passed
            along the path would be equal to the minimum available capacity amongst the edges on the path. Any such path
            is called an augmenting path. This step is repeated until there exists no path from
            source to sink with available capacity.
        </p>
    </React.Fragment>
);

const FordFulkersonText = () => {
    return (
        <div>
            <Context input="tex">
                <div>
                    {firstPart}
                    {secondPart}
                </div>
            </Context>
        </div>
    );
};

export default FordFulkersonText;