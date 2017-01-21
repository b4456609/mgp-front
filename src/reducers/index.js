import { combineReducers } from 'redux';
import graph from './graph.js';
import service from './service.js';
import endpoint from './endpoint.js';
import sidebar from './sidebar.js';
import serviceCall from './serviceCall.js';

const Reducers = combineReducers({
  sidebar,
  graph,
  service,
  endpoint,
  serviceCall
});

export default Reducers;
