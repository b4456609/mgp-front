import {
  ENDPOINT_INFO_LOADED,
  DELETE_ALL_DATA
} from '../actions';
const initState = [];
const app = (state = initState, action) => {
  switch (action.type) {
    case ENDPOINT_INFO_LOADED:
      return action.data;
    case DELETE_ALL_DATA:
      return initState;
    default:
      return state;
  }
};

export default app;
