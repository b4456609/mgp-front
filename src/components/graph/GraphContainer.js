import { connect } from 'react-redux';
import Graph from './Graph.js';


function mapStateToProps(state) {
  return {
    data: state.graph.data
  };
}


export default connect(
  mapStateToProps,
)(Graph);
