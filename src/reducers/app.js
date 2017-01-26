import {ON_CYCLIC_CHANGE} from '../actions';

const app = (state = {
  showCyclic: false
}, action) => {
  switch (action.type) {
    case ON_CYCLIC_CHANGE:
      return Object.assign({}, state, {showCyclic: action.checked});
    default:
      return state;
  }
};

export default app;
