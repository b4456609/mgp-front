import {ON_NODE_CLICK, ON_SERVICE_CALL_CLICK} from '../actions';
const init = {
  showEndpoint: false,
  showServiceCall: false,
  showService: false,
  showScenario: false,
  serviceId: 'easylearn-user',
  endpointId: 'easylearn-note endpoint / POST',
  serviceCallId: 'easylearn-pack easylearn-user /pack GET',
  scenarioId: '',
}
const sidebar = (state = init, action) => {
  switch (action.type) {
    case ON_NODE_CLICK:
      //endpoint node
      if (action.group === 1) {
        return Object.assign({}, state, {
          showServiceCall: false,
          showEndpoint: true,
          showService: false,
          showScenario: false,
          endpointId: action.id
        });
      } else if (action.group === 2){
        //the node is service node
        return Object.assign({}, state, {
          showServiceCall: false,
          showEndpoint: false,
          showService: true,
          showScenario: false,
          serviceId: action.id
        });
      } else if (action.group === 3){
        //the node is service node
        return Object.assign({}, state, {
          showServiceCall: false,
          showEndpoint: false,
          showService: false,
          showScenario: true,
          scenarioId: action.id
        });
      }
      return state;
    case ON_SERVICE_CALL_CLICK:
      return Object.assign({}, state, {
        showServiceCall: true,
        showEndpoint: false,
        showService: false,
        showScenario: false,
        serviceCallId: action.id,
      })
    default:
      return state;
  }
};

export default sidebar;
