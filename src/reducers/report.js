import { REPORT_TEST_DATA_LOADED } from '../actions';

const report = (state = [], action) => {
  switch (action.type) {
    case REPORT_TEST_DATA_LOADED:
      return action.data.content
    default:
      return state;
  }
};

export default report;
