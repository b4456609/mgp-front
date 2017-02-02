import {SCENARIO_INFO_LOADED} from '../actions';

const scenario = (state = {}, action) => {
  switch (action.type) {
    case SCENARIO_INFO_LOADED:
      return action.data;
    default:
      return state;
  }
};

export default scenario;
