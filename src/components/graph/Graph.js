import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Graph.css';
import {onNodeClick, onServiceCallClick} from '../../actions';
const d3 = window.d3;

function draw(graph, dispatch){
  console.log(graph);
  var svg = d3.select("svg");
  var width = document.querySelector('div.col-lg-9').offsetWidth;
  var height = window.innerHeight-80;
  var nodes = d3.range(1000).map(function(i) {
    return {
      index: i*-100
    };
  });

  var color = d3.scaleOrdinal(d3.schemeCategory20);
  var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink().id(function(d) {
      return d.id;
    }).distance(function(...i){
      // console.log(i);
      //relationship of node and endpoint
      if(i[0].target.id.indexOf(i[0].source.id) !== -1){
        return 130;
      }
      return 200;
    }).strength(function (...i) {
      // console.log(i);
      //relationship of node and endpoint
      if(i[0].target.id.indexOf(i[0].source.id) !== -1){
        return 1;
      }
      return 0.3;

    }))
    .force("charge", d3.forceManyBody()
        .strength(function(...i){
          //relationship of node and endpoint
          if('id' in i[0] && i[0].id.indexOf(' ')===-1){
            return 500;
          }
          return -600;
        })
        .distanceMax(200)
        .distanceMin(20))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(60));

  // build the arrow.
  svg.append('svg:defs').append('svg:marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#000');


  var link = svg
    .selectAll(".call-link")
    .data(graph.providerEndpointWithConsumerPair)
    .enter().append("svg:path")
    .attr("marker-end", "url(#end-arrow)")
    .attr('class', function (d) {
      return "call-link " + d.className
    });
    let lineData = [].concat(graph.serviceWithEndpointPair).concat(graph.scenarioEndpointPair);
  var servicesDep = svg
    .selectAll("line")
    .data(lineData)
    .enter()
    .append("line")
    .attr('class', function (d) {
      return "servicelink " + d.className
    });

  var group = svg
    .selectAll("g")
    .data(graph.nodes)
    .enter()
    .append("g");

  var circle = group
    .append("circle")
    .attr('cx', 0)
    .attr('cy', 0)
    .attr("r", 50)
    .attr("fill", function(d) {
      return color(d.group);
    })
    .attr('class', function (d) {
      return d.className
    });
    circle
    .on('mouseover', onMouseOver)
    .on('mouseout', onMouseOut)
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

    //click on endpoint, service and service call
    circle
      .on('click', function(i){
        dispatch(onNodeClick(i.id));
      });
    link
      .on('click', function(i){
        dispatch(onServiceCallClick(i.source.id + ' ' + i.target.id));
      })

  function onMouseOver(obj, index, elementArray){
    let classStringToken = obj.className.split(' ');
    for(let item of classStringToken){
      if(item.includes('start')){
        let startElement = document.getElementsByClassName(item)[0];
        startElement.setAttribute('style', "stroke: orange; stroke-width: 4px;");
        let targetClass = item.substring(0, item.indexOf('-'));
        let groupElements = document.getElementsByClassName(targetClass);
        for(let ele of groupElements){
          ele.setAttribute('style', "stroke: red; stroke-width: 4px;");
        }
      }
    }
  }


  function onMouseOut(obj, index, elementArray){
    let classStringToken = obj.className.split(' ');
    for(let item of classStringToken){
      if(item.includes('start')){
        let startElement = document.getElementsByClassName(item)[0];
        startElement.setAttribute('style', "");
        let targetClass = item.substring(0, item.indexOf('-'));
        let groupElements = document.getElementsByClassName(targetClass);
        for(let ele of groupElements){
          ele.setAttribute('style', "");
        }
      }
    }
  }

  group.append("text")
    .attr('text-anchor', 'middle')
    .attr('font-size', '11px')
    .attr('fill', '#ffffff')
    .text(function(d) {
      return d.label;
    });


  simulation
    .nodes(graph.nodes)
    .on("tick", ticked);
  let gr = [];
  gr = gr.concat(graph.providerEndpointWithConsumerPair).concat(graph.serviceWithEndpointPair).concat(graph.scenarioEndpointPair);
  simulation.force("link")
    .links(gr)


    function ticked() {
      link
        .attr("d", function(d) {
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
        .attr("x1", function(d) {
          return d.source.x;
        })
        .attr("y1", function(d) {
          return d.source.y;
        })
        .attr("x2", function(d) {
          return d.target.x;
        })
        .attr("y2", function(d) {
          return d.target.y;
        });

      group
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
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
}

function showCyclic() {
  let serviceLinks = document.querySelectorAll('svg .servicelink');
  let nodes = document.querySelectorAll('svg circle');
  let serviceCallLinks = document.querySelectorAll('svg .call-link');

  console.log(serviceLinks, nodes, serviceLinks);

  [].forEach.call(serviceLinks, function(item) {
    // do whatever
    if(item.className.baseVal.includes('cyclic')){
      item.setAttribute('style', "stroke: orange; stroke-width: 4px;");
    }
  });
  [].forEach.call(nodes, function(item) {
    // do whatever
    if(item.className.baseVal.includes('cyclic')){
      item.setAttribute('style', "stroke: orange; stroke-width: 4px;");
    }
  });
  [].forEach.call(serviceCallLinks, function(item) {
    // do whatever
    if(item.className.baseVal.includes('cyclic')){
      item.setAttribute('style', "stroke: orange; stroke-width: 4px;");
    }
  });
}

function hideCyclic() {
  let serviceLinks = document.querySelectorAll('svg .servicelink');
  let nodes = document.querySelectorAll('svg circle');
  let serviceCallLinks = document.querySelectorAll('svg .call-link');

  console.log(serviceLinks, nodes, serviceLinks);

  [].forEach.call(serviceLinks, function(item) {
    // do whatever
    if(item.className.baseVal.includes('cyclic')){
      item.setAttribute('style', '');
    }
  });
  [].forEach.call(nodes, function(item) {
    // do whatever
    if(item.className.baseVal.includes('cyclic')){
      item.setAttribute('style', '');
    }
  });
  [].forEach.call(serviceCallLinks, function(item) {
    // do whatever
    if(item.className.baseVal.includes('cyclic')){
      item.setAttribute('style', '');
    }
  });
}

class Graph extends Component {
  componentDidMount() {
    if('serviceWithEndpointPair' in this.props.data){
      draw(this.props.data, this.props.dispatch);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if('serviceWithEndpointPair' in this.props.data){
      draw(this.props.data, this.props.dispatch);
    }
    if(this.props.showCyclic){
      showCyclic();
    }
    else{
      hideCyclic();
    }
  }

  render() {
    return (<svg width='100%' height={window.innerHeight-80}/>);
  }
}

export default connect()(Graph);
