import React, {useRef} from "react";

const TestGraph = () => {

    const svgRef = useRef();
    console.log(svgRef);

    return(
        <React.Fragment>
            <svg ref={svgRef}>

            </svg>
        </React.Fragment>
    );

}

export default TestGraph;