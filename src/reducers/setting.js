import {
  ON_SAVE_SETTING,
  SETTING_LOADED,
  SUCCESS_UPLOAD_SETTING,
  DELETE_ALL_DATA
} from '../actions';
const initState = {
  isLoading: false,
  isPactNotSet: true,
  pactHostUrl: '',
  bddGitUrl: '',
}
const setting = (state = initState, action) => {
  switch (action.type) {
    case SETTING_LOADED:
      return Object.assign({}, state, {
        pactHostUrl: action.data.pactHostUrl,
        bddGitUrl: action.data.bddGitUrl,
        isPactNotSet: action.data.pactHostUrl === ''
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
      return Object.assign({}, state, { isLoading: false })
    case DELETE_ALL_DATA:
      return initState;
    default:
      return state;
  }
};

export default setting;
