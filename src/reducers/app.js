import {
  ON_CYCLIC_CHANGE,
  SET_REPORT_SIDEBAR_INDEX,
  REPORT_TEST_DATA_LOADED,
  CHANGE_GRAPH_TYPE,
  GRAPH_LOADING,
  GRAPH_LOADED,
} from '../actions';

const app = (state = {
  showCyclic: false,
  graphType: 'all',
  graphLoading: false,
  reportSidebarIndex: 0,
  reportSideBarIsFirst: true,
  reportSideBarIsLast: true,
  reportSideBarpage: 0,
}, action) => {
  switch (action.type) {
    case GRAPH_LOADING:
      return {...state, graphLoading: true}
    case GRAPH_LOADED:
      return {...state, graphLoading: false}
    case ON_CYCLIC_CHANGE:
      return Object.assign({}, state, { showCyclic: action.checked });
    case SET_REPORT_SIDEBAR_INDEX:
      if (state.reportSidebarIndex === action.index)
        return state
      return { ...state, reportSidebarIndex: action.index };
    case REPORT_TEST_DATA_LOADED:
      return {
        ...state,
        reportSideBarIsFirst: action.data.first,
        reportSideBarIsLast: action.data.last,
        reportSideBarpage: action.data.number,
        reportSidebarIndex: 0
      }
    case CHANGE_GRAPH_TYPE:
      return {
        ...state,
        graphType: action.graphType
      }
    default:
      return state;
  }
};

export default app;
