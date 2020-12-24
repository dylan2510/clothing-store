import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";

// middleware just catches the action andd pass it to the reducers

import rootReducer from "./root-reducer";

// put logger in an array, assign it to var middleware
const middlewares = [logger];

// takes in rootReducer and return value of applyMiddleware()
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;