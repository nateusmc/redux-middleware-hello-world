import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxTimeout } from 'redux-timeout';


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxTimeout())),
);

export default store;
