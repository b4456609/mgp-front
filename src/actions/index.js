import {
  getGraph,
  getSetting,
  getServiceInfo,
  getServiceCallInfo,
  getEndpointInfo,
  buildSwaggerURL,
} from '../api/mgp.js';

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

export const SETTING_LOADED = 'SETTING_LOADED';
export const SETTING_LOAD_ERROR = 'SETTING_LOAD_ERROR';
export function getSettingData() {
  return (dispatch) => {
    getSetting()
      .then((data) => {
        dispatch({
          type: SETTING_LOADED,
          data
        });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
        dispatch({
          type: SETTING_LOAD_ERROR,
        });
      })
  };
}

export const ON_NODE_CLICK = 'ON_NODE_CLICK';
export function onNodeClick(id) {
  return {
    type: ON_NODE_CLICK,
    id
  }
}

export const ON_SERVICE_CALL_CLICK = 'ON_SERVICE_CALL_CLICK';
export function onServiceCallClick(id){
  return {
    type: ON_SERVICE_CALL_CLICK,
    id
  }
}
export const ON_SAVE_SETTING = 'ON_SAVE_SETTING';
export function onSaveSetting(url) {
  return {
    type: ON_SAVE_SETTING,
    url
  }
}
