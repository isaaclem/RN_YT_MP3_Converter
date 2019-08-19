'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import Reactotron from 'reactotron-react-native';

import rootReducer from './reducers';
import Router from './Config/Router';
// import { store } from './Config/reduxStore';

const store = createStore(rootReducer, compose(applyMiddleware(ReduxThunk), Reactotron.createEnhancer()))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
