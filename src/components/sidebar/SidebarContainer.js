import React, {Component} from 'react';
import {connect} from 'react-redux';
import ServiceEndpointInfo from './ServiceEndpointInfo.js';
import ServiceInfo from './ServiceInfo.js';
import ServiceCallInfo from './ServiceCallInfo.js';
import SidebarAlert from './SidebarAlert.js';
import GraphOptions from './GraphOptions.js';
import ScenarioInfo from './ScenarioInfo.js';
import {setCyclic, showModal, refresh, changeGraphType} from '../../actions';

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
  getScenarioInfo() {
    let {showScenario, scenarioData, showFeature} = this.props;
    if (showScenario) {
      return (<ScenarioInfo data={scenarioData} showFeature={showFeature}/>)
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
    let {setGraphType, setCyclic,showCyclic, refresh} = this.props;
    return (
      <div>
        <GraphOptions showCyclic={showCyclic} setCyclic={setCyclic} refresh={refresh} setGraphType={setGraphType}/>
        {this.getAlert()}
        {this.getEndpointInfo()}
        {this.getServiceInfo()}
        {this.getServiceCallInfo()}
        {this.getScenarioInfo()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {showService, showServiceCall, showEndpoint,showScenario} = state.sidebar;
  let result = {
    showService,
    showServiceCall,
    showEndpoint,
    showScenario,
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
  if (showScenario) {
    console.log(state.sidebar.scenarioId);
    const scenario = state.scenario.scenarios.find((i) => i.id === state.sidebar.scenarioId);
    console.log(scenario);
    const feature = state.scenario.features.find((i) => i.id === scenario.featureId)
    console.log(feature);
    result.scenarioData = Object.assign({}, scenario, {feature:feature});
  }
  if (showServiceCall) {
    const split = state.sidebar.serviceCallId.split(' ');
    const consumer = split[0];
    const provider = split[1];
    const serviceCallData = state.serviceCall.find((i) => i.consumer === consumer && i.provider===provider);

    result.serviceCallData = serviceCallData;
    // show alert if the pact is not show
    if(state.setting.isPactNotSet){
      result.showAlert = true;
      result.alertData = {
        title: 'Pact Broker Host',
        text: 'Please set the Pact Broker link to show the pact DSL.'
      }
    }
  }
  return result;
}

function mapDispatchToProps(dispatch) {
  return {
    setCyclic: (checked) => {
      dispatch(setCyclic(checked));
    },
    showFeature: (title, body) => {
      dispatch(showModal(title, body, 'code'));
    },
    refresh: ()=>{
      dispatch(refresh());
    },
    setGraphType: (type)=>{
      dispatch(changeGraphType(type));
    }
  };
}

export default connect(mapStateToProps,
mapDispatchToProps
)(SidebarContainer);
