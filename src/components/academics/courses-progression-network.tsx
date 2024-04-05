import * as d3 from "d3";
import { useRef, useEffect } from "react";

const completedCourses = ["MATH237", "CPNT217", "CPRG213", "COMM238", "CPRG216"]

const graph = {
    nodes: [
        { id: 21, label: "Semester 1", courseName: "", x: 90, y: 20 },
        { id: 22, label: "Semester 2", courseName: "", x: 270, y: 20 },
        { id: 23, label: "Semester 3", courseName: "", x: 450, y: 20 },
        { id: 24, label: "Semester 4", courseName: "", x: 630, y: 20 },

        { id: 1, label: "CPRG216", courseName: "Object Oriented Programming 1", x: 90, y: 120 },
        { id: 2, label: "COMM238", courseName: "Technical Communications 1", x: 90, y: 270 },
        { id: 3, label: "CPNT217", courseName: "Introduction to Network Systems", x: 90, y: 420 },
        { id: 4, label: "CPRG213", courseName: "Web Development 1", x: 90, y: 570 },
        { id: 5, label: "MATH237", courseName: "Mathematics for Technologists", x: 90, y: 720 },
        { id: 6, label: "CPSY200", courseName: "Software Analysis and Design", x: 270, y: 90 },
        { id: 7, label: "CPRG250", courseName: "Database Design and Programming", x: 270, y: 220 },
        { id: 8, label: "CPRG211", courseName: "Object Oriented Programming 2", x: 270, y: 350 },
        { id: 9, label: "PHIL241", courseName: "Critical Thinking", x: 270, y: 530 },
        { id: 10, label: "CPSY202", courseName: "User Experience and Design", x: 270, y: 730 },
        { id: 11, label: "CPSY301", courseName: "Software Projects: Analysis, Design", x: 450, y: 90 },
        { id: 12, label: "CPRG306", courseName: "Web Development 2", x: 450, y: 300 },
        { id: 13, label: "CPRG307", courseName: "Database Programming", x: 450, y: 430 },
        { id: 14, label: "CPRG304", courseName: "Object Oriented Programming 3", x: 450, y: 555 },
        { id: 15, label: "CPRG303", courseName: "Mobile Application Development", x: 450, y: 720 },
        { id: 16, label: "INTP302", courseName: "Emerging Trends in Software Development", x: 630, y: 100 },
        { id: 17, label: "CPRG305", courseName: "Software Testing and Deployment", x: 630, y: 300 },
        { id: 18, label: "ITSC320", courseName: "Software Security", x: 630, y: 425 },
        { id: 19, label: "CPSY300", courseName: "Operating Systems", x: 630, y: 570 },
        { id: 20, label: "PROJ309", courseName: "Capstone Project", x: 630, y: 730 },
    ],
    edges: [
        { from: 1, to: 6 },
        { from: 1, to: 8 },
        { from: 4, to: 12 },
        { from: 6, to: 11 },
        { from: 7, to: 13 },
        { from: 8, to: 16 },
        { from: 8, to: 14 },
        { from: 8, to: 15 },
        { from: 12, to: 18 },
        { from: 14, to: 17 },
        { from: 14, to: 18 },
        { from: 14, to: 19 },
    ]
};

const NetworkDiagram = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Create node groups
        const nodeGroups = svg
            .selectAll("g.node")
            .data(graph.nodes)
            .enter()
            .append("g")
            .attr("class", "node");

        // Append circles to node groups for non-semester nodes
        const courseNodes = nodeGroups.filter(d => !d.label.startsWith("Semester"));
        courseNodes
            .append("circle")
            .attr("r", 60) // Set node radius
            .attr("fill", (d) =>
                completedCourses.includes(d.label) ? "#00ff66" : "#09c0d9"
            ); // Set node color


        // Append text to node groups
        courseNodes
            .append("foreignObject")
            .attr("width", 80) // Set width of the foreignObject
            .attr("height", 90) // Set height of the foreignObject
            .attr("x", -40) // Adjust position to center the text
            .attr("y", -45) // Adjust position to center the text
            .html((d) => `
          <div xmlns="http://www.w3.org/1999/xhtml">
            <p style="font-size: 0.75rem; text-align: center">${d.label}</p>
            <p style="font-size: 0.75rem; text-align: center">${d.courseName}</p>
          </div>
        `);

        const semesterNodes = nodeGroups.filter(d => d.label.startsWith("Semester"));
        semesterNodes
            .append("text")
            .text((d) => d.label)
            .attr("text-anchor", "middle") // Center text
            .attr("fill", "black");

        // Position nodes
        nodeGroups.attr("transform", (d) => `translate(${d.x},${d.y})`)

        svg.append("defs").append("marker")
            .attr("id", "arrow")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 8)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5")
            .attr("class", "arrowHead");

        // Create edges
        const edgeElements = svg
            .selectAll("line")
            .data(graph.edges)
            .enter()
            .append("line")
            .attr("stroke", "black") // Set edge color
            .attr("stroke-width", 2) // Set edge width
            .attr("marker-end", "url(#arrow)"); // Add arrowhead

        // Position edges
        edgeElements.attr("x1", (d) => {
            const sourceNode = graph.nodes.find(node => node.id === d.from);
            if (sourceNode) {
                const targetNode = graph.nodes.find(node => node.id === d.to);
                if (targetNode) {
                    const dx = targetNode.x - sourceNode.x;
                    const dy = targetNode.y - sourceNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const unitX = dx / distance;
                    const unitY = dy / distance;
                    return sourceNode.x + unitX * 60; // 70 is the radius of the circle
                }
            }
            return 0;
        }).attr("y1", (d) => {
            const sourceNode = graph.nodes.find(node => node.id === d.from);
            if (sourceNode) {
                const targetNode = graph.nodes.find(node => node.id === d.to);
                if (targetNode) {
                    const dx = targetNode.x - sourceNode.x;
                    const dy = targetNode.y - sourceNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const unitX = dx / distance;
                    const unitY = dy / distance;
                    return sourceNode.y + unitY * 60; // 70 is the radius of the circle
                }
            }
            return 0;
        }).attr("x2", (d) => {
            const targetNode = graph.nodes.find(node => node.id === d.to);
            if (targetNode) {
                const sourceNode = graph.nodes.find(node => node.id === d.from);
                if (sourceNode) {
                    const dx = targetNode.x - sourceNode.x;
                    const dy = targetNode.y - sourceNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const unitX = dx / distance;
                    const unitY = dy / distance;
                    return targetNode.x - unitX * 60; // 70 is the radius of the circle
                }
            }
            return 0;
        }).attr("y2", (d) => {
            const targetNode = graph.nodes.find(node => node.id === d.to);
            if (targetNode) {
                const sourceNode = graph.nodes.find(node => node.id === d.from);
                if (sourceNode) {
                    const dx = targetNode.x - sourceNode.x;
                    const dy = targetNode.y - sourceNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const unitX = dx / distance;
                    const unitY = dy / distance;
                    return targetNode.y - unitY * 60; // 70 is the radius of the circle
                }
            }
            return 0;
        });
    }, []);

    return (
        <svg ref={svgRef} width={"81%"} className="mx-auto " height="790"></svg>
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
                <div className="w-5 h-full bg-[#09c0d9] aspect-square"></div>
                <h3>Incompleted courses</h3>
            </div>
        </div>
        <NetworkDiagram />
    </div>
}