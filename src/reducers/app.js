import {ON_CYCLIC_CHANGE,SET_REPORT_SIDEBAR_INDEX} from '../actions';

const app = (state = {
  showCyclic: false,
  reportSidebarIndex: 0,
}, action) => {
  switch (action.type) {
    case ON_CYCLIC_CHANGE:
      return Object.assign({}, state, {showCyclic: action.checked});
    case SET_REPORT_SIDEBAR_INDEX:
      return Object.assign({}, state, {reportSidebarIndex: action.index});
    default:
      return state;
  }
};

export default app;
