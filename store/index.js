import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
//import auth from './auth';
import sectionsReducer from './sections';
import reviewsReducer from './reviews';
//import usersReducer from './users';

export const reducer = combineReducers({
  // auth,
  sections: sectionsReducer,
  reviews: reviewsReducer,
  //  users: usersReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true})),
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
