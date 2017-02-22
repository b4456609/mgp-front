import {SERVICECALL_INFO_LOADED, DELETE_ALL_DATA} from '../actions';
const initState = []
const serviceCall = (state = initState, action) => {
  switch (action.type) {
    case SERVICECALL_INFO_LOADED:
      return action.data;
    case DELETE_ALL_DATA:
      return initState;
    default:
      return state;
  }
};

export default serviceCall;
