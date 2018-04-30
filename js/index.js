$(document).ready( function() {
  var mapTable = createMapTable();

  var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
  initSvg();
  window.setInterval(updateSvg, 5000);

  function initSvg() {
    initHotDesksSvg(mapTable.hotDesks,div);
    initPersonalDesksSvg(mapTable.personalDesks,div);
  }

  function updateSvg() {
    updateHotDesksSvg(mapTable.hotDesks);
    updatePersonalDesksSvg();
  }


    d3.select("image")
    .on("click",select1)
    function select1 () {
      console.log("p1:(" + d3.event.x+";" + d3.event.y+");")
      d3.select("image").on("click",select2);
    }
    function select2() {
      console.log("p2:(" + d3.event.x+";" + d3.event.y+");")
      d3.select("image").on("click",select1);
    }

});
