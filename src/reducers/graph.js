import {GRAPH_LOADED,
  DELETE_ALL_DATA} from '../actions';
let initState = {data:{}};
const app = (state = initState, action) => {
  switch (action.type) {
    case GRAPH_LOADED:
      return Object.assign({}, state, { data: action.data });
    case DELETE_ALL_DATA:
      return initState;
    default:
      return state;
  }
};

export default app;
