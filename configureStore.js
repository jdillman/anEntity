// REQUIRED: use the entityReducer and add thunk and fetchMiddleware to your middleware

import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import entityReducer from './lib/entityService'

const rootReducer = combineReducers({
  entities: entityReducer,
});

const middleware = applyMiddleware(thunk, fetchMiddleware);

