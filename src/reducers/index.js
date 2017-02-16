import { combineReducers } from 'redux';
import graph from './graph.js';
import service from './service.js';
import endpoint from './endpoint.js';
import sidebar from './sidebar.js';
import serviceCall from './serviceCall.js';
import setting from './setting.js';
import app from './app.js';
import scenario from './scenario.js';
import modal from './modal.js';
import report from './report.js';
import bddDoc from './bddDoc.js';

const Reducers = combineReducers({
  app,
  sidebar,
  graph,
  service,
  endpoint,
  serviceCall,
  setting,
  scenario,
  modal,
  report,
  bddDoc,
});

export default Reducers;
