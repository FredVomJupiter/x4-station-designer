let div = d3.select(".test").append("div")
.style("opacity", 0)
.style('position', 'absolute')
.style('top', '30%')
.style('left', '40%')
.style('width', 'fit-content')
.style('height', 'fit-content')
.style('padding', '0.5rem')
.style('box-shadow', '2px 2px 2px 2px rgba(0,0,0,0.2)')
.style('border-radius', '0.5rem')
.style('color', 'black');

let xScale = d3.scaleBand()
.domain(stationModules.modules.map((data) => data.output.amount))
.rangeRound([0, 15000])
.padding(0.1);
let yScale = d3.scaleLinear().domain([0, 15000]).range([15000, 0]);

let container = d3.select('svg')
.classed('container', true);

let bars = container
.selectAll('.bar')
.data(stationModules.modules)
.enter()
.append('rect')
//.attr('fill', (data) => data.color) color may be added later to database
.attr('width', xScale.bandwidth())
.attr('height', (data) => 200 - yScale(data.amount))
.attr('x', (data) => xScale(data.name))
.attr('y', (data) => yScale(data.output.amount))
.on('mouseover', function (d, i) {
  d3.select(this).transition()
    .duration(125)
    .attr('opacity', '.85');

  div.transition()
    .duration(125)
    .style("opacity", 1);
  div.text(i.name + ": " + i.output.amount)
})
.on('mouseout', function (d, i) {
  d3.select(this).transition()
    .duration(125)
    .attr('opacity', '1');

  div.transition()
    .duration(125)
    .style("opacity", 0);
});