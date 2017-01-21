import {ON_NODE_CLICK} from '../actions';
const init = {
    showEndpoint: false,
    showServiceCall: true,
    showService: false,
    serviceId: 'easylearn-user',
    endpointId: 'easylearn-note endpoint / POST',
    serviceCallId: 'easylearn-pack easylearn-user /pack GET',
}
const sidebar = (state = init, action) => {
  switch (action.type) {
    case ON_NODE_CLICK:
      //the node is service node
      if(action.id.indexOf('')===-1){
        Object.assign({}, state.sidebar, {});
      }
      break;
    default:
      return state;
  }
};

export default sidebar;
