import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Graph.css';
import { force, setTickedEle, ticked } from './force'
import arrow from './arrow'
import { buildLink, buildLine, buildNode, setSimulation } from './element'
import { concateData } from './util'
import { showCyclic, hideCyclic } from './cyclic'
import zoom from './zoom'
import { setUnTest, show, hide } from './style'
import { Glyphicon } from 'react-bootstrap'

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
    let {dataString, dispatch, disableNodeHoverClick, showUnTest} = this.props;
    let data = JSON.parse(dataString);
    if ('nodes' in data && data.nodes.length === 0) {
      this.setState({ none: true });
    }
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
    if (myNode)
      myNode.innerHTML = '';
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    let {dataString, dispatch, disableNodeHoverClick, type, showUnTest} = this.props;
    let data = JSON.parse(dataString);
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
    let result = (<svg id="graph" width='100%' height={window.innerHeight - 80} />);
    let data = JSON.parse(this.props.dataString);
    if (data && 'nodes' in data && data.nodes.length === 0)
      result = (
        <div className="text-center" style={{ fontSize: '60px', color: 'grey', paddingTop: '50px' }}>
          <Glyphicon glyph="exclamation-sign" />
          <h1>Empty Node</h1>
        </div>);
    return (
      <div>
        <style id="graphStyle">
          {}
        </style>
        {result}
      </div>
    );
  }
}

export default connect()(Graph);
