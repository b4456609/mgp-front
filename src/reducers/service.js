import {SERVICE_INFO_LOADED} from '../actions';

const service = (state = [{
  "id": "easylearn-user",
  "endpointCount": 4,
  "serviceCallCount": 1,
  "swagger": 'http://140/123'
}], action) => {
  switch (action.type) {
    case SERVICE_INFO_LOADED:
      return action.data;
    default:
      return state;
  }
};

export default service;
