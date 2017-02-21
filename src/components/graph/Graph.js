import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Graph.css';
import { force, setTickedEle, ticked } from './force'
import arrow from './arrow'
import { buildLink, buildLine, buildNode, setSimulation } from './element'
import { concateData } from './util'
import { showCyclic, hideCyclic } from './cyclic'
import zoom from './zoom'
import {showStyle} from './style'

const d3 = window.d3;

let simulation;

function draw(graph, dispatch, disableNodeHoverClick) {
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
  var link = buildLink(svg, graph.providerEndpointWithConsumerPair, dispatch, disableNodeHoverClick);

  //concate line data
  let lineData = concateData(graph.serviceWithEndpointPair, graph.scenarioEndpointPair);
  var servicesDep = buildLine(svg, lineData, dispatch);

  //build nodes
  var group = buildNode(svg, graph.nodes, dispatch, disableNodeHoverClick);

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

class Graph extends Component {
  componentDidMount() {
    let {dataString, dispatch, disableNodeHoverClick, showCyclic} = this.props;
    let data = JSON.parse(dataString);
    if (data instanceof Object && 'serviceWithEndpointPair' in data) {
      draw(data, dispatch, disableNodeHoverClick);
      showStyle(true, true);
    }
    if (showCyclic) {
      showStyle(false, false);
      showCyclic();
    }
    else {
      showStyle(true, true);
      hideCyclic();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    var myNode = document.getElementById("graph");
    myNode.innerHTML = '';
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    let {dataString, dispatch, disableNodeHoverClick} = this.props;
    let data = JSON.parse(dataString);
    if (data instanceof Object && 'serviceWithEndpointPair' in data) {
      draw(data, dispatch, disableNodeHoverClick);
    }
    showStyle(true, true);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.showCyclic) {
      showStyle(false, false);
      showCyclic();
    }
    else {
      showStyle(true, true);
      hideCyclic();
    }
    return nextProps.dataString !== this.props.dataString
  }

  render() {
    return (
      <div>
        <style id="graphStyle">
          {}
        </style>
        <svg id="graph" width='100%' height={window.innerHeight - 80} />
      </div>
    );
  }
}

export default connect()(Graph);
