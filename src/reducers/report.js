import { REPORT_TEST_DATA_LOADED, DELETE_ALL_DATA } from '../actions';

let initState = [];
const report = (state = initState, action) => {
  switch (action.type) {
    case REPORT_TEST_DATA_LOADED:
      return action.data.content
    case DELETE_ALL_DATA:
      return initState;
    default:
      return state;
  }
};

export default report;
