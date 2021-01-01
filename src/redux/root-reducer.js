// base reducer then represents all reducers in the application

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cardReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // pass in the reducers we want to persist here
}

const rootReducer = combineReducers({
    // the key user is pointing to userReducer
    // combineReducers.user = userReducer
    user: userReducer,
    cart: cardReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

/*
export default combineReducers({
    // the key user is pointing to userReducer
    // combineReducers.user = userReducer
    user: userReducer,
    cart: cardReducer
});
*/

