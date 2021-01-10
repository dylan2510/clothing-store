import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";
import {persistStore} from 'redux-persist';

// middleware just catches the action andd pass it to the reducers

import rootReducer from "./root-reducer";
//import thunk from "redux-thunk";
// replace thunk with Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/root-saga";

const sagaMiddleware = createSagaMiddleware();

// put logger in an array, assign it to var middleware
//const middlewares = [logger];

// apply logger only in dev enviroment
// note that heroku is prod enviroment
//const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// takes in rootReducer and return value of applyMiddleware()
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// persistor
export const persistor = persistStore(store);

// export default { store , persistor };