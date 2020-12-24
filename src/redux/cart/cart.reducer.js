const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case "TOGGLE_CART_HIDDEN":
            return {
                // leave all other state as it if, just set hidden
                ...state,
                hidden: !state.hidden
            }

        default:
            return state;
    }
}

export default cartReducer;