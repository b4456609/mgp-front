import {ON_NODE_CLICK, ON_SERVICE_CALL_CLICK} from '../actions';
const init = {
  showEndpoint: false,
  showServiceCall: false,
  showService: false,
  serviceId: 'easylearn-user',
  endpointId: 'easylearn-note endpoint / POST',
  serviceCallId: 'easylearn-pack easylearn-user /pack GET',
}
const sidebar = (state = init, action) => {
  switch (action.type) {
    case ON_NODE_CLICK:
      //the node is service node
      if (action.id.indexOf(' ') === -1) {
        return Object.assign({}, state, {
          showServiceCall: false,
          showEndpoint: false,
          showService: true,
          serviceId: action.id
        });
      } else {
        //endpoint node
        return Object.assign({}, state, {
          showServiceCall: false,
          showEndpoint: true,
          showService: false,
          endpointId: action.id
        });
      }
    case ON_SERVICE_CALL_CLICK:
      return Object.assign({}, state, {
        showServiceCall: true,
        showEndpoint: false,
        showService: false,
        serviceCallId: action.id,
      })
    default:
      return state;
  }
};

export default sidebar;
