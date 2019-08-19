import ReduxThunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import Reactotron from './reactotronConfig';
import rootReducer from '../reducers';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    Reactotron.createEnhancer()
  )
);
