import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";
import {persistStore} from 'redux-persist';

// middleware just catches the action andd pass it to the reducers

import rootReducer from "./root-reducer";

// put logger in an array, assign it to var middleware
const middlewares = [logger];

// takes in rootReducer and return value of applyMiddleware()
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persistor
export const persistor = persistStore(store);

// export default { store , persistor };