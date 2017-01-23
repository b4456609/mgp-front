import {getGraph, getSetting} from '../api/mgp.js';

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
