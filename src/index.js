import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import getRoutes from './routes';
const middleware = [thunk];
const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);
  
ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <BrowserRouter>
      {getRoutes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);