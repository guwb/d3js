/** this is how we start d3js with javascript **/
function start ()
{
    d3.select("body")
        .append("p")
        .text("Load text with d3.js! today");

    console.log(d3);
}
function scaling ()
{
    var graphData   = [10, 1200],
        w           = 500,
        h           = 800;

    var scaling     = d3.scale.linear()
        .domain([0,1200])
        .range([0,w]);

    var canvas  = d3.select(".graphContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var graphBars   = canvas.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("fill", "pink")
        .attr("width", function (d)
        {
            return scaling(d);
        })
        .attr("height", 20)
        .attr("y", function (d,i)
        {
            return i * 50;
        })
}
function svgExample()
{
   var canvas = d3.select("body")
       .append("svg")
       .attr("width", 700)
       .attr("height", 700);

    var circle = canvas.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 10)
        .attr("fill", "blue");

    var rectangle = canvas.append("rect")
        .attr("width", 100)
        .attr("height", 100);

    var line = canvas.append("line")
        .attr("x1", 0)
        .attr("x2", 200)
        .attr("y1", 100)
        .attr("y2", 300)
        .attr("stroke", "grey")
        .attr("stroke-width", 3);

}
function visualizeOranges ()
{
    var orangeData  = [10, 30, 50, 100];

    var canvas = d3.select(".orangeContainer")
        .append("svg")
        .attr("width", 768)
        .attr("height", 1024);

    var oranges     = canvas.selectAll("circle")
        .data(orangeData)
        .enter()
        .append("circle")
        .attr("fill", "orange")
        .attr("cx", function (d,i)
        {
            return d + (i * 100);
        })
        .attr("cy", function (d)
        {
            return d;
        })
        .attr("r", function (d)
        {
            return d;
        });

}