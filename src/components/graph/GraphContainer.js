import { connect } from 'react-redux';
import Graph from './Graph.js';

function mapStateToProps(state) {
  let data = {};
  let disableNodeHoverClick = false;
  let showCyclic = state.app.showCyclic;
  let type = state.app.graphType;

  if (window.location.pathname.includes('report')) {
    if (state.report instanceof Array && state.report.length > state.app.reportSidebarIndex) {
      data = JSON.parse(state.report[state.app.reportSidebarIndex].visual);
      console.log(data)
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
  return {
    dataString: JSON.stringify(data),
    showCyclic,
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
