'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from './Config/Router';
import { store } from './Config/reduxStore';

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
