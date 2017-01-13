import React, {Component} from 'react';
import './Graph.css';
const d3 = window.d3;

function draw(graph){
  console.log(graph);
  var svg = d3.select("svg");
  var width = document.querySelector('div.col-md-9').offsetWidth;
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
    }).distance(180).strength(0.1))
    // .force("charge", d3.forceManyBody())
    // .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force("collide", d3.forceCollide(100).iterations(5).strength(0.2));

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

  svg = svg.append("g")
  .attr("transform", "translate(" + 500 + "," + 500 + ")");

  var link = svg.append("g")
    .attr("class", "links")
    .selectAll("path")
    .data(graph.providerEndpointWithConsumerPair)
    .enter().append("svg:path")
    .attr("marker-end", "url(#end-arrow)")
    .attr('class', function (d) {
      return "link " + d.class
    });

  var servicesDep = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.serviceWithEndpointPair)
    .enter()
    .append("line")
    .attr('class', function (d) {
      return "servicelink " + d.class
    });

  var group = svg.append("g")
    .attr("class", "nodes")
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
      return d.class
    })
    .on('mouseover', onMouseOver)
    .on('mouseout', onMouseOut)
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  function onMouseOver(obj, index, elementArray){
    let s = document.getElementsByClassName(obj.class);

    var i;
    for (i = 0;i < s.length; i++) {
        s[i].setAttribute('style', "stroke: red; stroke-width: 4px;");
        if(s[i].className.baseVal.includes("start"))
          s[i].setAttribute('style', "stroke: green; stroke-width: 4px;");
    }
  }


  function onMouseOut(obj, index, elementArray){
    let s = document.getElementsByClassName(obj.class);

    var i;
    for (i = 0;i < s.length; i++) {
        // s[i].setAttribute('fill' ,'#63fff3');
        s[i].setAttribute('style', "");
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

  simulation.force("link")
    .links(graph.serviceWithEndpointPair)
    .links(graph.providerEndpointWithConsumerPair);


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


class Graph extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGraphData();
    if('serviceWithEndpointPair' in this.props.data){
      draw(this.props.data);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if('serviceWithEndpointPair' in this.props.data){
      draw(this.props.data);
    }
  }

  render() {
    return (<svg width='100%' height={window.innerHeight-80}/>);
  }
}

export default Graph;
