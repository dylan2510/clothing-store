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