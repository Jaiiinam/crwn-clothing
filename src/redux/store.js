import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; //middleware
import rootReducer from './root-reducer';

//setting up middleware
//going to be array
//can be found on redux documentation

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;