import {SERVICE_TEST_DATA_LOADED} from '../actions';

const report = (state = [], action) => {
  switch (action.type) {
    case SERVICE_TEST_DATA_LOADED:
      return action.data
    default:
      return state;
  }
};

export default report;
