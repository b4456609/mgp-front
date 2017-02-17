import { connect } from 'react-redux';
import Graph from './Graph.js';

function mapStateToProps(state) {
  let data = {};
  if (window.location.pathname.includes('report')) {
    if (state.report instanceof Array && state.report.length > state.app.reportSidebarIndex) {
      data = JSON.parse(state.report[state.app.reportSidebarIndex].visual);
      console.log(data)
    }
    else {
      data = {};
    }
  }
  else {
    data = state.graph.data;
  }
  return {
    dataString: JSON.stringify(data),
    showCyclic: state.app.showCyclic,
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
