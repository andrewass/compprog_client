/*

 */
const createNodes = (nodes, svg) => {
    svg.append("g")
        .selectAll("circle")
        .data(nodes)
        .join(enter => {
            enter.append("circle")
                .attr("cx", data => data.x)
                .attr("cy", data => data.y)
                .attr("id", data => data.nodeId)
                .attr("stroke", "black")
                .attr("r", 15)
                .attr("fill", "black")
        });
};

const createEdges = (edges, svg) => {
    svg.append("g")
        .selectAll("line")
        .data(edges)
        .join(enter => {
            enter.append("line")
                .attr("x1", data => svg.select(data.from).attr("cx"))
                .attr("y1", data => svg.select(data.from).attr("cy"))
                .attr("x2", data => svg.select(data.to).attr("cx"))
                .attr("y2", data => svg.select(data.to).attr("cy"))
                .attr("stroke", "black")
        });
}

export {createNodes, createEdges};