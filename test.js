/*
* This is the fetch method for collecting data froma a json file.

let deficit = {};
const url = 'test.json';

async function getData() {
  let response = await fetch(url);
  deficit = response.json();
}

getData();
*/

data.children.forEach( child => {
  child.children.forEach( grandchild => {
    grandchild.value = 10 + Math.floor(Math.random() * 100);
  });
});


// Most of the below code is from https://www.d3-graph-gallery.com/graph/treemap_json.html
// created by Yan Holtz https://www.yan-holtz.com/. I have modified it to fit my needs.

// Returns 10 colors *** added by me ***
let color = d3.scaleOrdinal(d3.schemeCategory10);

// set the dimensions and margins of the graph
const margin = { top: 10, right: 10, bottom: 10, left: 10 },
  width = 800 - margin.left - margin.right,
  height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#myDataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    `translate(${margin.left}, ${margin.top})`);

const legend = d3.select("#myLegend")
  .append("svg")
  .selectAll('rect');

const tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .style("background-color", "#000")
  .text("a simple tooltip");

// Give the data to this cluster layout:
const root = d3.hierarchy(data).sum(function (d) { return d.value }) // Here the size of each leave is given in the 'value' field in input data

// Then d3.treemap computes the position of each element of the hierarchy
d3.treemap()
  .size([width, height])
  .padding(2)
  (root)

// use this information to add rectangles:
svg
  .selectAll("rect")
  .data(root.leaves())
  .join("rect")
  .attr('x', function (d) { return d.x0; })
  .attr('y', function (d) { return d.y0; })
  .attr('width', function (d) { return d.x1 - d.x0; })
  .attr('height', function (d) { return d.y1 - d.y0; })
  .style("fill", function (d) { return color(d.parent.data.name) }) // color is based on parent's name *** added by me ***
  .on('mouseover', function (d, i) { // mouseover and mouseout are used to change opacity of the rectangles *** added by me ***
    d3.select(this).transition()
      .duration(125)
      .attr('opacity', '.85')
      .attr('cursor', 'pointer');

    tooltip.style("visibility", "visible")
      .style("left", (d.pageX + 10) + "px")
      .style("top", (d.pageY + 10) + "px")
      .style("color", "white")
      .style("padding", "0.5rem")
      .style("box-shadow", "2px 2px 2px 2px rgba(0, 0, 0, 0.2)")
      .text(i.data.name + ": " + i.data.value);
  })
  .on('mouseout', function (d, i) {
    d3.select(this).transition()
      .duration(125)
      .attr('opacity', '1');

    tooltip.style("visibility", "hidden");
  });

// and to add the text labels
svg
  .selectAll("text")
  .data(root.leaves())
  .join("text")
  .attr("x", function (d) { return d.x0 + 5 })    // +5 to adjust position (more right)
  .attr("y", function (d) { return d.y0 + 10 })    // +20 to adjust position (lower)
  .text(function (d) { return d.data.name })
  .attr("font-size", "0.5rem")
  .attr("fill", "black")
  .attr('cursor', 'pointer'); //*** added by me ***

svg //*** added by me ***
  .selectAll("#mDataviz")
  .data(root.leaves())
  .join("text")
  .attr("x", function (d) { return d.x0 + 5 })    // +5 to adjust position (more right)
  .attr("y", function (d) { return d.y0 + 20 })    // +35 to adjust position (lower)
  .text(function (d) { return d.data.value })
  .attr("font-size", "0.5rem")
  .attr("fill", "black")
  .attr('cursor', 'pointer');

legend
  .data(root.children)
  .enter()
  .append('rect')
  .attr('width', 90)
  .attr('height', 20)
  .style("fill", function (d) { return color(d.data.name) })
  .attr("transform", function (d, i) { return "translate( 0, " + (i * 20) + " )" });

legend
  .data(root.children)
  .enter()
  .append('text')
  .attr("x", 0)
  .attr("y", 15)
  .text(function (d) { return d.data.name })
  .attr("font-size", "0.8rem")
  .attr("transform", function (d, i) { return "translate( 0, " + (i * 20) + " )" });
