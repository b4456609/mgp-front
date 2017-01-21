import {getGraph} from '../api/mgp.js';

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
