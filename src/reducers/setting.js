import {ON_SAVE_SETTING, SETTING_LOADED} from '../actions';
const init = {
  url: '',
}
const setting = (state = init, action) => {
  switch (action.type) {
    case SETTING_LOADED:
      return Object.assign({}, state, {
        url: action.data.url,
      })
    case ON_SAVE_SETTING:
      return Object.assign({}, state, {
        url: action.url,
      })
    default:
      return state;
  }
};

export default setting;
