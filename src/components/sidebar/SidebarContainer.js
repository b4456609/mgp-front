import React, {Component} from 'react';
import {connect} from 'react-redux';
import ServiceEndpointInfo from './ServiceEndpointInfo.js';
import ServiceInfo from './ServiceInfo.js';
import ServiceCallInfo from './ServiceCallInfo.js';

class SidebarContainer extends Component {
  getEndpointInfo() {
    let {showEndpoint, endpointData,} = this.props;
    if (showEndpoint) {
      return (<ServiceEndpointInfo data={endpointData}/>)
    }
    return null;
  }
  getServiceInfo() {
    let {showService, serviceData,} = this.props;
    let result = null;
    if (showService) {
      result = (<ServiceInfo data={serviceData}/>);
    }
    return result;
  }
  getServiceCallInfo() {
    let {showServiceCall, serviceCallData,} = this.props;
    if (showServiceCall) {
      return (<ServiceCallInfo data={serviceCallData}/>)
    }
    return null;
  }
  render() {
    return (
      <div>
        {this.getEndpointInfo()}
        {this.getServiceInfo()}
        {this.getServiceCallInfo()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {showService, showServiceCall, showEndpoint,} = state.sidebar;
  let result = {
    showService,
    showServiceCall,
    showEndpoint,
  };
  if (showService) {
    const service = state.service.find((i) => i.id === state.sidebar.serviceId);
    result.serviceData = service;
  }
  if (showEndpoint) {
    const endpoint = state.endpoint.find((i) => i.id === state.sidebar.endpointId);
    result.endpointData = endpoint;

  }
  if (showServiceCall) {
    const serviceCallData = state.serviceCall.find((i) => i.id === state.sidebar.serviceCallId)
    result.serviceCallData = serviceCallData;
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
