$(document).ready( function() {
  var mapTable = createMapTable();

  var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);


  initSvg();
  window.setInterval(updateSvg, 5000);
/*
  d3.select("image")
  .on("click",select1)

  function select1 () {
    console.log("p1:(" + d3.event.x+";" + d3.event.y+");")
    d3.select("image").on("click",select2);
  }

  function select2() {
    console.log("p2:(" + d3.event.x+";" + d3.event.y+");")
    d3.select("image").on("click",select1);
  }*/


  function initSvg() {
    mapTable.forEach(function(data,key) {
      var rectclean = d3.select("svg").select("g").append("rect")
      .attr("id", key)
      .attr("class", "white")
      .attr('width', data.coordinates.width)
      .attr('height', data.coordinates.height)
      .attr("x", data.coordinates.x - data.coordinates.width)
      .attr("y", data.coordinates.y - data.coordinates.height)
      .style("fill-opacity",1)
      .style("fill", "white")
      .style("stroke-width", 0);


      var rect = d3.select("svg").select("g").append("rect")
      .attr("id", key)
      .attr("class", "desk")
      .attr('width', data.coordinates.width)
      .attr('height', data.coordinates.height)
      .attr("x", data.coordinates.x - data.coordinates.width)
      .attr("y", data.coordinates.y - data.coordinates.height)
      .style("fill-opacity",0)
      .style("stroke-width", 2)
      .style("stroke", (data.used ? "red" : "green"))
      .on("click",function(){
        mapTable[this.id].used = !data.used;
      })
      .on("mouseover", function(e,d) {
        div.transition()
        .duration(200)
        .style("opacity", 1);
        div.html("Desk n° " + key + (data.used ? " is currently used" : " is currently available"))
        .style("left", (d3.event.x + 30) + "px")
        .style("top", (d3.event.y - 30) + "px")
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
    d3.select("body").select("svg").selectAll("rect.desk").style("stroke", function() {
      return (mapTable[d3.select(this).attr("id")].used
      ? "red"
      : "green");
    });
  }

});
