import React from 'react';
import { Provider } from 'react-redux';

import Router from './Config/Router';
import { store } from './Config/reduxStore';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
