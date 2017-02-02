import {SHOW_MODAL, CLOSE_MODAL} from '../actions';

const scenario = (state = {
  show: false,
  title: '',
  body: '',
}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {show: true, title: action.header, body: action.body});
    case CLOSE_MODAL:
      return Object.assign({}, state, {show: false});
    default:
      return state;
  }
};

export default scenario;
