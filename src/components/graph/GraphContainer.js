import { connect } from 'react-redux';
import Graph from './Graph.js';


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

function mapStateToProps(state) {
  let data = {};
  let disableNodeHoverClick = false;
  let showCyclic = state.app.showCyclic;
  let showUnTest = state.app.showUnTest;
  let type = state.app.graphType;

  if (window.location.pathname.includes('report')) {
    if (state.report instanceof Array && state.report.length > state.app.reportSidebarIndex) {
      data = JSON.parse(state.report[state.app.reportSidebarIndex].visual);
    }
    else {
      data = {};
    }

    disableNodeHoverClick = true;
    showCyclic = false;
  }
  else {
    data = state.graph.data;
  }
  data = getOnly(data, type);
  return {
    dataString: JSON.stringify(data),
    showCyclic,
    showUnTest,
    disableNodeHoverClick,
    type
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph);
