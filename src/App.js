import React from 'react';
import { Provider } from 'react-redux';

import Router from './Config/Router';
import { store } from './Config/reduxStore';
import ErrorBoundary from './Screens/ErrorBoundary';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  </Provider>
);

export default App;

// export default from '../storybook';
