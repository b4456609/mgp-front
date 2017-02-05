import {
  getGraph,
  getSetting,
  getServiceInfo,
  getServiceCallInfo,
  getEndpointInfo,
  buildSwaggerURL,
  updateSetting,
  getScenarioInfo,
  updateAppData,
} from '../api/mgp.js';

export function updateAppDataAndRefresh() {
  return (dispatch) => {
    updateAppData()
      .then(()=>{
        dispatch(getGraphData());
        dispatch(getSettingData());
        dispatch(getServiceCallInfoData());
        dispatch(getServiceInfoData());
        dispatch(getEndpointInfoData());
        dispatch(getScenarioInfoData());
      })
  }
}

export const GRAPH_LOADED = 'GRAPH_LOADED';
export function getGraphData() {
  return (dispatch) => {
    getGraph()
      .then((data) => {
        dispatch({
          type: GRAPH_LOADED,
          data
        });
      })
  };
}

export const SERVICECALL_INFO_LOADED = 'SERVICECALL_INFO_LOADED';
export function getServiceCallInfoData() {
  return (dispatch) => {
    getServiceCallInfo()
      .then((data) => {
        dispatch({
          type: SERVICECALL_INFO_LOADED,
          data
        });
      })
  };
}

export const SERVICE_INFO_LOADED = 'SERVICE_INFO_LOADED';
export function getServiceInfoData() {
  return (dispatch) => {
    getServiceInfo()
      .then((data) => {
        data.forEach((service) => {
          service.swagger = buildSwaggerURL(service.id)
        });
        dispatch({
          type: SERVICE_INFO_LOADED,
          data
        });
      })
  };
}

export const ENDPOINT_INFO_LOADED = 'ENDPOINT_INFO_LOADED';
export function getEndpointInfoData() {
  return (dispatch) => {
    getEndpointInfo()
      .then((data) => {
        dispatch({
          type: ENDPOINT_INFO_LOADED,
          data
        });
      })
  };
}

export const SCENARIO_INFO_LOADED = 'SCENARIO_INFO_LOADED';
export function getScenarioInfoData() {
  return (dispatch) => {
    getScenarioInfo()
      .then((data) => {
        dispatch({
          type: SCENARIO_INFO_LOADED,
          data
        });
      })
  };
}

export const ON_NODE_CLICK = 'ON_NODE_CLICK';
export function onNodeClick(id, group) {
  return {
    type: ON_NODE_CLICK,
    id,
    group,
  }
}

export const ON_SERVICE_CALL_CLICK = 'ON_SERVICE_CALL_CLICK';
export function onServiceCallClick(id){
  return {
    type: ON_SERVICE_CALL_CLICK,
    id
  }
}

export const SETTING_LOADED = 'SETTING_LOADED';
export function getSettingData() {
  return (dispatch) => {
    getSetting()
      .then((data) => {
        dispatch({
          type: SETTING_LOADED,
          data
        });
      }).catch(function(error) {
          console.log('error', error)
      })
  };
}

export const ON_SAVE_SETTING = 'ON_SAVE_SETTING';
export const SUCCESS_UPLOAD_SETTING = 'SUCCESS_UPLOAD_SETTING';
export const FAIL_UPLOAD_SETTING = 'FAIL_UPLOAD_SETTING';
export function onSaveSetting(pactHostUrl, bddGitUrl) {
  return (dispatch) => {
    dispatch({
      type: ON_SAVE_SETTING,
      pactHostUrl,
      bddGitUrl
    });
    updateSetting(pactHostUrl, bddGitUrl)
      .then((response) => {
        if (response.ok) {
          dispatch({type: SUCCESS_UPLOAD_SETTING});
        }
        else{
          dispatch({type: FAIL_UPLOAD_SETTING});
        }
      });
  };
}

export const ON_CYCLIC_CHANGE = 'ON_CYCLIC_CHANGE';
export function setCyclic(checked){
  return {
    type: ON_CYCLIC_CHANGE,
    checked
  }
}

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export function showModal(header, body) {
  return {
    type: SHOW_MODAL,
    header,
    body
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
