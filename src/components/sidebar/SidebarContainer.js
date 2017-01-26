import React, {Component} from 'react';
import {connect} from 'react-redux';
import ServiceEndpointInfo from './ServiceEndpointInfo.js';
import ServiceInfo from './ServiceInfo.js';
import ServiceCallInfo from './ServiceCallInfo.js';
import SidebarAlert from './SidebarAlert.js';
import GraphOptions from './GraphOptions.js';
import {setCyclic} from '../../actions';

class SidebarContainer extends Component {
  getEndpointInfo() {
    let {showEndpoint, endpointData} = this.props;
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
  getAlert() {
    let {showAlert, alertData,} = this.props;
    if (showAlert) {
      return (<SidebarAlert data={alertData}/>)
    }
    return null;
  }
  render() {
    let {setCyclic,showCyclic} = this.props;
    return (
      <div>
        <GraphOptions showCyclic={showCyclic} setCyclic={setCyclic}/>
        {this.getAlert()}
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
    showAlert: false,
    showCyclic: state.app.showCyclic,
  };
  if (showService) {
    const service = state.service.find((i) => i.id === state.sidebar.serviceId);
    result.serviceData = service;
  }
  if (showEndpoint) {
    const endpoint = state.endpoint.find((i) => i.id === state.sidebar.endpointId);
    result.endpointData = endpoint;
  }
  if (showServiceCall && !state.setting.isNotSet) {
    const split = state.sidebar.serviceCallId.split(' ');
    const consumer = split[0];
    const provider = split[1];
    const serviceCallData = state.serviceCall.find((i) => i.consumer === consumer && i.provider===provider);

    result.serviceCallData = serviceCallData;
  }
  else if(showServiceCall && state.setting.isNotSet){
    result.showAlert = true;
    result.showServiceCall = false;
    result.alertData = {
      title: 'Pact Broker Host',
      text: 'Please set the Pact Broker link to show the pact DSL.'
    }
  }
  return result;
}

function mapDispatchToProps(dispatch) {
  return {
    setCyclic: (checked) => {
      dispatch(setCyclic(checked));
    }
  };
}

export default connect(mapStateToProps,
mapDispatchToProps
)(SidebarContainer);
