import {connect} from 'react-redux';
import FeatureFiles from './FeatureFiles'

const mapStateToProps = (state) => ({
  data: state.bddDoc
});


export default connect(mapStateToProps)(FeatureFiles);
