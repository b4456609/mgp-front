import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reducer from './reducers';
import {applyMiddleware, createStore,} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import {Router, Route, browserHistory, IndexRoute,} from 'react-router';

import GraphPage from './GraphPage.js';
import HowPage from './HowPage.js';
import SettingPage from './SettingPage.js';
import DocumentPage from './DocumentPage.js';

import {
  getGraphData,
  getSettingData,
  getServiceCallInfoData,
  getServiceInfoData,
  getEndpointInfoData,
} from './actions';

const logger = createLogger();

const debugMidware = [];
if (process.env.NODE_ENV !== 'production') {
  debugMidware.push(window.devToolsExtension && window.devToolsExtension());
}

debugMidware.push(applyMiddleware(thunk, logger));

const store = createStore(reducer, ...debugMidware);

//get init data
store.dispatch(getGraphData());
store.dispatch(getSettingData());
store.dispatch(getServiceCallInfoData());
store.dispatch(getServiceInfoData());
store.dispatch(getEndpointInfoData());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={GraphPage}/>
        <Route path="document" component={DocumentPage} />
        <Route path="how" component={HowPage} />
        <Route path="setting" component={SettingPage} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
