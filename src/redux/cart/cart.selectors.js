import {createSelector} from "reselect";

// retrieve cart state
const selectCart = (reducer) => {
    return reducer.cart;
}

export const selectCartItems = createSelector (
    // Array of state objects
    [selectCart],
    // input - selectCart.cart, output - return cart.cartItems
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector (
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    // inout - selectCartItems, output - return total quantity
    (cartItems) => cartItems.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.quantity
    } , 0)
)

export const selectCartTotal = createSelector (
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => {
        return accumulator + (cartItem.quantity * cartItem.price)
    } , 0)
)
