import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Graph.css';
import { force, setTickedEle, ticked } from './force'
import arrow from './arrow'
import { buildLink, buildLine, buildNode, setSimulation } from './element'
import { concateData } from './util'
import { showCyclic, hideCyclic } from './cyclic'
import zoom from './zoom'

const d3 = window.d3;

let simulation;

function draw(graph, dispatch) {
  var svg = d3.select("svg");
  var width = document.querySelector('div.col-lg-9').offsetWidth;
  var height = window.innerHeight - 80;

  let g = svg.append('g');
  //zoom function
  zoom(svg, g);

  //for lagecy code
  svg = g;

  simulation = force(height, width);
  setSimulation(simulation);

  //build svg arrow
  arrow(svg);
  //build arrow link
  var link = buildLink(svg, graph.providerEndpointWithConsumerPair);

  //concate line data
  let lineData = concateData(graph.serviceWithEndpointPair, graph.scenarioEndpointPair);
  var servicesDep = buildLine(svg, lineData, dispatch);

  //build nodes
  var group = buildNode(svg, graph.nodes, dispatch);

  //simulation force
  setTickedEle(link, servicesDep, group);
  simulation
    .nodes(graph.nodes)
    .on("tick", ticked);

  let gr = concateData(graph.serviceWithEndpointPair, graph.scenarioEndpointPair, graph.providerEndpointWithConsumerPair);
  simulation
    .force("link")
    .links(gr)

}

function showError() {
  let errors = document.querySelectorAll('.error');
  [].forEach.call(errors, (item) => {
    if (item.className.baseVal.includes('error')) {
      item.setAttribute('style', "stroke: red; stroke-width: 4px;")
    }
  });
}

class Graph extends Component {
  componentDidMount() {
    let data = JSON.parse(this.props.dataString);
    if (data instanceof Object && 'serviceWithEndpointPair' in data) {
      draw(data, this.props.dispatch);
      showError();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    var myNode = document.getElementById("graph");
    myNode.innerHTML = '';
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    let data = JSON.parse(this.props.dataString);
    if (data instanceof Object && 'serviceWithEndpointPair' in data) {
      draw(data, this.props.dispatch);
    }
    if (this.props.showCyclic) {
      showCyclic();
    }
    else {
      hideCyclic();
    }
    showError();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.dataString !== this.props.dataString
  }

  render() {
    return (<svg id="graph" width='100%' height={window.innerHeight - 80} />);
  }
}

export default connect()(Graph);
