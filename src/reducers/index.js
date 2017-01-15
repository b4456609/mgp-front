import { combineReducers } from 'redux';
import graph from './graph.js';
import service from './service.js';
import app from './app.js';

const Reducers = combineReducers({
  app,
  graph,
  service
});

export default Reducers;
