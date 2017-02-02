import {ON_SAVE_SETTING, SETTING_LOADED, SUCCESS_UPLOAD_SETTING,} from '../actions';
const init = {
  isLoading: false,
  isPactNotSet: true,
  pactHostUrl: '',
  bddGitUrl: '',
}
const setting = (state = init, action) => {
  switch (action.type) {
    case SETTING_LOADED:
      return Object.assign({}, state, {
        pactHostUrl: action.data.pactHostUrl,
        bddGitUrl: action.data.bddGitUrl,
        isPactNotSet: action.pactHostUrl === ''
          ? true
          : false
      })
    case ON_SAVE_SETTING:
      return Object.assign({}, state, {
        isPactNotSet: action.pactHostUrl === ''
          ? true
          : false,
        isLoading: true,
        pactHostUrl: action.pactHostUrl,
        bddGitUrl: action.bddGitUrl,
      })
    case SUCCESS_UPLOAD_SETTING:
      return Object.assign({}, state, {isLoading: false})
    default:
      return state;
  }
};

export default setting;
