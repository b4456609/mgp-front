import { buildSwaggerURL } from '../../api/mgp'
import {connect} from 'react-redux';
import SwaggerFiles from './SwaggerFiles'

const mapStateToProps = (state) => ({
  data: state.service.map((i) => {
    return {
      name: i.id,
      link: buildSwaggerURL(i.id)
    }
  })
});


export default connect(mapStateToProps)(SwaggerFiles);
