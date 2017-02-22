import { onNodeClick, onServiceCallClick } from '../../actions';
import {hide, show} from './style';

const d3 = window.d3;
const color = d3.scaleOrdinal(d3.schemeCategory20);
let simulation;

export function setSimulation(sim) {
  simulation = sim
}

export function buildLink(svg, link, dispatch, disableNodeHoverClick) {
  let linkEle = svg
    .selectAll(".call-link")
    .data(link)
    .enter().append("svg:path")
    .attr("marker-end", "url(#end-arrow)")
    .attr('class', function (d) {
      return "call-link " + d.className
    });
  if(!disableNodeHoverClick){
    linkEle
      .on('click', function (i) {
        dispatch(onServiceCallClick(i.source.id + ' ' + i.target.id));
      })
  }
  return linkEle;
}

export function buildLine(svg, line) {
  return svg
    .selectAll("line")
    .data(line)
    .enter()
    .append("line")
    .attr('class', function (d) {
      return "servicelink " + d.className
    });
}

export function buildNode(svg, nodes, dispatch, disableNodeHoverClick) {

  var group = svg
    .selectAll("g")
    .data(nodes)
    .enter()
    .append("g");


  var circle = group
    .append("circle")
    .attr('cx', 0)
    .attr('cy', 0)
    .attr("r", 50)
    .attr("fill", function (d) {
      if (d.group===1)
        return "#00BDEC"
      if (d.group === 2)
        return "#16768E"
      if (d.group === 3)
        return "#E4AD0C"
      return color(d.group);
    })
    .attr('class', function (d) {
      return d.className
    });


  group.append("text")
    .attr('text-anchor', 'middle')
    .attr('font-size', '11px')
    .attr('fill', '#ffffff')
    .text(function (d) {
      return d.label;
    });

  if(!disableNodeHoverClick){
    circle
      .on('mouseover', onMouseOver)
      .on('mouseout', onMouseOut)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    //click on endpoint, service and service call
    circle
      .on('click', function (i) {
        dispatch(onNodeClick(i.id, i.group));
      });
  }
  return group;
}



function onMouseOver(obj, index, elementArray) {
  hide();
  let classStringToken = obj.className.split(' ');
  for (let item of classStringToken) {
    if (item.includes('start')) {
      let startElement = document.getElementsByClassName(item)[0];
      startElement.setAttribute('style', "stroke: orange; stroke-width: 4px;");
      let targetClass = item.substring(0, item.indexOf('-'));
      let groupElements = document.getElementsByClassName(targetClass);
      for (let ele of groupElements) {
        ele.setAttribute('style', "stroke: #EC7100; stroke-width: 4px;");
      }
    }
  }
}


function onMouseOut(obj, index, elementArray) {
  show();
  let classStringToken = obj.className.split(' ');
  for (let item of classStringToken) {
    if (item.includes('start')) {
      let startElement = document.getElementsByClassName(item)[0];
      startElement.setAttribute('style', "");
      let targetClass = item.substring(0, item.indexOf('-'));
      let groupElements = document.getElementsByClassName(targetClass);
      for (let ele of groupElements) {
        ele.setAttribute('style', "");
      }
    }
  }
}

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
