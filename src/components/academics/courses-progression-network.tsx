import * as d3 from "d3";
import { useRef, useEffect } from "react";

const completedCourses = ["MATH237", "CPNT217", "CPRG213", "COMM238", "CPRG216"]

const graph = {
    nodes: [
        { id: 1, label: "MATH237", x: 40, y: 50 },
        { id: 2, label: "CPNT217", x: 40, y: 150 },
        { id: 3, label: "COMM238", x: 40, y: 250 },
        { id: 4, label: "CPRG213", x: 40, y: 350 },
        { id: 5, label: "CPRG216", x: 40, y: 450 },
        { id: 6, label: "CPRG211", x: 220, y: 50 },
        { id: 7, label: "CPRG250", x: 220, y: 150 },
        { id: 8, label: "CPSY200", x: 220, y: 250 },
        { id: 9, label: "CPSY202", x: 220, y: 350 },
        { id: 10, label: "PHIL241", x: 220, y: 450 },
        { id: 11, label: "CPRG303", x: 400, y: 50 },
        { id: 12, label: "CPRG304", x: 400, y: 150 },
        { id: 13, label: "CPRG306", x: 400, y: 250 },
        { id: 14, label: "CPRG307", x: 400, y: 350 },
        { id: 15, label: "CPSY301", x: 400, y: 450 },
        { id: 16, label: "CPRG305", x: 600, y: 50 },
        { id: 17, label: "CPSY300", x: 600, y: 150 },
        { id: 18, label: "INTP302", x: 600, y: 250 },
        { id: 19, label: "ITSC320", x: 600, y: 350 },
        { id: 20, label: "PROJ309", x: 600, y: 450 },
    ],
    edges: [
        { from: 1, to: 6 },
        { from: 1, to: 7 },
        { from: 2, to: 8 },
        { from: 2, to: 9 },
        { from: 4, to: 11 },
        { from: 5, to: 12 },
        { from: 6, to: 13 },
        { from: 7, to: 13 },
        { from: 8, to: 14 },
        { from: 9, to: 15 },
        { from: 11, to: 17 },
        { from: 12, to: 19 },
        { from: 13, to: 19 },
        { from: 14, to: 20 },
    ]
};

const NetworkDiagram = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Create node elements
        const nodeElements = svg.selectAll('circle')
            .data(graph.nodes)
            .enter()
            .append('circle')
            .attr('r', 10) // Set node radius
            .attr('fill', d => completedCourses.includes(d.label) ? "#00ff66" : "#0015ff"); // Set node color

        const labelElements = svg
            .selectAll("text")
            .data(graph.nodes)
            .enter()
            .append("text")
            .text((d) => d.label)
            .attr("x", (d) => d.x + 15) // Adjust label position
            .attr("y", (d) => d.y + 5) // Adjust label position
            .attr("font-size", "12px")
            .attr("fill", "black");

        const edgeElements = svg
            .selectAll("line")
            .data(graph.edges)
            .enter()
            .append("line")
            .attr("stroke", "black") // Set edge color
            .attr("stroke-width", 2); // Set edge width

        // Position nodes
        nodeElements.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

        // Position labels
        labelElements.attr("x", (d) => d.x + 15).attr("y", (d) => d.y + 5);

        // Position edges
        edgeElements
            .attr("x1", (d) => graph.nodes[d.from - 1].x)
            .attr("y1", (d) => graph.nodes[d.from - 1].y)
            .attr("x2", (d) => graph.nodes[d.to - 1].x)
            .attr("y2", (d) => graph.nodes[d.to - 1].y);


    }, []);

    return (
        <svg ref={svgRef} width="85%" className="mx-auto" height="500"></svg>
    );
}

export default () => {
    return <div>
        <div className="mb-5 mt-10 flex items-center justify-evenly">
            <div className="flex items-center gap-3">
                <div className="w-5 h-full bg-[#00ff66] aspect-square"></div>
                <h3>Completed courses</h3>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-5 h-full bg-[#0015ff] aspect-square"></div>
                <h3>Incompleted courses</h3>
            </div>
        </div>
        <NetworkDiagram />
    </div>
}