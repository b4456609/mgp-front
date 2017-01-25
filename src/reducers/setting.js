import {ON_SAVE_SETTING, SETTING_NOTSET, SETTING_LOADED, SUCCESS_UPLOAD_SETTING,} from '../actions';
const init = {
  isLoading: false,
  isNotSet: true,
  url: '',
}
const setting = (state = init, action) => {
  switch (action.type) {
    case SETTING_NOTSET:
      return Object.assign({}, state, {
        isNotSet: true,
      })
    case SETTING_LOADED:
      return Object.assign({}, state, {
        url: action.data.url,
        isNotSet: false,
      })
    case ON_SAVE_SETTING:
      return Object.assign({}, state, {
        isLoading: true,
        url: action.url,
      })
    case SUCCESS_UPLOAD_SETTING:
      return Object.assign({}, state, {
        isNotSet: false,
        isLoading: false,
      })
    default:
      return state;
  }
};

export default setting;
