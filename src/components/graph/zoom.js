const d3 = window.d3;

export default function (svg, g){
  svg.call(d3.zoom()
      .scaleExtent([1 / 10, 8])
      .on("zoom", zoomed));

  function zoomed() {
    g.attr("transform", d3.event.transform);
  }
}
