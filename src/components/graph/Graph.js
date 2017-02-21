import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Graph.css';
import { force, setTickedEle, ticked } from './force'
import arrow from './arrow'
import { buildLink, buildLine, buildNode, setSimulation } from './element'
import { concateData } from './util'
import { showCyclic, hideCyclic } from './cyclic'
import zoom from './zoom'
import {setUnTest, show, hide} from './style'

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

function getOnly(data, type){
  let result = {};
    if (type === 'path'){
      result.nodes = data.nodes.filter(i=> i.className.includes('group'));
      result.providerEndpointWithConsumerPair = data.providerEndpointWithConsumerPair.filter(i => i.className.includes('group'));
      result.serviceWithEndpointPair = data.serviceWithEndpointPair.filter(i=> i.className.includes('group'));
      result.scenarioEndpointPair = data.scenarioEndpointPair.filter(i=> i.className.includes('group'));
    }
    else if(type === 'cyclic'){
      result.nodes = data.nodes.filter(i=> i.className.includes('cyclic'));
      result.providerEndpointWithConsumerPair = data.providerEndpointWithConsumerPair.filter(i => i.className.includes('cyclic'));
      result.serviceWithEndpointPair = data.serviceWithEndpointPair.filter(i=> i.className.includes('cyclic'));
      result.scenarioEndpointPair = data.scenarioEndpointPair.filter(i=> i.className.includes('cyclic'));
    }
    else{
      result = data;
    }
    return result;
}

class Graph extends Component {
  componentDidMount() {
    let {type, dataString, dispatch, disableNodeHoverClick, showUnTest} = this.props;
    let data = JSON.parse(dataString);
    data = getOnly(data, type);
    if (data instanceof Object && 'serviceWithEndpointPair' in data) {
      draw(data, dispatch, disableNodeHoverClick);
    }

    setUnTest(showUnTest);
    if (this.props.showCyclic) {
      hide();
      showCyclic();
    }
    else {
      show();
      hideCyclic();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    var myNode = document.getElementById("graph");
    myNode.innerHTML = '';
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    let {dataString, dispatch, disableNodeHoverClick, type, showUnTest} = this.props;
    let data = JSON.parse(dataString);
    data = getOnly(data, type);
    if (data instanceof Object && 'serviceWithEndpointPair' in data) {
      draw(data, dispatch, disableNodeHoverClick);
    }

    setUnTest(showUnTest);
    if (this.props.showCyclic) {
      hide();
      showCyclic();
    }
    else {
      show();
      hideCyclic();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {

    setUnTest(nextProps.showUnTest);
    if (nextProps.showCyclic) {
      hide();
      showCyclic();
    }
    else {
      show();
      hideCyclic();
    }
    const isChange = nextProps.dataString !== this.props.dataString;

    return isChange || this.props.type !== nextProps.type;
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
