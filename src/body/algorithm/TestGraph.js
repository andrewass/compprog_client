import React, {useEffect, useRef} from "react";
import {select} from "d3";

const data = [25, 53, 34, 12, 45];

const TestGraph = () => {

    const svgRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);

        svg.selectAll("circle")
            .data(data)
            .join(
                enter => enter.append("circle")
                    .attr("r", value => value)
                    .attr("cx", value => value * 2)
                    .attr("cy", value => value * 2)
                    .attr("stroke","red"),
                update => update.attr("class", "updated"),
                exit => exit.remove()
            );
    }, []);

    return (
        <React.Fragment>
            <svg ref={svgRef}>
                <circle/>
            </svg>
        </React.Fragment>
    );

}

export default TestGraph;