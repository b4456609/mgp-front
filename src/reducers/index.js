import { combineReducers } from 'redux';
import graph from './graph.js';
import service from './service.js';
import endpoint from './endpoint.js';
import app from './app.js';
import serviceCall from './serviceCall.js';

const Reducers = combineReducers({
  app,
  graph,
  service,
  endpoint,
  serviceCall
});

export default Reducers;
