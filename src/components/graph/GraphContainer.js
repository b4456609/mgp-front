import { connect } from 'react-redux';
import Graph from './Graph.js';

function mapStateToProps(state) {
  return {
    data: state.graph.data
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
