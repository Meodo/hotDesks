$(document).ready( function() {
  var mapTable = createMapTable();

  var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 1);


  initSvg();
  window.setInterval(updateSvg, 1000);


  function initSvg() {
    mapTable.forEach(function(data,key) {
      var rect = d3.select("svg").append("rect")
      .attr("id", key)
      .attr('width', 10)
      .attr('height', 10)
      .attr("x", data.coordinates.x)
      .attr("y", data.coordinates.y)
      .style("fill-opacity",0)
      .style("stroke-width", 3)
      .style("stroke", (data.used ? "red" : "green"))
      .on("click",function(){
        mapTable[this.id].used = !data.used;
      })
      .on("mouseover", function(e,d) {
        div.transition()
        .duration(200)
        .style("opacity", 1);
        div.html("Desk n° " + key + (data.used ? " is currently used" : " is currently available"))
        .style("left", (d3.event.x + 30-1000) + "px")
        .style("top", (d3.event.y - 30-1000) + "px")
        .style("color", "black");
      })
      .on("mouseout", function(d) {
        div.transition()
        .duration(0)
        .style("opacity", 0);
        div.html("")
        .style("left", "0px")
        .style("top", "0px");
      })
    });
  };

  function updateSvg() {
    d3.select("body").select("svg").selectAll("rect").style("stroke", function() {
      return (mapTable[d3.select(this).attr("id")].used
      ? "red"
      : "green");
    });
  }

});
