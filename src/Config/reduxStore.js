import { createStore } from 'redux'
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

import Reactotron from './reactotronConfig';
import rootReducer from '../reducers';


export const store = createStore(rootReducer, compose(applyMiddleware(ReduxThunk), Reactotron.createEnhancer()))