import {addItemToCart} from "./cart.utils";
import {removeItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case "TOGGLE_CART_HIDDEN":
            return {
                // leave all other state as it if, just set hidden
                ...state,
                hidden: !state.hidden
            };

        case "ADD_ITEM":
            return {
                ...state,
                // return a new cartItems array with existing items and a new item from payload
                //cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        
        case "CLEAR_ITEM_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    item => item.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default cartReducer;