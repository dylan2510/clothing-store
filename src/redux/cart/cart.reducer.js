import {addItemToCart} from "./cart.utils";

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

        default:
            return state;
    }
}

export default cartReducer;