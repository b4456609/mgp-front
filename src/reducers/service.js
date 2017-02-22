import {SERVICE_INFO_LOADED,
  DELETE_ALL_DATA} from '../actions';
let initState = [];
const service = (state = initState, action) => {
  switch (action.type) {
    case SERVICE_INFO_LOADED:
      return action.data;
    case DELETE_ALL_DATA:
      return initState;
    default:
      return state;
  }
};

export default service;
