import React, {useEffect, useRef, useState} from "react";
import {csv, select, selectAll} from "d3";
import FordFulkersonText from "./flow/FordFulkersonText";
import graphNodes from "./maxflowgraph.csv";

const TestGraph = () => {

    const [nodes, setNodes] = useState([]);

    const svgRef = useRef();

    const populateNodes = () => {
        csv(graphNodes).then((nodes) => {
            setNodes(nodes.map((node) => {
                console.log(node.x);
                return (
                    <circle cx={node.x} r="34"/>
                );
            }));
        });
    };

    useEffect(() => {
        populateNodes();
        const svg = select(svgRef.current);

        svg.selectAll("circle")
            .attr("r","30");

    }, []);

    return (
        <div className="textContent">
            <svg ref={svgRef} />
            <FordFulkersonText/>
        </div>
    );
};

export default TestGraph;