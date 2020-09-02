import React, {useEffect, useRef} from "react";
import {csv, select} from "d3";
import graphNodes from "../maxflowgraph.csv";
import graphEdges from "../maxflowedges.csv";
import {createEdges, createNodes} from "../GraphCreator";

const FordFulkersonGraph = () => {

    const svgRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);

        csv(graphNodes).then(async (response) => {
            await createNodes(response, svg);
            csv(graphEdges).then((response) => {
                createEdges(response, svg);
            });
        });
    }, []);

    return (
        <svg width="70%" height="600px" ref={svgRef}/>
    );
};

export default FordFulkersonGraph;