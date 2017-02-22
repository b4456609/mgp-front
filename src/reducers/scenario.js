import {
  SCENARIO_INFO_LOADED,
  DELETE_ALL_DATA
} from '../actions';

const scenario = (state = {}, action) => {
  switch (action.type) {
    case SCENARIO_INFO_LOADED:
      return action.data;
    case DELETE_ALL_DATA:
      return {};
    default:
      return state;
  }
};

export default scenario;
