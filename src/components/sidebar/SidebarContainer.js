import React, {Component} from 'react';
import {connect} from 'react-redux';
import ServiceEndpointInfo from './ServiceEndpointInfo.js';
import ServiceInfo from './ServiceInfo.js';
import ServiceCallInfo from './ServiceCallInfo.js';

class SidebarContainer extends Component {
  getServiceInfo(){
    let {showService, serviceData,} = this.props;
    let result = null;
    if (showService) {
      result = (<ServiceInfo data={serviceData}/>);
    }
    return result;
  }
  render() {
    return (
      <div>
        <ServiceEndpointInfo/>
        {this.getServiceInfo()}
        <ServiceCallInfo/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let result = {};
  result.showService = state.app.sidebar.showService;
  if (state.app.sidebar.showService) {
    console.log(state.service);
    let service = state.service.find((i) => i.id === state.app.sidebar.serviceId);
    result.serviceData = service;
  }
  return result;
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getGraphData: () => {
//       dispatch(getGraphData());
//     }
//   };
// }

export default connect(mapStateToProps,
// mapDispatchToProps
)(SidebarContainer);
