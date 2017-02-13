import React, {Component} from 'react';
import {connect} from 'react-redux';
import Option from './Option.js';
import ReportMarkdown from './ReportMarkdown.js';
import {setCyclic, showModal} from '../../actions';

class ReportSidebarContainer extends Component {
  getEndpointInfo() {
    let {showEndpoint, endpointData} = this.props;
    if (showEndpoint) {
    }
    return null;
  }
  render() {
    return (
      <div>
        <Option />
        <ReportMarkdown />
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
      dispatch(showModal(title, body));
    }
  };
}

export default connect(mapStateToProps,
mapDispatchToProps
)(ReportSidebarContainer);
