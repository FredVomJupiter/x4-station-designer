// Most of the below code is from https://www.d3-graph-gallery.com/graph/treemap_json.html created by Yan Holtz https://www.yan-holtz.com/. I have modified it to fit my needs.

// Returns 10 colors *** added by me ***
let color = d3.scaleOrdinal(d3.schemeCategory10);

// set the dimensions and margins of the graph
const margin = { top: 10, right: 10, bottom: 10, left: 10 },
  width = 445 - margin.left - margin.right,
  height = 445 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    `translate(${margin.left}, ${margin.top})`);

// read json data
d3.json("test.json").then(function (data) {

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
    })
    .on('mouseout', function (d, i) {
      d3.select(this).transition()
        .duration(125)
        .attr('opacity', '1');
    });

  // and to add the text labels
  svg
    .selectAll("text")
    .data(root.leaves())
    .join("text")
    .attr("x", function (d) { return d.x0 + 5 })    // +5 to adjust position (more right)
    .attr("y", function (d) { return d.y0 + 20 })    // +20 to adjust position (lower)
    .text(function (d) { return d.data.name })
    .attr("font-size", "15px")
    .attr("fill", "white")
    .attr('cursor', 'pointer'); //*** added by me ***

  svg //*** added by me ***
    .selectAll("#my_dataviz")
    .data(root.leaves())
    .join("text")
    .attr("x", function (d) { return d.x0 + 5 })    // +5 to adjust position (more right)
    .attr("y", function (d) { return d.y0 + 35 })    // +35 to adjust position (lower)
    .text(function (d) { return d.data.value })
    .attr("font-size", "12px")
    .attr("fill", "white")
    .attr('cursor', 'pointer');
})