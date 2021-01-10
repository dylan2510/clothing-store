// functions that returns the action object for the Reducer

// for action.type = TOGGLE_CART_HIDDEN
export const toggleCartHidden = () => {
    return {
        type: "TOGGLE_CART_HIDDEN"
    }
}

// for action.type = ADD_ITEM
export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

// for action.type = ADD_ITEM
export const removeItem = (item) => {
    return {
        type: "REMOVE_ITEM",
        payload: item
    }
}

// for action.type = CLEAR_ITEM_FROM_CART
export const clearItemFromCart = (item) => {
    return {
        type: "CLEAR_ITEM_FROM_CART",
        payload: item
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}