import {GRAPH_LOADED} from '../actions';

const app = (state = {data:{}}, action) => {
  switch (action.type) {
    case GRAPH_LOADED:
      return Object.assign({}, state, { data: action.data });
    default:
      return state;
  }
};

export default app;
