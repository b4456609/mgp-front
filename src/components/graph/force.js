const d3 = window.d3;
let link, servicesDep, group;
export function setTickedEle(link1, servicesDep1, group1){
  link = link1;
  servicesDep = servicesDep1;
  group = group1;
}
export function ticked(){
    link
      .attr("d", function (d) {
        var deltaX = d.target.x - d.source.x,
          deltaY = d.target.y - d.source.y,
          dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
          normX = deltaX / dist,
          normY = deltaY / dist,
          sourcePadding = d.left ? 17 : 12,
          targetPadding = d.right ? 17 : 55,
          sourceX = d.source.x + (sourcePadding * normX),
          sourceY = d.source.y + (sourcePadding * normY),
          targetX = d.target.x - (targetPadding * normX),
          targetY = d.target.y - (targetPadding * normY);
        return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;
      });

    servicesDep
      .attr("x1", function (d) {
        return d.source.x;
      })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });

    group
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      })
}
export function force(height, width){
  return d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {
      return d.id;
    }).distance(function (...i) {
      // console.log(i);
      //relationship of node and endpoint
      if (i[0].target.id.indexOf(i[0].source.id) !== -1) {
        return 130;
      }
      return 200;
    }).strength(function (...i) {
      // console.log(i);
      //relationship of node and endpoint
      if (i[0].target.id.indexOf(i[0].source.id) !== -1) {
        return 1;
      }
      return 0.3;

    }))
    .force("charge", d3.forceManyBody()
      .strength(function (...i) {
        //relationship of node and endpoint
        if ('id' in i[0] && i[0].id.indexOf(' ') === -1) {
          return 500;
        }
        return -600;
      })
      .distanceMax(200)
      .distanceMin(20))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(60));
}
